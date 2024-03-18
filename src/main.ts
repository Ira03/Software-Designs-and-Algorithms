//@ts-nocheck
import { Either, fromPromise, ap, right, getOrElse, flatten, map } from './fp/either';
import { pipe, matcher } from './fp/utils';
import { fetchClient, fetchExecutor } from './fetching';
import { ClientUser, ExecutorUser } from './types';
import { fromNullable } from './fp/maybe';
import { sort } from './fp/array';
import { distance } from './utils';
import { fromCompare, Ordering, ordNumber, revert } from './fp/ord';
import { isNone } from './fp/maybe';


type Response<R> = Promise<Either<string, R>>

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = async (): Response<Array<ClientUser>> => {
  const clients = await fromPromise(fetchClient());
  const fn = map((clients: Array<ClientUser>) => clients.map(client => ({ ...client, demands: fromNullable(client.demands) })));
  return fn(clients);
 };

export enum SortBy {
  distance = 'distance',
  reward = 'reward',
}

export const show = (sortBy: SortBy) => (clients: Array<ClientUser>) => (executor: ExecutorUser): Either<string, string> => {


};

export const main = (sortBy: SortBy): Promise<string> => (
  Promise
    .all([getClients(), getExecutor()]) // Fetch clients and executor
    .then(([clients, executor]) => (
      pipe(
        /**
         * Since the "show" function takes two parameters, the value of which is inside Either
         * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
         * Either is an applicative type class, which means that we can apply each parameter by one
         */
        right(show(sortBy)), // Firstly, we need to lift our function to the Either
        ap(clients), // Apply first parameter
        ap(executor), // Apply second parameter
        flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
        getOrElse((err) => err) // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
      )
    ))
);
