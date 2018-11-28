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

const basePath = process.env.NODE_ENV === 'production' ? '/sleepy-elbakyan' : `/`;
export default {
  appData: {
    homePage: `${basePath}`,
    siteName: 'EBlock',
    logoPath: `${basePath}logo.png`
  },
  menu: [
    {
      href: `${basePath}buy`,
      text: 'BUY',
      iconPath: `${basePath}icons/list-icon.svg`,
      children: [
        {
          text: 'UPCOMING',
          href: `${basePath}buy/upcoming`
        }, {
          text: 'LIVE APPRAISALS',
          href: `${basePath}buy/live-appraisals`
        }, {
          text: 'LIVE 24H AUCTIONS',
          href: `${basePath}buy/live-24h-auctions`
        }, {
          text: 'LIVE LANES',
          href: `${basePath}buy/live-lanes`
        }
      ],
    },
    {
      href: `${basePath}sell`,
      text: 'SELL',
      iconPath: `${basePath}icons/car-icon.svg`,
      children: [],
    },
    {
      href: `${basePath}pending`,
      text: 'PENDING',
      iconPath: `${basePath}icons/timer-icon.svg`,
      children: [],
    },
    {
      href: `${basePath}finished`,
      text: 'FINISHED',
      iconPath: `${basePath}icons/gear-icon.svg`,
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