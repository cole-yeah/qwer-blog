import { lazyLoad } from 'utils/loadable';

const LazyChartsPage = lazyLoad(() => import('./index'));

export default LazyChartsPage;
