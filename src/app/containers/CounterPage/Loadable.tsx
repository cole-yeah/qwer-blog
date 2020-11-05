import { lazyLoad } from 'utils/loadable';

const CounterPage = lazyLoad(
  () => import('./index'),
  module => module.default,
);

export default CounterPage;
