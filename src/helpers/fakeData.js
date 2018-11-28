import _ from "lodash";

//generate randomized data similar to how it is showing on the psd
const filterTypes = {
  Outbid: 'Outbid',
  Watching: 'Watching',
  Winning: 'Winning',
};
const getCar = () => {
  const status = _(filterTypes).keys().value()[_.random(2)];
  return ({
    year: [2008, 2011, 2014, 2014, 2014, 2010, 2011][_.random(6)],
    status,
    bidType: ['eBlock ON & QC', 'ESP Direct Montreal'][_.random(1)],
    type: ['Honda Civic', 'GMC Sierra', 'Ford F-150', 'Chevrolet Equinox', 'Ford Escape', 'Ford Edge', 'Lincoln MKX'][_.random(
      6)],
    lane: ['A', 'B', 'C', 'D'][_.random(3)],
    remaining: _.random(210),
    watching: status ? _.random(1, 4) : 0
  });
};

export default {
  appData: {
    homePage: '/',
    siteName: 'EBlock',
    logoPath: '/logo.png'
  },
  menu: [
    {
      href: '/buy',
      text: 'BUY',
      iconPath: '/icons/list-icon.svg',
      children: [
        {
          text: 'UPCOMING',
          href: '/buy/upcoming'
        }, {
          text: 'LIVE APPRAISALS',
          href: '/buy/live-appraisals'
        }, {
          text: 'LIVE 24H AUCTIONS',
          href: '/buy/live-24h-auctions'
        }, {
          text: 'LIVE LANES',
          href: '/buy/live-lanes'
        }
      ],
    },
    {
      href: '/sell',
      text: 'SELL',
      iconPath: '/icons/car-icon.svg',
      children: [],
    },
    {
      href: '/pending',
      text: 'PENDING',
      iconPath: '/icons/timer-icon.svg',
      children: [],
    },
    {
      href: '/finished',
      text: 'FINISHED',
      iconPath: '/icons/gear-icon.svg',
      children: [],
    },
  ],
  user: {
    picturePath: 'https://picsum.photos/28/28',
    name: 'John Doe'
  },
  laneData: Array(_.random(5, 20)).fill(undefined).map(getCar),
  filterTypes
};