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
    title: 'Cleanup and polish',
    description: 'Ensuring that all placeholder sounds, textures, and models in the game have been replaced with production versions.',
    status: NEXT
  },
  {
    title: 'Performance audit',
    description: 'Auditing client and server performance to ensure launch goes smoothly.',
    status: NEXT
  },
  {
    title: 'Internationalization',
    description: 'Allow players to play the game with the interface set to languages other than English.',
    status: NEXT
  },
  {
    title: 'Missions',
    description: 'Players should be able to complete repeatable missions for each of the six factions. They should also be able to receive missions from standalone NPCs.',
    status: COMPLETED
  },
  {
    title: 'Expanded tutorial',
    description: 'Additional optional tutorial missions to introduce new players to the many different aspects of the game.',
    status: COMPLETED
  },
  {
    title: 'Residential space stations',
    description: 'Secure systems should be able to spawn residential space stations. Give players the ability to rent an apartment for a fee. Let players decorate their apartments with rewards and furniture.',
    status: COMPLETED
  },
  {
    title: 'Equippable items overhaul',
    description: 'Add a new equipment tab to the assets screen. Weapons should have rigid equip slots (primary, secondary, utility). Players should be able to swap out clothing. There should be hotkey slots for ship deployables.',
    status: COMPLETED
  },
  {
    title: 'Infantry combat improvements',
    description: 'Some guns should be able to overheat or need to recharge. There should be new tiers and appearances for weapons.',
    status: COMPLETED
  },
  {
    title: 'Player squad system',
    description: 'Players should be able to invite each other to squads, allowing them to see the location of other squad members and warp directly to them (if they are in the same system).',
    status: COMPLETED
  },
  {
    title: 'Pilot lounge station module',
    description: 'A type of residential station module where players can roleplay in a lounge setting, and eventually receive missions and play minigames.',
    status: COMPLETED
  },
  {
    title: 'New anomaly types',
    description: 'Drone hideouts and wrecked spice platforms will be added to make anomaly hunting more interesting.',
    status: COMPLETED
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
    description: 'Performance concerns continue to be a problem here, so planets will need to wait to be added until after release. I want to take the time to do planets right and provide a really fluid experience with them.'
  },
  {
    title: 'Missiles',
    description: 'New space combat feature which will introduce several types of missile with variable damages and agilities which can be utilized by both NPCs and players.'
  },
  {
    title: 'Expanded mining mechanics',
    description: 'Deep core mining, detonators, and an overall more engaging experience.'
  },
  {
    title: 'Drone capital ship battles',
    description: 'The ominous drone carrier anomalies will finally have a purpose.'
  },
  {
    title: 'New Scout class of ships',
    description: 'A new class of ship will be introduced with high speed and very low firepower.'
  },
  {
    title: 'Expanded infantry combat',
    description: 'There should be infantry combat-centric anomalies such as the Dreadnought raid and abandoned stations, and new mechanics to make combat more tactical, such as crouching.'
  },
  {
    title: 'Player-owned starbases',
    description: 'TBA'
  },
  {
    title: 'Multiplayer ships',
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
