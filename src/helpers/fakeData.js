import _ from "lodash";

//generate randomized data similar to how it is showing on the psd
const filterTypes = {
  All: 'All',
  Outbid: 'Outbid',
  Watching: 'Watching',
  Winning: 'Winning',
};
const getCar = () => ({
  year: [2008, 2011, 2014, 2014, 2014, 2010, 2011][_.random(6)],
  status: _(filterTypes).omit('All').keys().value()[_.random(2)],
  bitType: ['eBlock ON & QC', 'ESP Direct Montreal'][_.random(1)],
  type: ['Honda Civic', 'GMC Sierra', 'Ford F-150', 'Chevrolet Equinox', 'Ford Escape', 'Ford Edge', 'Lincoln MKX'][_.random(6)],
  lane: ['A', 'B', 'C', 'D'][_.random(3)]
});

export default {
  menu: [
    {
      href: '/buy',
      text: 'BUY',
      children: [
        {
          text: 'UPCOMING',
          href: '/upcoming'
        }, {
          text: 'LIVE APPRAISALS',
          href: '/live-appraisals'
        }, {
          text: 'LIVE 24H AUCTIONS',
          href: '/live-24h-auctions'
        }, {
          text: 'LIVE LANES',
          href: '/live-lanes'
        }
      ],
    },
    {
      href: '/sell',
      text: 'SELL',
      children: [],
    },
    {
      href: '/pending',
      text: 'PENDING',
      children: [],
    },
    {
      href: '/finished',
      text: 'FINISHED',
      children: [],
    },
  ],
  user: {
    picture: 'https://loremflickr.com/34/34/person'
  },
  laneData: Array(_.random(5, 20)).fill(getCar)
};