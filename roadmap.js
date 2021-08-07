const COMPLETED = 'completed';
const DEPLOYED = 'deployed';
const IN_PROGRESS = 'in-progress';
const NEXT = 'next';
const DELAYED = 'delayed';

const STATUS_NAMES = {
  [COMPLETED]: 'Completed',
  [DEPLOYED]: 'Live',
  [IN_PROGRESS]: 'In progress',
  [NEXT]: 'Next priority',
  [DELAYED]: 'Delayed'
};

const PRE_RELEASE = [
  {
    title: 'Hacking minigame',
    description: 'Secure containers found at anomalies will need to be hacked into before they can be accessed.',
    status: DEPLOYED
  },
  {
    title: 'Ancient structure anomalies',
    description: 'Ancient structures will spawn in anomalies with a new class of loot.',
    status: DEPLOYED
  },
  {
    title: 'Planetary ring mining',
    description: 'Players will be able to warp to planetary rings and mine large asteroid deposits.',
    status: DEPLOYED
  },
  {
    title: 'Astronomical realism v2',
    description: 'System geography will be much more realistic. Alters distribution of planets, orbits, and types of planets.',
    status: DEPLOYED
  },
  {
    title: 'Overhauled system map',
    description: 'New-and-improved solar system map giving much more detailed information about celestial bodies.',
    status: DEPLOYED
  },
  {
    title: 'News terminals',
    description: 'Screens in stations which show player market stats, recent system captures, and bounties.',
    status: DEPLOYED
  },
  {
    title: 'Player bounties',
    description: 'Ability to set bounties on players who kill you, and claim bounties on players by destroying their ships.',
    status: DEPLOYED
  },
  {
    title: 'Ship salvaging',
    description: 'Ships are not permanently lost on death; instead, you can salvage them for resources or credits.',
    status: DEPLOYED
  },
  {
    title: 'Planetary ring visual overhaul',
    description: 'Planetary ring visuals were vastly improved. Each planet now has a unique ring system.',
    status: DEPLOYED
  },
  {
    title: 'NPC faction warfare mechanics',
    description: 'Formally supporting your favorite NPC factions in their quests for galactic dominance. Contested systems. Faction rank structures. Dynamic borders.',
    status: DEPLOYED
  },
  {
    title: 'Astronomical realism',
    description: 'Binary/trinary star systems and realistic planet orbits.',
    status: DEPLOYED
  },
  {
    title: 'Destroyers',
    description: 'A large and powerful class of player ship that use docking tubes to connect to stations.',
    status: DEPLOYED
  },
  {
    title: 'Vexnium',
    description: 'A new, mysterious resource anomaly.',
    status: DEPLOYED
  },
  {
    title: 'Item volume',
    description: 'The inventory has limited capacity, and items take up different amounts of space.',
    status: DEPLOYED
  },
  {
    title: 'Player marketplace',
    description: 'A persistent player market allowing for placing of buy and sell orders, and fulfillment of orders while users are offline.',
    status: DEPLOYED
  },
  {
    title: 'Flak turrets',
    description: 'A new turret type allowing for better point defense against small craft.',
    status: DEPLOYED
  },
  {
    title: 'Targeted warp disruption',
    description: 'The ability to lock on to other players to prevent them from warping. Locking warp disruption bubbles to wild space.',
    status: DEPLOYED
  },
  {
    title: 'Warmods',
    description: 'Active upgrades for warships which greatly increase opportunities for strategic gameplay.',
    status: DEPLOYED
  },
  {
    title: 'New core star systems',
    description: 'A group of six new core systems around the Citadel to improve traffic conditions post-release.',
    status: DEPLOYED
  },
  {
    title: 'Drone battleship',
    description: 'An extremely powerful drone boss which requires teaming up to be able to stand a chance.',
    status: DEPLOYED
  },
  {
    title: 'Test server',
    description: 'An invite-only separate server for the game to allow for more rigorous testing of features before release.',
    status: DEPLOYED
  },
  {
    title: 'Wormholes',
    description: 'An unpredictable anomaly which allows for instantaneous travel to systems across the galaxy.',
    status: DEPLOYED
  },
  {
    title: 'Syndicate frontier outposts',
    description: 'A rare anomaly which has daily deals on items and sells blue-tier spice variants.',
    status: DEPLOYED
  },
  {
    title: 'Manual scanning system',
    description: 'A new mini-game which uses a solar system map to scan down anomalies, and significant anomaly changes and rebalances.',
    status: DEPLOYED
  },
  {
    title: 'Dueling',
    description: 'System which gives players the option to participate in non-lethal PVP duels in secure systems.',
    status: DEPLOYED
  },
  {
    title: 'Player factions',
    description: 'A rudimentary faction system where players can recruit others, assign basic roles to members, and have a visible faction tag.',
    status: DEPLOYED
  },
  {
    title: 'Frigates',
    description: 'The largest pre-release class of ship in the game. Six turret slots and very expensive.',
    status: DEPLOYED
  },
  {
    title: 'Corvettes',
    description: 'A large and powerful class of ship that players can fly. Different types of turrets can be attached to change up strategy.',
    status: DEPLOYED
  },
  {
    title: 'Missions',
    description: 'Players should be able to complete repeatable missions for each of the six factions. They should also be able to receive missions from standalone NPCs.',
    status: DEPLOYED
  },
  {
    title: 'Expanded tutorial',
    description: 'Additional optional tutorial missions to introduce new players to the many different aspects of the game.',
    status: DEPLOYED
  },
  {
    title: 'Residential space stations',
    description: 'Secure systems should be able to spawn residential space stations. Give players the ability to rent an apartment for a fee. Let players decorate their apartments with rewards and furniture.',
    status: DEPLOYED
  },
  {
    title: 'Equippable items overhaul',
    description: 'Add a new equipment tab to the assets screen. Weapons should have rigid equip slots (primary, secondary, utility). Players should be able to swap out clothing. There should be hotkey slots for ship deployables.',
    status: DEPLOYED
  },
  {
    title: 'Infantry combat improvements',
    description: 'Some guns should be able to overheat or need to recharge. There should be new tiers and appearances for weapons.',
    status: DEPLOYED
  },
  {
    title: 'Player squad system',
    description: 'Players should be able to invite each other to squads, allowing them to see the location of other squad members and warp directly to them (if they are in the same system).',
    status: DEPLOYED
  },
  {
    title: 'Pilot lounge station module',
    description: 'A type of residential station module where players can roleplay in a lounge setting, and eventually receive missions and play minigames.',
    status: DEPLOYED
  },
  {
    title: 'New anomaly types',
    description: 'Drone hideouts and wrecked spice platforms will be added to make anomaly hunting more interesting.',
    status: DEPLOYED
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
    title: 'Hauling items overhaul',
    description: 'Changing unused crate slots to just give players additional inventory space instead of requiring the annoying process of transferring items to and from crates.',
    status: COMPLETED
  },
  {
    title: 'Player-owned stations',
    description: 'Space stations owned and operated by players. <a href="https://youtu.be/eZoh2-dOLvo" target="_blank">Watch the Reveal</a>',
    status: IN_PROGRESS
  },
  {
    title: 'Skills',
    description: 'Skills in several different categories trained using skill points that accumulate as you play. Provide small but useful modifiers to stats and gameplay.',
    status: IN_PROGRESS
  },
  {
    title: 'Tutorial overhaul',
    description: 'The game tutorial is being reworked in order to provide a better first-time experience.',
    status: IN_PROGRESS
  },
  {
    title: 'Interface/HUD overhaul',
    description: 'We have embarked on an effort to drastically improve the game interface, with our main focuses surrounding a flight HUD redesign and hotkey visibility.',
    status: IN_PROGRESS
  },
  {
    title: 'Industry overhaul',
    description: 'Crafting recipes will be completely redone to introduce intermediate components. Refining and crafting of all items will take time.',
    status: IN_PROGRESS
  },
  {
    title: 'Rarity overhaul',
    description: 'Significant changes to the rarity system to better fit modern Starscape. Ships will use a unique rarity system that better reflects classes of ship.',
    status: IN_PROGRESS
  },
  {
    title: 'Faction warfare cleanup',
    description: 'Fixing bugs and balance issues related to faction warfare, and reducing the number of contested systems.',
    status: NEXT
  },
  {
    title: 'Region-locked resources',
    description: 'New resources that are locked to specific regions of the galaxy to encourage territorial conflict and make exploration/industry significantly more interesting.',
    status: NEXT
  },
  {
    title: 'Ship loadout overhaul',
    description: 'Warmods, rigs, focus slots, abilities, and upgrades will all be replaced with a new passive/active ship module system. Ships will have different numbers of modules based on size and class.',
    status: NEXT
  },
  {
    title: 'Internationalization',
    description: 'Allow players to play the game with the interface set to languages other than English.',
  },
  {
    title: 'Turret overhaul',
    description: 'New space combat feature which will introduce several types of missile with variable damages and agilities which can be utilized by both NPCs and players.'
  },
  {
    title: 'Custom key bindings',
    description: 'Allow players to rebind key controls to whatever they want.'
  },
  {
    title: 'Expanded mining mechanics',
    description: 'Deep core mining, detonators, and an overall more engaging experience.'
  },
  {
    title: 'Expanded infantry combat',
    description: 'There should be infantry combat-centric anomalies such as the Dreadnought raid and abandoned stations, and new mechanics to make combat more tactical, such as crouching.'
  },
  {
    title: 'Expanded wormhole anomalies',
    description: 'Uncharted wormhole systems, stable wormholes, etc.'
  },
  {
    title: 'Landing on planets',
    description: 'Land on terrestrial planets with unique terrain, flora, and possibly fauna. Building outposts on planet surfaces.'
  },
  {
    title: 'Player-owned capital ships',
    description: 'TBA'
  },
  {
    title: 'Lore-driven mission campaigns',
    description: 'TBA'
  },
  {
    title: 'Multiplayer ships',
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
