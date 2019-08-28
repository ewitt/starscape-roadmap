const COMPLETED = 'completed';
const DEPLOYED = 'deployed';
const IN_PROGRESS = 'in-progress';
const NEXT = 'next';

const STATUS_NAMES = {
  [COMPLETED]: 'Completed',
  [DEPLOYED]: 'Live',
  [IN_PROGRESS]: 'In progress',
  [NEXT]: 'Next priority',
};

const PRE_RELEASE = [
  {
    title: 'Missions',
    description: 'Players should be able to complete repeatable missions for each of the six factions. They should also be able to receive missions from standalone NPCs.',
    status: IN_PROGRESS
  },
  {
    title: 'Residential space stations',
    description: 'Secure systems should be able to spawn residential space stations. Give players the ability to rent an apartment for a fee. Let players decorate their apartments with rewards and furniture.',
    status: NEXT
},
  {
    title: 'Pilot lounge station module',
    description: 'A type of station module where players can receive missions from NPCs, roleplay, and eventually play minigames.',
    status: NEXT
  },
  {
    title: 'Expanded tutorial missions',
    description: 'Additional optional tutorials to introduce new players to the many different aspects of the game.',
    status: NEXT
  },
  {
    title: 'New Scout class of ships',
    description: 'Since interceptors will likely take a speed hit, a new class of ship will be introduced with high speed and very low firepower.'
  },
  {
    title: 'Drone capital ship battles',
    description: 'The ominous drone carrier anomalies will finally have a purpose.'
  },
  {
    title: 'Infantry combat overhaul',
    description: 'Weapon equip slots should have a more rigid structure (primary, secondary, utility). Some guns should be able to overheat or need to recharge, and there should be new tiers and appearances for armor and weapons.'
  },
  {
    title: 'New anomaly types',
    description: 'Drone hideouts and other surprises.'
  },
  {
    title: 'New Vendor class of ships',
    description: 'Just like NPCs do with freighters, players should be able to operate a class of ships that they can set up as a store that other players can buy from directly.',
    status: DEPLOYED
  },
  {
    title: 'Industry system overhaul',
    description: 'Item crafting recipes should be overhauled, asteroids should have variables grades of ore, and there should be additional craftable tiers for each type of ship.',
    status: DEPLOYED
  },
  {
    title: 'Rebalance fighters and interceptors',
    description: 'We need to face facts: the Paragon is king. Interceptors in general have combat superiority over fighters, so a rebalance is necessary to make fighters more viable options.',
    status: DEPLOYED
  },
  {
    title: 'Player tagging',
    description: 'Give players the ability to mark other players with a color that will show up as the color of their tracker icons.',
    status: DEPLOYED
  },
  {
    title: 'New Hauler class of ships',
    description: 'Haulers will be a new type of ship which carry special cargo crates that can be picked up at station loading docks. Crates can be specific to missions, or standard items which will have variable prices across the galaxy, letting players buy low and sell high.',
    status: DEPLOYED
  },
  {
    title: 'Ship abilities',
    description: 'A new ship upgrade slot that lets players equip one of several new upgrades to their ship: tractor beam, signal cloak, or afterburner.',
    status: DEPLOYED
  }
];

const LONG_TERM = [
  {
    title: 'Landing on planets',
    description: 'Performance concerns continue to be a problem here, so planets may need to wait to be added until after release. I want to take the time to do planets right and provide a really fluid experience with them.'
  },
  {
    title: 'Player-owned starbases',
    description: 'TBA'
  },
  {
    title: 'Multiplayer capital ships',
    description: 'TBA'
  },
  {
    title: 'Wormhole anomalies',
    description: 'TBA'
  }
];

const template = document.getElementById('item-template');

const addItemsToGroups = function(group, items) {
  items.forEach(item => {
    const element = template.cloneNode(true);
    if (item.status) {
      element.className = `roadmap-item ${item.status}`;
      element.firstElementChild.lastElementChild.innerHTML = STATUS_NAMES[item.status];
      element.firstElementChild.lastElementChild.className = `item-status sans-font color-${item.status}`;
    }
    element.firstElementChild.firstElementChild.innerHTML = item.title;
    element.lastElementChild.innerHTML = item.description;
    element.id = '';
    group.appendChild(element);
  });
}

//addItemsToGroups(document.getElementById('completed-items'), COMPLETED, true);
addItemsToGroups(document.getElementById('pre-release-items'), PRE_RELEASE, false);
addItemsToGroups(document.getElementById('long-term-items'), LONG_TERM, false);
