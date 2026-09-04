/* =========================================
   RAN ONLINE BUILD CALCULATOR
   PANDAYA / ITEM SYSTEM
========================================= */


/* =========================================
   PANDAYA DATA (GROUPED BY CATEGORY)
========================================= */

const pandayaCategories = [

    {
        name: "SET",
        open: false,
        subcategories: [

            {
                name: "GROCER",
                open: false,
                items: [
                    { name: "Elite Uniform cloth", image:"images/items/elite_uniform_cloth.png", stats: { int: 7 }, slot: "upper" },
                    { name: "Elite uniform pants", image:"images/items/elite_uniform_pants.png", stats: { int: 7 }, slot: "pants" },
                    { name: "Elite uniform shoes", image:"images/items/elite_uniform_shoes.png", stats: { int: 3 }, slot: "shoes" },
                    { name: "Leonine uniform cloth", image:"images/items/leonine_uniform_cloth.png", stats: { int: 4 }, slot: "upper" },
                    { name: "Leonine uniform pants", image: "images/items/leonine_uniform_pants.png", stats: { int: 4 }, slot: "pants" },
                    { name: "Leonine uniform shoes", image:"images/items/leonine_uniform_shoes.png", stats: { int: 2 }, slot: "shoes" }
                ]
            },

            {
                name: "ARCHER",
                open: false,
                items: [
                    { name: "Enhanced Assassin Suit", image:"images/items/enhanced_assassin_suit.png", stats: { dex: 7 }, slot: "upper" },
                    { name: "Enhanced Assassin Pants", image:"images/items/enhanced_assassin_pants.png", stats: { dex: 7 }, slot: "pants" },
                    { name: "Enhanced Assassin Shoes", image:"images/items/enhanced_assassin_shoes.png", stats: { dex: 3 }, slot: "shoes" },
                    { name: "Enhanced Assassin Gloves", image:"images/items/enhanced_assassin_gloves.png", stats: { dex: 3 }, slot: "gloves" }
                ]
            },

            {
                name: "BRAWLER",
                open: false,
                items: [
                    { name: "Enhanced Mercenary Robe", image:"images/items/enhanced_mercynary_robe.png", stats: { dex: 7 }, slot: "upper" },
                    { name: "Enhanced Mercenary Pants", image:"images/items/enhanced_mercynary_pants.png", stats: { dex: 7 }, slot: "pants" },
                    { name: "Enhanced Mercenary Shoes", image:"images/items/enhanced_mercynary_shoes.png", stats: { dex: 3 }, slot: "shoes" },
                    { name: "Enhanced Mercenary Gloves", image:"images/items/enhanced_mercynary_gloves.png", stats: { dex: 3 }, slot: "gloves" }
                ]
            },

            {
                name: "SWORDSMAN",
                open: false,
                items: [
                    { name: "Enhanced Drifter Coat", image: "images/items/Enhanced_Drifter_Coat.png", stats: { dex: 7 }, slot: "upper" },
                    { name: "Enhanced Drifter Pants", image:"images/items/Enhanced_Drifter_pants.png", stats: { dex: 7 }, slot: "pants" },
                    { name: "Enhanced Drifter Shoes", image: "images/items/Enhanced_Drifter_shoes.png", stats: { dex: 3 }, slot: "shoes" },
                    { name: "Enhanced Drifter Gloves", image:"images/items/Enhanced_Drifter_gloves.png", stats: { dex: 3 }, slot: "gloves" }
                ]
            }

        ]
    },

    {
        name: "ACCESSORIES",
        open: false,
        items: [
            { name: "Jade Ring lvl.120", image: "images/items/jade_ring.png", stats: { dex: 7 }, slot: "ring" },
            { name: "Jade Ring lvl.120", image: "images/items/jade_ring.png", stats: { dex: 7 }, slot: "ring" },
            { name: "Jade Ring lvl.80", image: "images/items/jade_ring.png", stats: { dex: 5 }, slot: "ring" },
            { name: "Jade Ring lvl.80", image: "images/items/jade_ring.png", stats: { dex: 5 }, slot: "ring" },
            { name: "Alloy Ring lvl.120", image: "images/items/alloy_ring.png", stats: { pow: 7 }, slot: "ring" },
            { name: "Alloy Ring lvl.120", image: "images/items/alloy_ring.png", stats: { pow: 7 }, slot: "ring" },
            { name: "Alloy Ring lvl.80", image: "images/items/alloy_ring.png", stats: { pow: 5 }, slot: "ring" },
            { name: "Alloy Ring lvl.80", image: "images/items/alloy_ring.png", stats: { pow: 5 }, slot: "ring" },
            { name: "Silver Ring lvl.120", image: "images/items/silver_ring.png", stats: { int: 7 }, slot: "ring" },
            { name: "Silver Ring lvl.120", image: "images/items/silver_ring.png", stats: { int: 7 }, slot: "ring" },
            { name: "Silver Ring lvl.80", image: "images/items/silver_ring.png", stats: { int: 5}, slot: "ring" },
            { name: "Silver Ring lvl.80", image: "images/items/silver_ring.png", stats: { int: 5}, slot: "ring" },
            { name: "Time Rosary Pow", image: "images/items/time_rosa_pow.png", stats: { pow: 3}, slot: "rosary" },
            { name: "Time Rosary Dex", image: "images/items/time_rosa_dex.png", stats: { dex: 3}, slot: "rosary" },
            { name: "Time Rosary Int", image: "images/items/time_rosa_int.png", stats: { int: 3}, slot: "rosary" },
            { name: "Trinity Amulet Earring (ran pinas)", image: "images/items/trinity_amulet.png", stats: { pow:2, dex:2, int: 2}, slot: "earring" },
            { name: "Black Knife Ganil", image: "images/items/Black_Knife_Ganil.png", stats: { pow:20, dex:20, int: 20}, slot: "ring" },
            { name: "Saint Ring", image: "images/items/Saint_Ring.png", stats: { pow:30, dex:30, int: 30}, slot: "ring" },
            { name: "Vanish Ring lvl.120", image: "images/items/vanish_ring.png", stats: { hp: 25 }, slot: "ring" },
            { name: "Vanish Ring lvl.120", image: "images/items/vanish_ring.png", stats: { hp: 25 }, slot: "ring" },
            { name: "Pandaya Bracelet 1D", image: "images/items/bracelet.png", stats: { pow: 5, dex: 5, int: 5 }, slot: "earring" },
            { name: "Wrapped Labubu Black Belt", image: "images/items/labubu.png", stats: { pow: 10, dex: 10, int: 10 }, slot: "belt" },
        ]
    },

    {
        name: "WEAPON",
        open: false,
        items: [
            { name: "Iron Gauntlet's Dex", image:"images/items/gaunt_dex_pow.png", stats: { dex: 5}, slot: "weapon" },
            { name: "Heavy Iron Gauntlet's Pow", image: "images/items/gaunt_dex_pow.png", stats: { pow: 5}, slot: "weapon" },
            { name: "Lite Iron Gauntlet's Int", image: "images/items/lite_iron_gauntlet's.png", stats: { int: 5}, slot: "weapon" },
            { name: "Catling Sword Dex", image: "images/items/sword_dex.png", stats: { dex: 5}, slot: "weapon" },
            { name: "Giant Blade Pow", image: "images/items/Blade_Pow.png", stats: { pow: 5}, slot: "weapon" },
            { name: "Lite Arcane Sword Int", image: "images/items/sword_int.png", stats: { int: 5}, slot: "weapon" },
            { name: "Fusion Wood Bow Dex", image: "images/items/Bow_Dex.png", stats: { dex: 5}, slot: "weapon" },
            { name: "Fusion Long Bow Pow", image:"images/items/Bow_Pow.png", stats: { pow: 5}, slot: "weapon" },
            { name: "Competition Bow Int", image: "images/items/Competition_Bow.png", stats: { int: 5}, slot: "weapon" },
            { name: "Hunter Alloy Bow", image: "images/items/hunter_alloy_bow.png", stats: { pow: 4}, slot: "weapon" },
            { name: "Sky Wand", image: "images/items/sky_wand.png", stats: { int: 5}, slot: "weapon" },
            { name: "Heavy Gold Spear", image: "images/items/heavy_gold_spear.png", stats: { pow: 5}, slot: "weapon" },
            { name: "Light Mechanical Sword", image: "images/items/light_mechanical_sword.png", stats: { pow: 5, int:5 }, slot: "weapon" }
        ]
    },

    {
        name: "WEAPON COSTUME",
        open: false,
        items: [
            { name: "Costume Swordsman Weapon", image: "", slot: "weaponCostume" },
            { name: "Costume Brawler Weapon", image: "", slot: "weaponCostume" },
            { name: "Costume Archer Weapon", image: "", slot: "weaponCostume" },
            { name: "Costume Shaman Weapon", image: "", slot: "weaponCostume" }
        ]
    },

    {
        name: "HEAD",
        open: false,
        items: [
            { name: "Lover's Heart (ran pinas)", image:"images/items/lover's_heart.png", stats: { pow: 7, dex: 7, int: 7 }, slot: "head" }
        ]
    },

    {
        name: "COSTUME",
        open: false,
        items: [

            { name: "Black Dragon Costume Head (ran pinas)", image: "images/items/bdc_head.png", stats: {  int:1 }, slot: "headCostume" },
            { name: "Black Dragon Costume Cloth (ran pinas)", image: "images/items/bdc_cloth.png", stats: {  int:2 }, slot: "upperCostume" },
            { name: "Black Dragon Costume Pants (ran pinas)", image: "images/items/bdc_pants.png", stats: {  pow:2 }, slot: "pantsCostume" },
            { name: "Black Dragon Costume Gloves (ran pinas)", image: "images/items/bdc_gloves.png", stats: {  pow:1 }, slot: "glovesCostume" },
            { name: "Black Dragon Costume Shoes (ran pinas)", image: "images/items/bdc_shoes.png", stats: {  dex:2 }, slot: "shoesCostume" },
            { name: "Advance_Necklace", image: "images/items/Advance_Necklace.png", stats: { pow: 3, dex: 3, int: 3 }, slot: "Rosary" },
        ]
    },

    {
        name: "VEHICLE",
        open: false,
        items: [
            { name: "Sable Board", image:"images/items/sable_board.png", stats: { pow: 1, dex: 1, int:1 }, slot: "vehicle" },
            { name: "Trone Bike", image:"images/items/Tron_Bike.png", stats: { pow: 3, dex: 3, int:3 }, slot: "vehicle" }
        ]
    }

];


/* =========================================
   INVENTORY SLOT MAPPING

   Maps each item's `slot` type to the ordered
   list of actual inventory box IDs (data-slot
   attribute in index.html) it's allowed to fill.
   When more items of one type are selected than
   there are boxes, the extra ones simply don't
   get a box (they still count in the Selected
   Items list and in the stat totals).
========================================= */

const INVENTORY_SLOT_GROUPS = {
    vehicle:        ["vehicle"],
    weapon:         ["weapon2", "weapon4"],
    weaponCostume:  ["weapon", "weapon3"],
    rosary:         ["rosary2"],
    rosaryCostume:  ["rosary1"],
    earring:        ["earring2"],
    earringCostume: ["earring1"],
    ring:           ["ring2", "ring4"],
    ringCostume:    ["ring1", "ring3"],
    head:           ["head2"],
    headCostume:    ["head1"],
    upper:          ["upper2"],
    upperCostume:   ["upper1"],
    pants:          ["pants2"],
    pantsCostume:   ["pants1"],
    gloves:         ["gloves2"],
    glovesCostume:  ["gloves1"],
    shoes:          ["shoes2"],
    shoesCostume:   ["shoes1"]
};


/* =========================================
   BUILD A SINGLE ITEM CARD
========================================= */

/* Turn a stats object like { pow: 7 } into "+7 POW",
   or { pow: 7, dex: 3 } into "+7 POW  +3 DEX" */

function formatStatBonus(stats) {

    return Object.keys(stats)
        .map(function(key) {

            const amount = stats[key];

            const sign = amount >= 0 ? "+" : "";

            return sign + amount + " " + key.toUpperCase();

        })
        .join("  ");

}


function createPandayaCard(item) {

    const card =
        document.createElement("div");

    card.className =
        "pandaya-card";


    /* Create image box */

    const imageBox =
        document.createElement("div");

    imageBox.className =
        "pandaya-image";


    /* Add image if available */

    if (item.image !== "") {

        const image =
            document.createElement("img");

        image.src =
            item.image;

        image.alt =
            item.name;

        imageBox.appendChild(image);
    }


    /* Create name */

    const name =
        document.createElement("div");

    name.className =
        "pandaya-name";

    name.textContent =
        item.name;


    /* Put everything inside card */

    card.appendChild(imageBox);

    card.appendChild(name);


    /* Stat bonus description (green), shown below the name
       for items that carry a "stats" bonus */

    if (item.stats && Object.keys(item.stats).length > 0) {

        const bonus =
            document.createElement("div");

        bonus.className =
            "pandaya-stat-bonus";

        bonus.textContent =
            formatStatBonus(item.stats);

        card.appendChild(bonus);

    }


    /* Multi-selection */

    card.addEventListener("click", function() {

        card.classList.toggle("selected");

        updatePandayaBonuses();

        renderSelectedItems();

        updateInventorySlots();

    });


    /* Register this card + its stats/name/image for total
       calculation and for the "Selected Items" panel */

    pandayaCardRegistry.push({
        card: card,
        stats: item.stats || {},
        name: item.name,
        image: item.image,
        slot: item.slot || null
    });


    return card;

}


/* =========================================
   SELECTED ITEMS PANEL

   Floats below the RAN Online calculator, in
   the left column. Lists picture + name + stat
   bonus for every currently-selected Pandaya
   item, and updates live on every pick.
========================================= */

function getSelectedListEl() {

    return document.getElementById("selectedList");

}


function renderSelectedItems() {

    const listEl = getSelectedListEl();

    if (!listEl) {

        return;

    }

    /* Clear current contents */

    listEl.innerHTML = "";

    const selectedEntries = pandayaCardRegistry.filter(function(entry) {

        return entry.card.classList.contains("selected");

    });


    if (selectedEntries.length === 0) {

        const empty =
            document.createElement("div");

        empty.className =
            "selected-empty";

        empty.textContent =
            "No items selected yet.";

        listEl.appendChild(empty);

        return;

    }


    selectedEntries.forEach(function(entry) {

        const row =
            document.createElement("div");

        row.className =
            "selected-item";


        const imageBox =
            document.createElement("div");

        imageBox.className =
            "selected-item-image";

        if (entry.image) {

            const image =
                document.createElement("img");

            image.src =
                entry.image;

            image.alt =
                entry.name;

            imageBox.appendChild(image);

        }


        const info =
            document.createElement("div");

        info.className =
            "selected-item-info";


        const name =
            document.createElement("div");

        name.className =
            "selected-item-name";

        name.textContent =
            entry.name;

        info.appendChild(name);


        if (entry.stats && Object.keys(entry.stats).length > 0) {

            const bonus =
                document.createElement("div");

            bonus.className =
                "selected-item-bonus";

            bonus.textContent =
                formatStatBonus(entry.stats);

            info.appendChild(bonus);

        }


        row.appendChild(imageBox);

        row.appendChild(info);

        listEl.appendChild(row);

    });

}


/* =========================================
   INVENTORY AUTO-FILL

   Every time a Pandaya item is picked/unpicked,
   this walks the currently-selected items,
   groups them by their `slot` type, and drops
   each one into the next free box of that type
   on the right-hand Inventory panel (ex: any
   Ring picked in Pandaya Items fills a "Ring"
   box; any Gloves item fills a "Gloves" box).
   Boxes with no matching selection go back to
   showing their plain label.
========================================= */

const inventorySlotElCache = {};

function getInventorySlotEl(slotId) {

    if (inventorySlotElCache[slotId]) {

        return inventorySlotElCache[slotId];

    }

    const el =
        document.querySelector('.inv-slot[data-slot="' + slotId + '"]');

    if (el) {

        inventorySlotElCache[slotId] = el;

    }

    return el;

}

function clearInventorySlot(el) {

    if (!el) {

        return;

    }

    el.classList.remove("inv-slot-filled");

    el.removeAttribute("title");

    const filled =
        el.querySelector(".inv-slot-filled-content");

    if (filled) {

        filled.remove();

    }

    const label =
        el.querySelector(".inv-slot-label");

    if (label) {

        label.style.display = "";

    }

}

function fillInventorySlot(el, entry) {

    if (!el) {

        return;

    }

    el.classList.add("inv-slot-filled");

    const tooltipBits =
        [entry.name];

    if (entry.stats && Object.keys(entry.stats).length > 0) {

        tooltipBits.push(formatStatBonus(entry.stats));

    }

    el.title =
        tooltipBits.join(" — ");

    const label =
        el.querySelector(".inv-slot-label");

    if (label) {

        label.style.display = "none";

    }

    const content =
        document.createElement("div");

    content.className =
        "inv-slot-filled-content";

    if (entry.image) {

        const image =
            document.createElement("img");

        image.className =
            "inv-slot-filled-image";

        image.src =
            entry.image;

        image.alt =
            entry.name;

        content.appendChild(image);

    }

    const nameEl =
        document.createElement("div");

    nameEl.className =
        "inv-slot-filled-name";

    nameEl.textContent =
        entry.name;

    content.appendChild(nameEl);

    el.appendChild(content);

}

function updateInventorySlots() {

    /* Reset every mapped box back to empty first */

    Object.keys(INVENTORY_SLOT_GROUPS).forEach(function(slotType) {

        INVENTORY_SLOT_GROUPS[slotType].forEach(function(slotId) {

            clearInventorySlot(getInventorySlotEl(slotId));

        });

    });

    /* Group currently-selected Pandaya items by their slot type,
       keeping the order they appear in the Pandaya list so the
       fill is predictable (first matching item takes the first
       open box of that type) */

    const bySlotType = {};

    pandayaCardRegistry.forEach(function(entry) {

        if (!entry.slot) {

            return;

        }

        if (!entry.card.classList.contains("selected")) {

            return;

        }

        if (!bySlotType[entry.slot]) {

            bySlotType[entry.slot] = [];

        }

        bySlotType[entry.slot].push(entry);

    });

    /* Drop each selected item into the next free box of its type */

    Object.keys(bySlotType).forEach(function(slotType) {

        const slotIds =
            INVENTORY_SLOT_GROUPS[slotType];

        if (!slotIds) {

            return;

        }

        bySlotType[slotType].forEach(function(entry, index) {

            const slotId =
                slotIds[index];

            if (!slotId) {

                return;

            }

            fillInventorySlot(getInventorySlotEl(slotId), entry);

        });

    });

}


/* =========================================
   STAT MODEL

   Each stat (pow/dex/int/vit) is made of
   two visible numbers, each backed by its own
   hidden "manual" layer:

   - GREEN (+xx)  = statManualAllocated[key]
                    + pandayaTotals[key]
                    (points the user has spent
                    from the Total Point pool,
                    PLUS the bonus from every
                    selected Pandaya item — both
                    show up in the green box)

   - LEFT (main / white / total)
                  = statManualBase[key]
                    + green value above
                    (green already folds in the
                    Pandaya bonus, so it is not
                    added a second time here)

   Typing directly into either visible input
   updates that input's own manual layer (so
   the number you typed stays put), while the
   other layer keeps flowing through live.
========================================= */

const STAT_KEYS = ["pow", "dex", "int", "vit"];

const pandayaCardRegistry = [];

const pandayaTotals = { pow: 0, dex: 0, int: 0, vit: 0, hp: 0 };

const statManualAllocated = { pow: 0, dex: 0, int: 0, vit: 0 };

const statManualBase = { pow: 0, dex: 0, int: 0, vit: 0 };


function getStatInputs(key) {

    return {
        base: document.getElementById("statBase-" + key),
        allocated: document.getElementById("statAllocated-" + key)
    };

}


/* Green (+xx) value = manual allocation + Pandaya gear bonus.
   Selected Pandaya items now show up in the green box, right
   alongside the points the player spent manually. */

function getGreenValue(key) {

    return (statManualAllocated[key] || 0) + (pandayaTotals[key] || 0);

}


/* Left (main stat / white / total) value =
   manual base + green (manual allocation + pandaya bonus).
   Pandaya is already folded into getGreenValue(), so it must
   NOT be added again here or it would be double-counted. */

function getBaseValue(key) {

    return (statManualBase[key] || 0) + getGreenValue(key);

}


/* Refresh the green input display, then cascade into the left input */

function recomputeGreen(key) {

    const inputs = getStatInputs(key);

    if (!inputs.allocated) {

        return;

    }

    inputs.allocated.value = getGreenValue(key);

    recomputeBase(key);

}


/* =========================================
   HP FROM VIT

   The +2 / +2 / +1 pattern repeats every 3
   VIT points (each full block of 3 VIT is
   worth +5 HP total):
     VIT 1 = 2 HP   (+2)
     VIT 2 = 4 HP   (+2)
     VIT 3 = 5 HP   (+1)
     VIT 4 = 7 HP   (+2, next block starts)
     VIT 5 = 9 HP   (+2)
     VIT 6 = 10 HP  (+1)
     ...and so on, repeating.
========================================= */

function computeHpFromVit(vit) {

    if (!vit || vit <= 0) {

        return 0;

    }

    const fullBlocks = Math.floor(vit / 3);

    const remainder = vit % 3;

    const remainderHp =
        remainder === 0 ? 0 :
        remainder === 1 ? 2 :
        4; /* remainder === 2 */

    return (fullBlocks * 5) + remainderHp;

}


/* If the user types their own HP value, treat it as a manual
   offset on top of the Vit formula — so the HP they typed
   still scales with future Vit changes instead of freezing.

   hasManualHpOverride tracks whether that offset is actually
   "live" right now. It matters because the offset is only ever
   correct relative to whatever Vit was at the moment it was set
   — if the player types HP before Vit (or edits Vit's base value
   directly afterward), the offset would otherwise get anchored
   against a stale/wrong Vit and then get added a SECOND time on
   top of the formula once Vit is entered, roughly doubling HP.
   This flag lets the Vit base input re-anchor the offset (see
   below) only when there's actually a manual override to protect
   — leaving pure-formula HP (no override) untouched. */

let hpManualOffset = 0;
let hasManualHpOverride = false;


function updateHP() {

    const hpInput =
        document.getElementById("statHP");

    if (!hpInput) {

        return;

    }

    hpInput.value =
        hpManualOffset +
        computeHpFromVit(getBaseValue("vit")) +
        (pandayaTotals.hp || 0);

}


/* Refresh the left (main stat) input display */

function recomputeBase(key) {

    const inputs = getStatInputs(key);

    if (!inputs.base) {

        return;

    }

    inputs.base.value = getBaseValue(key);


    /* brief highlight so the user notices the live update */

    inputs.base.classList.add("pandaya-updated");

    setTimeout(function() {

        inputs.base.classList.remove("pandaya-updated");

    }, 350);


    /* HP is derived from the total Vit number, so keep it
       in sync every time Vit changes */

    if (key === "vit") {

        updateHP();

    }

}


/* Recalculate Pandaya contribution per stat, then refresh green + main stats */

function updatePandayaBonuses() {

    const totals = { pow: 0, dex: 0, int: 0, vit: 0, hp: 0 };

    pandayaCardRegistry.forEach(function(entry) {

        if (!entry.card.classList.contains("selected")) {

            return;

        }

        for (const key in entry.stats) {

            if (Object.prototype.hasOwnProperty.call(totals, key)) {

                totals[key] += entry.stats[key];

            }

        }

    });

    STAT_KEYS.forEach(function(key) {

        pandayaTotals[key] = totals[key];

        recomputeGreen(key);

    });

    /* HP-boosting items (Vanish Ring lvl.120, etc.) don't have
       their own input, so fold their bonus straight into HP */

    pandayaTotals.hp = totals.hp;

    updateHP();

}


/* =========================================
   TOTAL POINT POOL

   The "Total Point" box is a free pool of
   unspent points. Every time the user
   allocates a point into a stat (green +xx,
   via typing or the ▲/▼ steppers) the pool
   goes down by that amount; taking a point
   back out of a stat gives it back to the
   pool.
========================================= */

function getPointInput() {

    return document.getElementById("pointValue");

}

function getPointValue() {

    const input = getPointInput();

    return input ? (parseInt(input.value, 10) || 0) : 0;

}

function setPointValue(value) {

    const input = getPointInput();

    if (input) {

        input.value = value;

    }

}

function adjustPoints(delta) {

    setPointValue(getPointValue() + delta);

}


/* =========================================
   RESET STAT

   Zeroes every manual stat entry (both the green allocation and
   anything typed straight into the main stat box) and the HP
   manual offset, and refunds every allocated point back into the
   Total Point pool. Pandaya item bonuses are untouched — those
   come from your gear, not your point spend.
========================================= */

function resetAllStats() {

    let refund = 0;

    STAT_KEYS.forEach(function(key) {

        refund += (statManualAllocated[key] || 0);

        statManualAllocated[key] = 0;

        statManualBase[key] = 0;

    });

    hpManualOffset = 0;

    hasManualHpOverride = false;

    adjustPoints(refund);

    STAT_KEYS.forEach(function(key) {

        recomputeGreen(key);

    });

}


/* ---- Clear the green (allocated) points after Save Build ----

   Used only by "Save Build". The just-saved build already has its
   POW/DEX/INT/VIT/HP numbers locked into the Build Preview record,
   so nothing here needs to preserve those totals on screen. The
   green "+X" box (manual points spent AND whatever Pandaya gear was
   contributing) clears back to 0 WITHOUT being folded into the base/
   manual number — the base stat stays exactly what the player typed
   in themselves, so the next build starts from that same plain
   default instead of quietly inheriting the last build's allocated
   points and gear bonuses. Selected Pandaya items are cleared right
   after this runs (which zeroes pandayaTotals and cascades the base
   input back down on its own), so this only needs to zero out the
   manual allocation side. The Stat Points pool is left untouched on
   purpose: those points were spent on this build, so they stay spent
   instead of refunding back to the pool. */

function clearAllocatedStatsAfterSave() {

    STAT_KEYS.forEach(function(key) {

        statManualAllocated[key] = 0;

        recomputeGreen(key);

    });

}


/* Wire up manual edits to both visible inputs, and set the
   initial 0 + 0 = 0 state */

STAT_KEYS.forEach(function(key) {

    const inputs = getStatInputs(key);

    if (inputs.allocated) {

        inputs.allocated.addEventListener("input", function() {

            const typed =
                parseInt(inputs.allocated.value, 10) || 0;

            /* The box shows manual points + Pandaya gear bonus
               combined, so back the gear bonus out of whatever
               was typed to get the MANUAL points being allocated
               — same meaning as clicking the ▲▼ steppers. */

            const pandayaPortion = pandayaTotals[key] || 0;

            const previousManual = statManualAllocated[key] || 0;

            let newManual = typed - pandayaPortion;

            /* Can't allocate negative manual points — the box can
               never read below the Pandaya bonus that's already
               folded into it */

            if (newManual < 0) {

                newManual = 0;

            }

            let delta = newManual - previousManual;

            /* Same rule as the ▲ stepper — typing in more than the
               pool has left just clamps to whatever's available,
               instead of letting Stat Point go negative */

            if (delta > 0) {

                const available = getPointValue();

                if (delta > available) {

                    newManual = previousManual + available;

                    delta = available;

                    inputs.allocated.value = newManual + pandayaPortion;

                }

            }

            statManualAllocated[key] = newManual;

            /* pull the difference out of (or back into) the Total Point pool */

            adjustPoints(-delta);

            recomputeBase(key);

        });

        /* Once editing is done, snap the green box back to the
           correct manual-only value so it always reads accurately,
           matching what the steppers show live. */

        inputs.allocated.addEventListener("blur", function() {

            recomputeGreen(key);

        });

    }

    if (inputs.base) {

        inputs.base.addEventListener("input", function() {

            const typed =
                parseInt(inputs.base.value, 10) || 0;

            /* keep the typed number as-is, remembering only the
               manual part behind the green (+xx) value (which
               already includes the Pandaya gear bonus, so it's
               only subtracted once here) */

            statManualBase[key] = typed - getGreenValue(key);

            /* Editing Vit's base directly changes what HP's
               formula portion should be. If a manual HP offset is
               already active, re-anchor it here so the number
               already showing in the HP box holds steady — instead
               of the old (possibly stale, e.g. Vit-was-0) offset
               getting added a second time on top of the freshly
               computed formula HP once Vit is no longer 0. Skipped
               when there's no override yet, so pure formula-driven
               HP (the common case) is untouched. */

            if (key === "vit" && hasManualHpOverride) {

                const hpInput =
                    document.getElementById("statHP");

                const currentDisplayedHp =
                    hpInput ? (parseInt(hpInput.value, 10) || 0) : 0;

                hpManualOffset =
                    currentDisplayedHp -
                    computeHpFromVit(getBaseValue("vit")) -
                    (pandayaTotals.hp || 0);

            }

            /* Refresh the box's own display, and — for Vit — keep
               HP live in sync too. This was previously missing
               here, so typing straight into the Vit base box left
               HP stale until some unrelated action (a stepper
               click, Save Build, etc.) forced a recompute. */

            recomputeBase(key);

        });

    }

    recomputeGreen(key);

});


/* =========================================
   HP MANUAL OVERRIDE
   Typing a value sets an offset on top of the
   current Vit-derived HP, so the number you
   typed keeps scaling as Vit changes instead
   of freezing in place. Clearing the field
   resets the offset back to pure Vit scaling.
========================================= */

const hpInputEl =
    document.getElementById("statHP");

if (hpInputEl) {

    hpInputEl.addEventListener("input", function() {

        if (hpInputEl.value === "") {

            hpManualOffset = 0;

            hasManualHpOverride = false;

            updateHP();

        } else {

            const typed =
                parseInt(hpInputEl.value, 10) || 0;

            hpManualOffset =
                typed - computeHpFromVit(getBaseValue("vit"));

            hasManualHpOverride = true;

        }

    });

}


/* =========================================
   STEPPER BUTTONS (▲ / ▼)
   Nudge the green (+xx) manual allocation by
   1 per click, then let it cascade into the
   left (main stat) number as usual.
========================================= */

document.querySelectorAll(".stepper-btn").forEach(function(btn) {

    btn.addEventListener("click", function() {

        const key = btn.dataset.stat;

        const isIncrease =
            btn.classList.contains("stepper-up");

        const delta = isIncrease ? 1 : -1;

        /* ▼ can't take back a point that was never manually allocated */

        if (!isIncrease && (statManualAllocated[key] || 0) <= 0) {

            return;

        }

        /* ▲ can't spend a point that isn't in the pool */

        if (isIncrease && getPointValue() <= 0) {

            return;

        }

        statManualAllocated[key] =
            (statManualAllocated[key] || 0) + delta;

        /* ▲ spends a point from the pool, ▼ refunds it */

        adjustPoints(-delta);

        recomputeGreen(key);

    });

});


/* =========================================
   COUNT ITEMS (SUPPORTS NESTED SUBCATEGORIES)
========================================= */

function countCategoryItems(category) {

    if (category.subcategories) {

        return category.subcategories.reduce(function(total, sub) {

            return total + countCategoryItems(sub);

        }, 0);

    }

    return category.items.length;

}


/* =========================================
   BUILD A CATEGORY (HEADER + COLLAPSIBLE BODY)
   Supports nested subcategories (one level deep,
   but written to nest further if ever needed).
========================================= */

function createPandayaCategory(category, level) {

    level = level || 0;

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "pandaya-category level-" + level;

    /* Remembered so the search box can restore each category to
       its original open/closed state once the query is cleared */

    wrapper.dataset.defaultOpen =
        category.open ? "1" : "0";


    /* ---- Header (clickable) ---- */

    const header =
        document.createElement("div");

    header.className =
        "pandaya-category-header";


    const arrow =
        document.createElement("span");

    arrow.className =
        "pandaya-category-arrow";

    arrow.textContent =
        category.open ? "▼" : "▶";


    const label =
        document.createElement("span");

    label.className =
        "pandaya-category-label";

    label.textContent =
        category.name;


    const count =
        document.createElement("span");

    count.className =
        "pandaya-category-count";

    count.textContent =
        "(" + countCategoryItems(category) + ")";


    header.appendChild(arrow);

    header.appendChild(label);

    header.appendChild(count);


    /* ---- Body: either nested subcategories or an items grid ---- */

    const body =
        document.createElement("div");

    body.className =
        "pandaya-category-body";

    if (!category.open) {

        body.classList.add("collapsed");

    }


    if (category.subcategories) {

        category.subcategories.forEach(function(sub) {

            body.appendChild(createPandayaCategory(sub, level + 1));

        });

    } else {

        const grid =
            document.createElement("div");

        grid.className =
            "pandaya-category-items";

        category.items.forEach(function(item) {

            grid.appendChild(createPandayaCard(item));

        });

        body.appendChild(grid);

    }


    /* ---- Toggle open/close ---- */

    header.addEventListener("click", function() {

        const isCollapsed =
            body.classList.toggle("collapsed");

        arrow.textContent =
            isCollapsed ? "▶" : "▼";

    });


    wrapper.appendChild(header);

    wrapper.appendChild(body);


    return wrapper;

}


/* =========================================
   RENDER ALL CATEGORIES
========================================= */

const pandayaList =
    document.getElementById("pandayaList");

if (!pandayaList) {
    console.error("Pandaya list container #pandayaList was not found.");
}

if (pandayaList) pandayaCategories.forEach(function(category) {

    pandayaList.appendChild(createPandayaCategory(category));

});


/* =========================================
   PANDAYA SEARCH
   Filters cards by name as you type. A
   category (at any nesting level) stays
   visible as long as something inside it —
   at any depth — still matches, and auto-
   expands so the match is actually visible.
   Clearing the box restores every category
   to whatever open/closed state it started
   in (see wrapper.dataset.defaultOpen above).
========================================= */

function applyPandayaSearch(rawQuery) {

    const query = rawQuery.trim().toLowerCase();

    const searchBoxEl =
        document.querySelector(".pandaya-search");

    if (searchBoxEl) {

        searchBoxEl.classList.toggle("has-query", query !== "");

    }

    /* Show/hide individual cards */

    document.querySelectorAll(".pandaya-card").forEach(function(card) {

        const nameEl =
            card.querySelector(".pandaya-name");

        const name =
            nameEl ? nameEl.textContent.toLowerCase() : "";

        const matches =
            query === "" || name.indexOf(query) !== -1;

        card.classList.toggle("search-hidden", !matches);

    });

    /* Walk categories deepest-first (reversing document order does
       this, since a parent always appears before its own
       descendants) so a parent's visibility can depend on whether
       any descendant just got hidden/shown above */

    const categories =
        Array.prototype.slice.call(
            document.querySelectorAll(".pandaya-category")
        ).reverse();

    categories.forEach(function(catEl) {

        const body =
            catEl.querySelector(":scope > .pandaya-category-body");

        if (!body) {

            return;

        }

        const arrow =
            catEl.querySelector(":scope > .pandaya-category-header .pandaya-category-arrow");

        if (query === "") {

            /* Restore this category's original state */

            const defaultOpen =
                catEl.dataset.defaultOpen === "1";

            catEl.classList.remove("search-empty");

            body.classList.toggle("collapsed", !defaultOpen);

            if (arrow) {

                arrow.textContent = defaultOpen ? "▼" : "▶";

            }

            return;

        }

        const hasMatch =
            body.querySelectorAll(".pandaya-card:not(.search-hidden)").length > 0;

        catEl.classList.toggle("search-empty", !hasMatch);

        if (hasMatch) {

            body.classList.remove("collapsed");

            if (arrow) {

                arrow.textContent = "▼";

            }

        }

    });

    /* "No items match" message */

    const emptyEl =
        document.getElementById("pandayaSearchEmpty");

    if (emptyEl) {

        const anyVisible =
            query === "" ||
            document.querySelectorAll(".pandaya-card:not(.search-hidden)").length > 0;

        emptyEl.classList.toggle("visible", !anyVisible);

    }

}

const pandayaSearchInputEl =
    document.getElementById("pandayaSearchInput");

const pandayaSearchClearEl =
    document.getElementById("pandayaSearchClear");

if (pandayaSearchInputEl) {

    pandayaSearchInputEl.addEventListener("input", function() {

        applyPandayaSearch(pandayaSearchInputEl.value);

    });

}

if (pandayaSearchClearEl) {

    pandayaSearchClearEl.addEventListener("click", function() {

        if (pandayaSearchInputEl) {

            pandayaSearchInputEl.value = "";

            pandayaSearchInputEl.focus();

        }

        applyPandayaSearch("");

    });

}


/* Initial empty state for the Selected Items panel */

renderSelectedItems();

/* Initial empty state for the Inventory panel */

updateInventorySlots();


/* =========================================
   SKILLS PANEL

   Right-side "Skills" window: a Skills button
   + Dex/Str/Int/Etc quick buttons open it,
   its own internal tabs switch class, and each
   skill row can have Level / Point Needed / a
   Master badge. Non-master skills get a small
   ▲▼ stepper that invests points from the
   Skill Points pool below.
========================================= */

const skillCategories = {

    brawler: [ { name: "Heavy Punch", rank: 1,pointNeeded: 1, type: "dex", icon: "images/skills/brawler/hp.png",requires: { dex: 26 }, levelRequired: 7,
            requiresByLevel: {
                2: { dex: 31 },
                3: { pow: 11, dex: 14 },
                4: { dex: 41 },
                5: { dex: 46 },
                6: { dex: 51 },
                7: { dex: 56 },
                8: { dex: 61 },
                9: { dex: 66 } },    
            },
            { name: "Weapon Mastery", rank: 1,pointNeeded: 1, type: "dex", icon: "images/skills/brawler/wm.png",requires: { dex: 26 }, levelRequired: 7,
            requiresByLevel: {
                2: { dex: 31 },
                3: { dex: 36 },
                4: { dex: 41 },
                5: { dex: 46 },
                6: { dex: 51 },
                7: { dex: 56 },
                8: { dex: 61 },
                9: { dex: 66 } },
            },
            { name: "Tokkan Punch", rank: 3,pointNeeded: 3, type: "dex", icon: "images/skills/brawler/tp.png",requires: { dex: 74 }, levelRequired: 27,
            requiresSkill: { name: "Heavy Punch", level: 4 },
            requiresByLevel: {
                2: { dex: 79 },
                3: { dex: 84 },
                4: { dex: 89 },
                5: { dex: 94 },
                6: { dex: 99 },
                7: { dex: 104 },
                8: { dex: 109 },
                9: { dex: 114 } },
            },
            { name: "Mirrage Punch", rank: 5,pointNeeded: 5, type: "dex", icon: "images/skills/brawler/mp.png",requires: { dex: 122 }, levelRequired: 47,
            requiresSkill: { name: "Tokkan Punch", level: 4 },
            requiresByLevel: {
                2: { dex: 127 },
                3: { dex: 132 },
                4: { dex: 137 },
                5: { dex: 142 },
                6: { dex: 147 },
                7: { dex: 152 },
                8: { dex: 157 },
                9: { dex: 162 } },
            },
            { name: "Kick Punch Combo", rank: 7,pointNeeded: 7, type: "dex", icon: "images/skills/brawler/kpc.png",requires: { dex: 170 }, levelRequired: 67,
            requiresSkill: { name: "Heavy Punch", level: 4 },
            requiresByLevel: {
                2: { dex: 175 },
                3: { dex: 180 },
                4: { dex: 185 },
                5: { dex: 190 },
                6: { dex: 195 },
                7: { dex: 200 },
                8: { dex: 205 },
                9: { dex: 210 } },
            },
            { name: "Evasive Dance", rank: 7,pointNeeded: 7, type: "dex", icon: "images/skills/brawler/ed.png",requires: { dex: 170 }, levelRequired: 67,
            requiresSkill: { name: "Mirrage Punch", level: 4 },
            requiresByLevel: {
                2: { dex: 180 },
                3: { dex: 190 },
                4: { dex: 200 },
                5: { dex: 210 },
                6: { dex: 215 },
                7: { dex: 220 },
                8: { dex: 225 },
                9: { dex: 230 } },
            },
            { name: "Critical Punch", rank: 8,pointNeeded: 8, type: "dex", icon: "images/skills/brawler/cp.png",requires: { dex: 194 }, levelRequired: 77,
            requiresSkill: { name: "Mirrage Punch", level: 2 },
            requiresByLevel: {
                2: { dex: 199 },
                3: { dex: 204 },
                4: { dex: 209 },
                5: { dex: 214 },
                6: { dex: 219 },
                7: { dex: 224 },
                8: { dex: 229 },
                9: { dex: 234 } },
            },
            { name: "Shintendouchi", rank: 10,pointNeeded: 10, type: "dex", icon: "images/skills/brawler/shi.png",requires: { dex: 242 }, levelRequired: 97,
            requiresSkill: { name: "Critical Punch", level: 2 },
            requiresByLevel: {
                2: { dex: 248 },
                3: { dex: 252 },
                4: { dex: 256 },
                5: { dex: 261 },
                6: { dex: 266 },
                7: { dex: 271 },
                8: { dex: 276 },
                9: { dex: 280 } },
            },
            { name: "Deadly Seven", rank: 11,pointNeeded: 11, type: "dex", icon: "images/skills/brawler/d7.png",requires: { dex: 266 }, levelRequired: 107,
            requiresSkill: { name: "Shintendouchi", level: 3 },
            requiresByLevel: {
                2: { dex: 248 },
                3: { dex: 252 },
                4: { dex: 256 },
                5: { dex: 261 },
                6: { dex: 266 },
                7: { dex: 271 },
                8: { dex: 276 },
                9: { dex: 280 } },
            },
            { name: "Force Punch", rank: 12,pointNeeded: 12, type: "dex", icon: "images/skills/brawler/fp.png",requires: { dex: 290 }, levelRequired: 117,
            requiresSkill: { name: "Shintendouchi", level: 2 },
            requiresByLevel: {
                2: { dex: 248 },
                3: { dex: 252 },
                4: { dex: 256 },
                5: { dex: 261 },
                6: { dex: 266 },
                7: { dex: 271 },
                8: { dex: 276 },
                9: { dex: 280 } },
            },
            { name: "Dance of the Warrior", rank: 13,pointNeeded: 13, type: "dex", icon: "images/skills/brawler/dow.png",requires: { dex: 315 }, levelRequired: 127,
            requiresSkill: { name: "Shintendouchi", level: 2 },
            requiresByLevel: {
                2: { dex: 320 },
                3: { dex: 325 },
                4: { dex: 330 },
                5: { dex: 335 },
                6: { dex: 340 },
                7: { dex: 345 },
                8: { dex: 350 },
                9: { dex: 355 } },
            },
            { name: "Taichi", rank: 14,pointNeeded: 14, type: "dex", icon: "images/skills/brawler/taichi.png",requires: { dex: 365 }, levelRequired: 147,
            requiresSkill: { name: "Critical Punch", level: 2 },
            requiresByLevel: {
                2: { dex: 370 },
                3: { dex: 375 },
                4: { dex: 380 },
                5: { dex: 385 },
                6: { dex: 340 },
                7: { dex: 345 },
                8: { dex: 350 },
                9: { dex: 355 } },
            levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163, },    
            },
            { name: "Tai Shi Wave", rank: 15,pointNeeded: 15, type: "dex", icon: "images/skills/brawler/tsw.png",requires: { dex: 389 }, levelRequired: 157,
            requiresSkill: { name: "Dance of the Warrior", level: 3 },
            requiresByLevel: {
                2: { dex: 394 },
                3: { dex: 399 },
                4: { dex: 404 },
                5: { dex: 409 },
                6: { dex: 414 },
                7: { dex: 419 },
                8: { dex: 424 },
                9: { dex: 429 } },
            levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173, },    
            },
            { name: "Furious Eagle Claw", rank: 16,pointNeeded: 16, type: "dex", icon: "images/skills/brawler/fc.png",requires: { dex: 414 }, levelRequired: 167,
            requiresSkill: { name: "Dance of the Warrior", level: 3 },
            requiresByLevel: {
                2: { dex: 419 },
                3: { dex: 424 },
                4: { dex: 429 },
                5: { dex: 434 },
                6: { dex: 439 },
                7: { dex: 444 },
                8: { dex: 449 },
                9: { dex: 454 } },
            levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183, },    
            },
            { name: "Towering Strike", rank: 17,pointNeeded: 17, type: "dex", icon: "images/skills/brawler/ts.png",requires: { dex: 434 }, levelRequired: 177,
            requiresSkill: { name: "Furious Eagle Claw", level: 3 },
            requiresByLevel: {
                2: { dex: 436 },
                3: { dex: 438},
                4: { dex: 440 },
                5: { dex: 442},
                6: { dex: 444 },
                7: { dex: 446 },
                8: { dex: 448 },
                9: { dex: 450 } },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193, },    
            },
            { name: "Secret Move: C.Q Smash", rank: 18,pointNeeded: 18, type: "dex", icon: "images/skills/brawler/sms.png",requires: { dex: 458 }, levelRequired: 187,
            requiresSkill: { name: "Towering Strike", level: 3 },
            requiresByLevel: {
                2: { dex: 460 },
                3: { dex: 462},
                4: { dex: 464 },
                5: { dex: 466},
                6: { dex: 468 },
                7: { dex: 470 },
                8: { dex: 472 },
                9: { dex: 474 } },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203, },    
            },
            { name: "Shake Boxer", rank: 21,pointNeeded: 21, type: "dex", icon: "images/skills/brawler/sb.png",requires: { dex: 483 }, levelRequired: 197,
            requiresSkill: { name: "Force Punch", level: 4 },
            requiresByLevel: {
                2: { dex: 487 },
                3: { dex: 492 },
                4: { dex: 496 },
                5: { dex: 501 },
                6: { dex: 506 },
                7: { dex: 511 },
                8: { dex: 516 },
                9: { dex: 520 } },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213, },    
            },
            { name: "Dragon's Wrath", rank: 22,pointNeeded: 22, type: "dex", icon: "images/skills/brawler/dw.png",requires: { dex: 530 }, levelRequired: 207,
            requiresSkill: { name: "Shake Boxer", level: 2 },
            requiresByLevel: {
                2: { dex: 534 },
                3: { dex: 538 },
                4: { dex: 542 },
                5: { dex: 546 },
                6: { dex: 550 },
                7: { dex: 554 },
                8: { dex: 558 },
                9: { dex: 562 } },
            levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223, },    
            },
            { name: "Side Kick", rank: 1,pointNeeded: 1, type: "pow", icon: "images/skills/brawler/sk.png",requires: { pow: 25 }, levelRequired: 7,
            requiresByLevel: {
                2: { pow: 30 },
                3: { pow: 35 },
                4: { pow: 40 },
                5: { pow: 45 },
                6: { pow: 50 },
                7: { pow: 55 },
                8: { pow: 60 },
                9: { pow: 65 } },
                
            },
            { name: "Spinning Kick", rank: 3,pointNeeded: 3, type: "pow", icon: "images/skills/brawler/spin.png",requires: { pow: 70 }, levelRequired: 27,
            requiresSkill: { name: "Side Kick", level: 4 },
            requiresByLevel: {
                2: { pow: 75 },
                3: { pow: 80 },
                4: { pow: 85 },
                5: { pow: 90 },
                6: { pow: 95 },
                7: { pow: 100 },
                8: { pow: 105 },
                9: { pow: 110 } },
                
            },
            { name: "Chain Kick", rank: 5,pointNeeded: 5, type: "pow", icon: "images/skills/brawler/ck.png",requires: { pow: 115 }, levelRequired: 47,
            requiresSkill: { name: "Spinning Kick", level: 2 },
            requiresByLevel: {
                2: { pow: 120 },
                3: { pow: 125 },
                4: { pow: 130 },
                5: { pow: 135 },
                6: { pow: 140 },
                7: { pow: 145 },
                8: { pow: 150 },
                9: { pow: 155 } },
                
            },
            { name: "Concentration", rank: 5,pointNeeded: 5, type: "pow", icon: "images/skills/brawler/conce.png",requires: { pow: 140 }, levelRequired: 47,
            requiresSkill: { name: "Spinning Kick", level: 2 },
            requiresByLevel: {
                2: { pow: 152 },
                3: { pow: 163 },
                4: { pow: 186 },
                5: { pow: 209 },
                6: { pow: 232 },
                7: { pow: 255 },
                8: { pow: 278 },
                9: { pow: 301 } },
                
            },
            { name: "Sonic Slash", rank: 7,pointNeeded: 7, type: "pow", icon: "images/skills/brawler/ss.png",requires: { pow: 160 }, levelRequired: 67,
            requiresSkill: { name: "Chain Kick", level: 2 },
            requiresByLevel: {
                2: { pow: 165 },
                3: { pow: 170 },
                4: { pow: 175 },
                5: { pow: 180 },
                6: { pow: 185 },
                7: { pow: 190 },
                8: { pow: 195 },
                9: { pow: 200 } },
                
            },
            { name: "Power Kick", rank: 8,pointNeeded: 8, type: "pow", icon: "images/skills/brawler/pw.png",requires: { pow: 185 }, levelRequired: 77,
            requiresByLevel: {
                2: { pow: 190 },
                3: { pow: 195 },
                4: { pow: 200 },
                5: { pow: 205 },
                6: { pow: 210 },
                7: { pow: 215 },
                8: { pow: 220 },
                9: { pow: 215 } },
                levelRequiredByLevel: {
                2: 79,
                3: 81,
                4: 83,
                5: 85,
                6: 87,
                7: 89,
                8: 91,
                9: 93, },
                
            },
            { name: "Agility Boost", rank: 9,pointNeeded: 9, type: "pow", icon: "images/skills/brawler/ab.png",requires: { pow: 210 }, levelRequired: 87,
            requiresSkill: { name: "Sonic Slash", level: 2 },
            requiresByLevel: {
                2: { pow: 215 },
                3: { pow: 220 },
                4: { pow: 215 },
                5: { pow: 220 },
                6: { pow: 225 },
                7: { pow: 230 },
                8: { pow: 235 },
                9: { pow: 240 } },
            },
            { name: "Elevated Kick", rank: 9,pointNeeded: 9, type: "pow", icon: "images/skills/brawler/ek.png",requires: { pow: 205 }, levelRequired: 87,
            requiresSkill: { name: "Spinning kick", level: 3 },
            requiresByLevel: {
                2: { pow: 210 },
                3: { pow: 215 },
                4: { pow: 220 },
                5: { pow: 225 },
                6: { pow: 230 },
                7: { pow: 235 },
                8: { pow: 240 },
                9: { pow: 245 } },
            },
            { name: "Tornado Kick", rank: 10,pointNeeded: 10, type: "pow", icon: "images/skills/brawler/tk.png",requires: { pow: 230 }, levelRequired: 97,
            requiresSkill: { name: "Spinning Kick", level: 4 },
            requiresByLevel: {
                2: { pow: 235 },
                3: { pow: 240 },
                4: { pow: 245 },
                5: { pow: 250 },
                6: { pow: 255 },
                7: { pow: 260 },
                8: { pow: 265 },
                9: { pow: 270 } },
            },
            { name: "Makaze Kick", rank: 11,pointNeeded: 11, type: "pow", icon: "images/skills/brawler/mkz.png",requires: { pow: 255 }, levelRequired: 107,
            requiresSkill: { name: "Sonic Slash", level: 2 },
            requiresByLevel: {
                2: { pow: 260 },
                3: { pow: 265 },
                4: { pow: 270 },
                5: { pow: 275 },
                6: { pow: 280 },
                7: { pow: 285 },
                8: { pow: 290 },
                9: { pow: 295 } },
            },
             { name: "Ankle Crush", rank: 12,pointNeeded: 12, type: "pow", icon: "images/skills/brawler/ankol.png",requires: { pow: 275 }, levelRequired: 117,
            requiresSkill: { name: "Makaze Kick", level: 2 },
            requiresByLevel: {
                2: { pow: 280 },
                3: { pow: 285 },
                4: { pow: 290 },
                5: { pow: 295 },
                6: { pow: 300 },
                7: { pow: 305 },
                8: { pow: 310 },
                9: { pow: 315 } },
            },
            { name: "Upper Jab", rank: 13,pointNeeded: 13, type: "pow", icon: "images/skills/brawler/uj.png",requires: { pow: 300 }, levelRequired: 127,
            requiresSkill: { name: "Makaze Kick", level: 2 },
            requiresByLevel: {
                2: { pow: 305 },
                3: { pow: 310 },
                4: { pow: 315 },
                5: { pow: 320 },
                6: { pow: 325 },
                7: { pow: 330 },
                8: { pow: 335 },
                9: { pow: 340 } },
            },
            { name: "Rays Cyclone", rank: 14,pointNeeded: 14, type: "pow", icon: "images/skills/brawler/rc.png",requires: { pow: 345 }, levelRequired: 147,
            requiresSkill: { name: "Makaze Kick", level: 2 },
            requiresByLevel: {
                2: { pow: 350 },
                3: { pow: 355 },
                4: { pow: 360 },
                5: { pow: 365 },
                6: { pow: 370 },
                7: { pow: 375 },
                8: { pow: 380 },
                9: { pow: 385 } },
                levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163, },
            },
            { name: "Dragon's Arc", rank: 15,pointNeeded: 15, type: "pow", icon: "images/skills/brawler/da.png",requires: { pow: 370 }, levelRequired: 157,
            requiresSkill: { name: "Rays Cyclone", level: 3 },
            requiresByLevel: {
                2: { pow: 350 },
                3: { pow: 355 },
                4: { pow: 360 },
                5: { pow: 365 },
                6: { pow: 370 },
                7: { pow: 375 },
                8: { pow: 380 },
                9: { pow: 385 } },
                levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173, },
            },
            { name: "Whirlwind Dragon kick", rank: 16,pointNeeded: 16, type: "pow", icon: "images/skills/brawler/wd.png",requires: { pow: 395 }, levelRequired: 167,
            requiresSkill: { name: "Anke Crush", level: 3 },
            requiresByLevel: {
                2: { pow: 400 },
                3: { pow: 405 },
                4: { pow: 410 },
                5: { pow: 415 },
                6: { pow: 420 },
                7: { pow: 425 },
                8: { pow: 430 },
                9: { pow: 435 } },
                levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183, },
            },
            { name: "Bloody Dragon Smash", rank: 17,pointNeeded: 17, type: "pow", icon: "images/skills/brawler/bds.png",requires: { pow: 417 }, levelRequired: 177,
            requiresSkill: { name: "Whirlwind Dragon kick", level: 3 },
            requiresByLevel: {
                2: { pow: 422 },
                3: { pow: 427 },
                4: { pow: 432 },
                5: { pow: 437 },
                6: { pow: 442 },
                7: { pow: 447 },
                8: { pow: 452 },
                9: { pow: 457 } },
                levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193, },
            },
            { name: "Triple Shadow Kick", rank: 18,pointNeeded: 18, type: "pow", icon: "images/skills/brawler/tsk.png",requires: { pow: 440 }, levelRequired: 187,
            requiresSkill: { name: "Bloody Dragon Smash", level: 3 },
            requiresByLevel: {
                2: { pow: 445 },
                3: { pow: 450 },
                4: { pow: 455 },
                5: { pow: 460 },
                6: { pow: 465 },
                7: { pow: 470 },
                8: { pow: 475 },
                9: { pow: 480 } },
                levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203, },
            },
            { name: "Dragon Slayer Kick", rank: 21,pointNeeded: 21, type: "pow", icon: "images/skills/brawler/dsk.png",requires: { pow: 462 }, levelRequired: 197,
            requiresSkill: { name: "Dragon's Arc", level: 4 },
            requiresByLevel: {
                2: { pow: 467 },
                3: { pow: 472 },
                4: { pow: 476 },
                5: { pow: 481 },
                6: { pow: 485 },
                7: { pow: 490 },
                8: { pow: 495 },
                9: { pow: 499 } },
                levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213, },
            },
            { name: "Gyro Crush", rank: 22,pointNeeded: 22, type: "pow", icon: "images/skills/brawler/gyro.png",requires: { pow: 500 }, levelRequired: 207,
            requiresSkill: { name: "Dragon Slayer Kick", level: 2 },
            requiresByLevel: {
                2: { pow: 504 },
                3: { pow: 508 },
                4: { pow: 512 },
                5: { pow: 516},
                6: { pow: 520 },
                7: { pow: 524 },
                8: { pow: 528 },
                9: { pow: 532 } },
                levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223, },
            },
            { name: "Head Crush", rank: 1,pointNeeded: 1, type: "int", icon: "images/skills/brawler/hc.png",requires: { int: 26 }, levelRequired: 7,
            requiresByLevel: {
                2: { int: 31 },
                3: { int: 36 },
                4: { int: 42 },
                5: { int: 46 },
                6: { int: 51 },
                7: { int: 56 },
                8: { int: 61 },
                9: { int: 66 } },
                
            },
            { name: "Meditation", tag:"Passive",rank: 2,pointNeeded: 2, type: "int", icon: "images/skills/brawler/med.png",requires: { int: 52 }, levelRequired: 17,
            requiresSkill: { name: "Head Crush", level: 2 },
            requiresByLevel: {
                2: { int: 57 },
                3: { int: 62 },
                4: { int: 67 },
                5: { int: 72 },
                6: { int: 77 },
                7: { int: 82 },
                8: { int: 87 },
                9: { int: 92 } },
                
            },
            { name: "Elbow Crush", rank: 3,pointNeeded: 3, type: "int", icon: "images/skills/brawler/ec.png",requires: { int: 74 }, levelRequired: 27,
            requiresSkill: { name: "Head Crush", level: 4 },
            requiresByLevel: {
                2: { int: 79 },
                3: { int: 89 },
                4: { int: 94 },
                5: { int: 99 },
                6: { int: 104 },
                7: { int: 109 },
                8: { int: 114 },
                9: { int: 119 } },
                
            },
            { name: "Double Attack", rank: 5,pointNeeded: 5, type: "int", icon: "images/skills/brawler/dat.png",requires: { int: 131 }, levelRequired: 47,
            requiresSkill: { name: "Elbow Crush", level: 2 },
            requiresByLevel: {
                2: { int: 136 },
                3: { int: 141 },
                4: { int: 146 },
                5: { int: 151 },
                6: { int: 156 },
                7: { int: 161 },
                8: { int: 166 },
                9: { int: 171 } },  
            },
            { name: "Power Up",tag:"Passive" ,rank: 5,pointNeeded: 5, type: "int", icon: "images/skills/brawler/pu.png",requires: { int: 131 }, levelRequired: 47,
            requiresSkill: { name: "Elbow Crush", level: 2 },
            requiresSkillByLevel: { 2:4 },
            requiresByLevel: {
                2: { int: 136 },
                3: { int: 141 },
                4: { int: 146 },
                5: { int: 151 },
                6: { int: 156 },
                7: { int: 161 },
                8: { int: 166 },
                9: { int: 171 } },  
            },
            { name: "Blood Lust", rank: 6,pointNeeded: 6, type: "int", icon: "images/skills/brawler/bl.png",requires: { int: 157 }, levelRequired: 57,
            requiresByLevel: {
                2: { int: 162 },
                3: { int: 167 },
                4: { int: 172 },
                5: { int: 177 },
                6: { int: 182 },
                7: { int: 187 },
                8: { int: 192 },
                9: { int: 197 } },  
            },
            { name: "Earthquake", rank: 6,pointNeeded: 6, type: "int", icon: "images/skills/brawler/es.png",requires: { int: 157 }, levelRequired: 57,
            requiresSkill: { name: "Meditation", level: 3 },
            requiresByLevel: {
                2: { int: 162 },
                3: { int: 167 },
                4: { int: 172 },
                5: { int: 177 },
                6: { int: 182 },
                7: { int: 187 },
                8: { int: 192 },
                9: { int: 197 } },  
            },
            { name: "Power Tackle", rank: 7,pointNeeded: 7, type: "int", icon: "images/skills/brawler/pt.png",requires: { int: 183 }, levelRequired: 67,
            requiresSkill: { name: "Elbow Crush", level: 4 },
            requiresByLevel: {
                2: { int: 188 },
                3: { int: 193 },
                4: { int: 198 },
                5: { int: 203 },
                6: { int: 208 },
                7: { int: 213 },
                8: { int: 218 },
                9: { int: 223 } },  
            },
            { name: "Chi Finger Blast", rank: 9,pointNeeded: 9, type: "int", icon: "images/skills/brawler/chi.png",requires: { int: 235 }, levelRequired: 87,
            requiresSkill: { name: "Meditation", level: 3 },
            requiresByLevel: {
                2: { int: 240 },
                3: { int: 245 },
                4: { int: 250 },
                5: { int: 255 },
                6: { int: 260 },
                7: { int: 265 },
                8: { int: 270 },
                9: { int: 275 } },  
            },
            { name: "Engulf", rank: 10,pointNeeded: 10, type: "int", icon: "images/skills/brawler/engulf.png",requires: { int: 261 }, levelRequired: 97,
            requiresSkill: { name: "Power Tackle", level: 3 },
            requiresByLevel: {
                2: { int: 266 },
                3: { int: 271 },
                4: { int: 276 },
                5: { int: 281 },
                6: { int: 286 },
                7: { int: 291 },
                8: { int: 296 },
                9: { int: 301 } },  
            },
            { name: "Dynamite Punch", rank: 11,pointNeeded: 11, type: "int", icon: "images/skills/brawler/dp.png",requires: { int: 287 }, levelRequired: 107,
            requiresSkill: { name: "Chi Finger Blast", level: 2 },
            requiresByLevel: {
                2: { int: 292 },
                3: { int: 297 },
                4: { int: 302 },
                5: { int: 307 },
                6: { int: 312 },
                7: { int: 317 },
                8: { int: 322 },
                9: { int: 327 } },  
            },
            { name: "Force Roar", rank: 12,pointNeeded: 12, type: "int", icon: "images/skills/brawler/fr.png",requires: { int: 313 }, levelRequired: 117,
            requiresSkill: { name: "Dynamite Punch", level: 2 },
            requiresByLevel: {
                2: { int: 292 },
                3: { int: 297 },
                4: { int: 302 },
                5: { int: 307 },
                6: { int: 312 },
                7: { int: 317 },
                8: { int: 322 },
                9: { int: 327 } },  
            },
            { name: "Force Push", rank: 13,pointNeeded: 13, type: "int", icon: "images/skills/brawler/fpa.png",requires: { int: 339 }, levelRequired: 127,
            requiresSkill: { name: "Force Roar", level: 2 },
            requiresByLevel: {
                2: { int: 344 },
                3: { int: 349 },
                4: { int: 354 },
                5: { int: 359 },
                6: { int: 364 },
                7: { int: 369 },
                8: { int: 374 },
                9: { int: 379 } },  
            },
            { name: "Dragon RIsing", rank: 14,pointNeeded: 14, type: "int", icon: "images/skills/brawler/dr.png",requires: { int: 390 }, levelRequired: 147,
            requiresSkill: { name: "Force Roar", level: 2 },
            requiresByLevel: {
                2: { int: 395 },
                3: { int: 400 },
                4: { int: 405 },
                5: { int: 410 },
                6: { int: 415 },
                7: { int: 420 },
                8: { int: 425 },
                9: { int: 430 } }, 
                levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163, }, 
            },
            { name: "Soul Destroyer", rank: 15,pointNeeded: 15, type: "int", icon: "images/skills/brawler/sd.png",requires: { int: 416 }, levelRequired: 157,
            requiresSkill: { name: "Force Push", level: 3 },
            requiresByLevel: {
                2: { int: 421 },
                3: { int: 426 },
                4: { int: 431 },
                5: { int: 436 },
                6: { int: 441 },
                7: { int: 446 },
                8: { int: 451 },
                9: { int: 456 } }, 
                levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173, }, 
            },
            { name: "Demon Palm", rank: 16,pointNeeded: 16, type: "int", icon: "images/skills/brawler/palm.png",requires: { int: 441 }, levelRequired: 167,
            requiresSkill: { name: "Dynamite Punch", level: 3 },
            requiresByLevel: {
                2: { int: 446 },
                3: { int: 451 },
                4: { int: 456 },
                5: { int: 461 },
                6: { int: 466 },
                7: { int: 471 },
                8: { int: 476 },
                9: { int: 481 } }, 
                levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183, }, 
            },
            { name: "Convultion", rank: 17,pointNeeded: 17, type: "int", icon: "images/skills/brawler/c.png",requires: { int: 470 }, levelRequired: 177,
            requiresSkill: { name: "Demon Palm", level: 2 },
            requiresByLevel: {
                2: { int: 475 },
                3: { int: 480 },
                4: { int: 485 },
                5: { int: 490 },
                6: { int: 495 },
                7: { int: 500 },
                8: { int: 505 },
                9: { int: 510 } }, 
                levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183, }, 
            },
            { name: "Cyclone Blast", rank: 18,pointNeeded: 18, type: "int", icon: "images/skills/brawler/cb.png",requires: { int: 491 }, levelRequired: 187,
            requiresSkill: { name: "Convultion Blast", level: 3 },
            requiresByLevel: {
                2: { int: 496 },
                3: { int: 501 },
                4: { int: 506 },
                5: { int: 511 },
                6: { int: 516 },
                7: { int: 521 },
                8: { int: 526 },
                9: { int: 531 } }, 
                levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203, }, 
            },
            { name: "Triple Blow", rank: 21,pointNeeded: 21, type: "int", icon: "images/skills/brawler/tb.png",requires: { int: 522 }, levelRequired: 197,
            requiresSkill: { name: "Soul Destroyer", level: 4 },
            requiresByLevel: {
                2: { int: 522 },
                3: { int: 527 },
                4: { int: 532 },
                5: { int: 537 },
                6: { int: 542 },
                7: { int: 547 },
                8: { int: 552 },
                9: { int: 557 } }, 
                levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213, }, 
            },
            { name: "Genocide Breaker", rank: 22,pointNeeded: 22, type: "int", icon: "images/skills/brawler/geno.png",requires: { int: 568 }, levelRequired: 207,
            requiresSkill: { name: "Soul Destroyer", level: 4 },
            requiresByLevel: {
                2: { int: 573 },
                3: { int: 578 },
                4: { int: 583 },
                5: { int: 588 },
                6: { int: 593 },
                7: { int: 598 },
                8: { int: 603 },
                9: { int: 608 } }, 
                levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223, }, 
            },
        { name: "Fist Mastery",tag:"Passive",rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/swordsman/bm.png",levelRequired: 10,levelRequiredByLevel: {2:20,3:30,4:40,5:50,6:60,7:70,8:80,9:90,} },
        { name: "Regeneration", rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/archer/regen.png",levelRequired: 4 },
        { name: "Titan Will",tag:"Passive", rank: 3,pointNeeded: 0, type: "etc",icon: "images/skills/archer/tw.png",levelRequired: 30,levelRequiredByLevel: {2:50,3:70,4:90,5:110,6:130,7:150,8:170,9:190,} },
        { name: "Evasion", rank: 7,pointNeeded: 7, type: "etc",icon: "images/skills/brawler/evasion.png",levelRequired: 4,levelRequiredByLevel: {2:69,3:71,4:73,5:75,6:77,7:79,8:81,9:83,} },
        { name: "Lightspeed",rank: 12,pointNeeded: 12, type: "etc",icon: "images/skills/archer/ls.png",levelRequired: 117,levelRequiredByLevel: {2:119,3:121,4:123,5:125,6:127,7:129,8:131,9:133,} },
        { name: "Titan Force",tag:"Passive", rank: 15,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-force.png",levelRequired: 191,levelRequiredByLevel: {2:192,3:193,4:194,5:195,6:196,7:197,8:198,9:199,} },
        { name: "Light Armor", rank: 15,pointNeeded: 1, type: "etc",icon: "images/skills/brawler/sc.png",levelRequired: 160,levelRequiredByLevel: {2:170,3:180,4:190} },
        { name: "Titan Fill",tag:"Passive", rank: 16,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-fill.png",levelRequired: 201,levelRequiredByLevel: {2:202,3:203,4:204,5:205,6:206,7:207,8:208,9:209,} },
        { name: "Aegis of Evasion", rank: 16,pointNeeded: 0, type: "etc" ,icon: "images/skills/archer/aegis.png",levelRequired: 175,levelRequiredByLevel: {2:187,3:199}},
        { name: "Titan's Mettle",tag:"Passive", rank: 22,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-mettle.png",levelRequired: 211,levelRequiredByLevel: {2:212,3:213,4:214,5:215,6:216,7:217,8:218,9:219,} },
        { name: "Titan's Arcanum",tag:"Passive", rank: 23,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-arcanum.png",levelRequired: 221,levelRequiredByLevel: {2:222,3:223,4:224,5:225,6:226,7:227,8:228,9:229,} },
        

    ],

    swordsman: [{ name: "Sword Stab", rank: 1,pointNeeded: 1, type: "dex", icon: "images/skills/swordsman/st.png",requires: { dex: 25 }, levelRequired: 7,
            requiresByLevel: {
                2: { dex: 30 },
                3: { dex: 35 },
                4: { dex: 40 },
                5: { dex: 45 },
                6: { dex: 50 },
                7: { dex: 55 },
                8: { dex: 60 },
                9: { dex: 65 } },
                
            },
            { name: "Multi Slash", rank: 3,pointNeeded: 3, type: "dex", icon: "images/skills/swordsman/ms.png",requires: { dex: 72 }, levelRequired: 27,
            requiresSkill: { name: "Sword Stab", level: 2 },
            requiresByLevel: {
                2: { dex: 77 },
                3: { dex: 81 },
                4: { dex: 86 },
                5: { dex: 91 },
                6: { dex: 96 },
                7: { dex: 101 },
                8: { dex: 106 },
                9: { dex: 111 } ,
            levelRequiredByLevel: {
                2: 29,
                3: 31,
                4: 33,
                5: 35,
                6: 37,
                7: 39,
                8: 41,
                9: 43, }},
                
            },
        { name: "Sword Mastery", rank: 5,pointNeeded: 5, type: "dex", icon: "images/skills/swordsman/sm.png",requires: { dex: 119 }, levelRequired: 47,
            requiresByLevel: {
                2: { dex: 123 },
                3: { dex: 128 },
                4: { dex: 133 },
                5: { dex: 137 },
                6: { dex: 142 },
                7: { dex: 147 },
                8: { dex: 151 },
                9: { dex: 156 } },
                
            },
        { name: "Corkscrew Blade", rank: 5,pointNeeded: 5, type: "dex", icon: "images/skills/swordsman/cb.png",requires: { dex: 113 }, levelRequired: 47,
        requiresSkill: { name: "Sword Stab", level: 2 },
            requiresByLevel: {
                2: { dex: 118 },
                3: { dex: 123 },
                4: { dex: 128 },
                5: { dex: 133 },
                6: { dex: 138 },
                7: { dex: 143 },
                8: { dex: 148 },
                9: { dex: 153 } },
                
            },
        { name: "Lightning Slash", rank: 7,pointNeeded: 7, type: "dex", icon: "images/skills/swordsman/lss.png",requires: { dex: 165 }, levelRequired: 67,
            requiresSkill: { name: "Sword Stab", level: 4 },
            requiresByLevel: {
                2: { dex: 170 },
                3: { dex: 175 },
                4: { dex: 180 },
                5: { dex: 185 },
                6: { dex: 190 },
                7: { dex: 195 },
                8: { dex: 200 },
                9: { dex: 205 },
            levelRequiredByLevel: {
                2: 69,
                3: 71,
                4: 73,
                5: 75,
                6: 77,
                7: 79,
                8: 81,
                9: 83, } },
                
            },
        { name: "Sword Explosion", rank: 9,pointNeeded: 9, type: "dex", icon: "images/skills/swordsman/se.png",requires: { dex: 212 }, levelRequired: 87,
            requiresSkill: { name: "Lightning Slash", level: 2 },
            requiresByLevel: {
                2: { dex: 212 },
                3: { dex: 217 },
                4: { dex: 222 },
                5: { dex: 227 },
                6: { dex: 232 },
                7: { dex: 237 },
                8: { dex: 242 },
                9: { dex: 247 },
            levelRequiredByLevel: {
                2: 89,
                3: 91,
                4: 93,
                5: 95,
                6: 97,
                7: 99,
                8: 101,
                9: 103, } },
                
            },
        { name: "Sunken Strike", rank: 10,pointNeeded: 10, type: "dex", icon: "images/skills/swordsman/ss.png",requires: { dex: 235 }, levelRequired: 97,
        requiresSkill: { name: "Sword Mastery", level: 4 },    
        requiresByLevel: {
                2: { dex: 240 },
                3: { dex: 245 },
                4: { dex: 250 },
                5: { dex: 255 },
                6: { dex: 260 },
                7: { dex: 265 },
                8: { dex: 270 },
                9: { dex: 275 },
            levelRequiredByLevel: {
                2: 99,
                3: 101,
                4: 103,
                5: 105,
                6: 107,
                7: 109,
                8: 111,
                9: 113, } },
                
            },
        { name: "Explosive Strike", rank: 11,pointNeeded: 11, type: "dex", icon: "images/skills/swordsman/ess.png",requires: { dex: 258 }, levelRequired: 107,
        requiresSkill: { name: "Sword Explosion", level: 2 },    
        requiresByLevel: {
                2: { dex: 263 },
                3: { dex: 268 },
                4: { dex: 273 },
                5: { dex: 278 },
                6: { dex: 283 },
                7: { dex: 288 },
                8: { dex: 293 },
                9: { dex: 298 },
            },
                
            },
        { name: "Thunder Strike", rank: 12,pointNeeded: 12, type: "dex", icon: "images/skills/swordsman/tss.png",requires: { dex: 282 }, levelRequired: 117,
        requiresSkill: { name: "Sunken Strike", level: 2 },    
        requiresByLevel: {
                2: { dex: 286},
                3: { dex: 245 },
                4: { dex: 250 },
                5: { dex: 255 },
                6: { dex: 260 },
                7: { dex: 265 },
                8: { dex: 270 },
                9: { dex: 275 },
            levelRequiredByLevel: {
                2: 119,
                3: 121,
                4: 123,
                5: 125,
                6: 127,
                7: 129,
                8: 131,
                9: 133, } },
                
            },
        { name: "Inferno Attack", rank: 13,pointNeeded: 13, type: "dex", icon: "images/skills/swordsman/ia.png",requires: { dex: 305 }, levelRequired: 127,
        requiresSkill: { name: "Sunken Strike", level: 2 },    
        requiresByLevel: {
                2: { dex: 310 },
                3: { dex: 315 },
                4: { dex: 320 },
                5: { dex: 325 },
                6: { dex: 330 },
                7: { dex: 335 },
                8: { dex: 340 },
                9: { dex: 345 },
            levelRequiredByLevel: {
                2: 129,
                3: 131,
                4: 133,
                5: 135,
                6: 137,
                7: 139,
                8: 141,
                9: 143, } },
                
            },
        { name: "Soul Sword", rank: 14,pointNeeded: 14, type: "dex", icon: "images/skills/swordsman/sss.png",requires: { dex: 355 }, levelRequired: 147,
        requiresSkill: { name: "Inferno Attack", level: 2 },    
        requiresByLevel: {
                2: { dex: 360 },
                3: { dex: 365 },
                4: { dex: 370 },
                5: { dex: 375 },
                6: { dex: 380 },
                7: { dex: 385 },
                8: { dex: 390 },
                9: { dex: 395 },
            levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163, } },
                
            },
        { name: "Guardian Blade", rank: 15,pointNeeded: 15, type: "dex", icon: "images/skills/swordsman/gbb.png",requires: { dex: 378 }, levelRequired: 157,
        requiresSkill: { name: "Inferno Attack", level: 3 },    
        requiresByLevel: {
                2: { dex: 383 },
                3: { dex: 388 },
                4: { dex: 393 },
                5: { dex: 398 },
                6: { dex: 403 },
                7: { dex: 408 },
                8: { dex: 413 },
                9: { dex: 418 },
            levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173, } },
                
            },
        { name: "Spirit Sword Strike", rank: 16,pointNeeded: 16, type: "dex", icon: "images/skills/swordsman/ssss.png",requires: { dex: 403 }, levelRequired: 167,
        requiresSkill: { name: "Explosive Strike", level: 2 },    
        requiresByLevel: {
                2: { dex: 408 },
                3: { dex: 413 },
                4: { dex: 418 },
                5: { dex: 423 },
                6: { dex: 428 },
                7: { dex: 433 },
                8: { dex: 438 },
                9: { dex: 443 },
            levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183, } },
                
            },
        { name: "Relentless Assault", rank: 17,pointNeeded: 17, type: "dex", icon: "images/skills/swordsman/raa.png",requires: { dex: 422 }, levelRequired: 177,
        requiresSkill: { name: "Spirit Sword Strikey", level: 2},    
        requiresByLevel: {
                2: { dex: 427 },
                3: { dex: 432 },
                4: { dex: 437 },
                5: { dex: 442 },
                6: { dex: 447 },
                7: { dex: 452 },
                8: { dex: 457 },
                9: { dex: 462 },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193, } },
                
            },
        { name: "Assassinate", rank: 18,pointNeeded: 18, type: "dex", icon: "images/skills/swordsman/asn.png",requires: { dex: 445 }, levelRequired: 187,
        requiresSkill: { name: "Relentless Assault", level: 2 },    
        requiresByLevel: {
                2: { dex: 450 },
                3: { dex: 455 },
                4: { dex: 460 },
                5: { dex: 465 },
                6: { dex: 470 },
                7: { dex: 475 },
                8: { dex: 480 },
                9: { dex: 485 },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203, } },
                
            },
        { name: "Nether Slash", rank: 21,pointNeeded: 21, type: "dex", icon: "images/skills/swordsman/ns.png",requires: { dex: 468 }, levelRequired: 197,
        requiresSkill: { name: "Inferno Attack", level: 4 },    
        requiresByLevel: {
                2: { dex: 473 },
                3: { dex: 478 },
                4: { dex: 483 },
                5: { dex: 488 },
                6: { dex: 493 },
                7: { dex: 498 },
                8: { dex: 503 },
                9: { dex: 508 },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213, } },
                
            },
            { name: "Lemures", rank: 22,pointNeeded: 22, type: "dex", icon: "images/skills/swordsman/lemures.png",requires: { dex: 494 }, levelRequired: 207,
        requiresSkill: { name: "Nether Slash", level: 2 },    
        requiresByLevel: {
                2: { dex: 498 },
                3: { dex: 503 },
                4: { dex: 507 },
                5: { dex: 512 },
                6: { dex: 517 },
                7: { dex: 521 },
                8: { dex: 526},
                9: { dex: 531 },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213, } },
                
            },
            { name: "Divine Shield", rank: 1,pointNeeded: 1, type: "int", icon: "images/skills/swordsman/ds.png",requires: { int: 29 }, levelRequired: 7,
             requiresByLevel: {
                2: { int: 35 },
                3: { int: 40 },
                4: { int: 45 },
                5: { int: 50 },
                6: { int: 55 },
                7: { int: 60 },
                8: { int: 65 },
                9: { int: 70 },
             },
                
            },
            { name: "Ronin Slash", rank: 1,pointNeeded: 1, type: "int", icon: "images/skills/swordsman/rs.png",requires: { int: 30 }, levelRequired: 7,
             requiresByLevel: {
                2: { int: 35 },
                3: { int: 40 },
                4: { int: 45 },
                5: { int: 50 },
                6: { int: 55 },
                7: { int: 60 },
                8: { int: 65 },
                9: { int: 70 },
             },
                
            },

            { name: "Shogun Swing", rank: 3,pointNeeded: 3, type: "int", icon: "images/skills/swordsman/sssss.png",requires: { int: 82 }, levelRequired: 27,
        requiresSkill: { name: "Divine Shield", level: 3 },    
        requiresByLevel: {
                2: { int: 87 },
                3: { int: 92 },
                4: { int: 97 },
                5: { int: 102 },
                6: { int: 107 },
                7: { int: 112 },
                8: { int: 117 },
                9: { int: 122 },
            levelRequiredByLevel: {
                2: 29,
                3: 31,
                4: 33,
                5: 35,
                6: 37,
                7: 39,
                8: 41,
                9: 43, } },
                
            },
            { name: "Cyclone Slash", rank: 5,pointNeeded: 5, type: "int", icon: "images/skills/swordsman/cyc.png",requires: { int: 134 }, levelRequired: 47,
        requiresSkill: { name: "Shogun Swing", level: 4 },    
        requiresByLevel: {
                2: { int: 140 },
                3: { int: 145 },
                4: { int: 150 },
                5: { int: 155 },
                6: { int: 160 },
                7: { int: 165 },
                8: { int: 170 },
                9: { int: 175 },
             },
                
            },
            { name: "Tranquility", rank: 6,pointNeeded: 6, type: "int", icon: "images/skills/swordsman/tq.png",requires: { int: 161 }, levelRequired: 57,
        requiresSkill: { name: "Divine Shield", level: 4 },    
        requiresByLevel: {
                2: { int: 166 },
                3: { int: 171 },
                4: { int: 176 },
                5: { int: 181 },
                6: { int: 186 },
                7: { int: 191 },
                8: { int: 196 },
                9: { int: 201 },},
            },
            { name: "Arcane Punch", rank: 7,pointNeeded: 7, type: "int", icon: "images/skills/swordsman/ap.png",requires: { int: 187 }, levelRequired: 67,
        requiresSkill: { name: "Shogun Swing", level: 2 },    
        requiresByLevel: {
                2: { int: 192 },
                3: { int: 197 },
                4: { int: 202 },
                5: { int: 207 },
                6: { int: 212 },
                7: { int: 217 },
                8: { int: 222 },
                9: { int: 227 },
            levelRequiredByLevel: {
                2: 192,
                3: 197,
                4: 202,
                5: 207,
                6: 212,
                7: 217,
                8: 222,
                9: 227, } },
                
            },
            { name: "Kamikaze", rank: 9,pointNeeded: 9, type: "int", icon: "images/skills/swordsman/kami.png",requires: { int: 240 }, levelRequired: 87,
        requiresSkill: { name: "Arcane Punch", level: 2 },    
        requiresByLevel: {
                2: { int: 240 },
                3: { int: 245 },
                4: { int: 250 },
                5: { int: 255 },
                6: { int: 260 },
                7: { int: 265 },
                8: { int: 270 },
                9: { int: 275 },
            levelRequiredByLevel: {
                2: 89,
                3: 91,
                4: 93,
                5: 95,
                6: 97,
                7: 99,
                8: 101,
                9: 103, } },
                
            },
            { name: "Metal Body", rank: 10,pointNeeded: 10, type: "int", icon: "images/skills/swordsman/mb.png",requires: { int: 266 }, levelRequired: 97,
        requiresSkill: { name: "Divine Shield", level: 4 },    
        requiresByLevel: {
                2: { int: 271 },
                3: { int: 281 },
                4: { int: 286 },
                5: { int: 291 },
                6: { int: 296 },
                7: { int: 301 },
                8: { int: 306 },
                9: { int: 311 },
             },    
            },
            { name: "Lightning Strike", rank: 11,pointNeeded: 11, type: "int", icon: "images/skills/swordsman/lyt.png",requires: { int: 292}, levelRequired:107,
        requiresSkill: { name: "Kamikaze", level: 2 },    
        requiresByLevel: {
                2: { int: 298 },
                3: { int: 303 },
                4: { int: 308 },
                5: { int: 313 },
                6: { int: 318 },
                7: { int: 323 },
                8: { int: 328 },
                9: { int: 333 },
             },    
            },
            { name: "Cresent Slash", rank: 12,pointNeeded: 12, type: "int", icon: "images/skills/swordsman/cresent.png",requires: { int: 319 }, levelRequired: 117,
        requiresSkill: { name: "Lightning Strike", level: 2},    
        requiresByLevel: {
                2: { int: 324 },
                3: { int: 329 },
                4: { int: 334 },
                5: { int: 339 },
                6: { int: 296 },
                7: { int: 301 },
                8: { int: 306 },
                9: { int: 311 },
             },    
            },
            { name: "Blood Rain", rank: 13,pointNeeded: 13, type: "int", icon: "images/skills/swordsman/br.png",requires: { int: 345 }, levelRequired: 127,
        requiresSkill: { name: "Cyclone Slash", level: 2},    
        requiresByLevel: {
                2: { int: 350 },
                3: { int: 355 },
                4: { int: 360 },
                5: { int: 365 },
                6: { int: 370 },
                7: { int: 375 },
                8: { int: 380 },
                9: { int: 385 },
             },    
            },
            { name: "Sword Rings", rank: 14,pointNeeded: 14, type: "int", icon: "images/skills/swordsman/sr.png",requires: { int: 405 }, levelRequired: 147,
        requiresSkill: { name: "Cresent Slash", level: 2},    
        requiresByLevel: {
                2: { int: 410 },
                3: { int: 415 },
                4: { int: 420 },
                5: { int: 425 },
                6: { int: 430 },
                7: { int: 435 },
                8: { int: 440 },
                9: { int: 445 },
             },    
            },
            { name: "Rising Edge", rank: 15,pointNeeded: 15, type: "int", icon: "images/skills/swordsman/re.png",requires: { int: 433 }, levelRequired: 157,
        requiresSkill: { name: "Sword Rings", level: 3},    
        requiresByLevel: {
                2: { int: 438 },
                3: { int: 443 },
                4: { int: 448 },
                5: { int: 453 },
                6: { int: 458 },
                7: { int: 463 },
                8: { int: 468 },
                9: { int: 473 },
             },    
            },
            { name: "Whirlwind Sword Strike", rank: 16,pointNeeded: 16, type: "int", icon: "images/skills/swordsman/wss.png",requires: { int: 453 }, levelRequired: 167,
        requiresSkill: { name: "Blood Rain", level: 3},    
        requiresByLevel: {
                2: { int: 458 },
                3: { int: 463 },
                4: { int: 468 },
                5: { int: 473 },
                6: { int: 478 },
                7: { int: 483 },
                8: { int: 488 },
                9: { int: 493 },
             },    
            },
            { name: "Full Moon Strike", rank: 17,pointNeeded: 17, type: "int", icon: "images/skills/swordsman/fms.png",requires: { int: 477 }, levelRequired: 177,
        requiresSkill: { name: "Whirlwind Sword Strike", level: 3},    
        requiresByLevel: {
                2: { int: 482 },
                3: { int: 487 },
                4: { int: 492 },
                5: { int: 497 },
                6: { int: 502 },
                7: { int: 507 },
                8: { int: 512 },
                9: { int: 517 },
             },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193,}      
            },
            { name: "Earth Splitter", rank: 18,pointNeeded: 18, type: "int", icon: "images/skills/swordsman/esp.png",requires: { int: 503 }, levelRequired: 187,
        requiresSkill: { name: "Full Moon Strike", level: 3},    
        requiresByLevel: {
                2: { int: 508 },
                3: { int: 513 },
                4: { int: 518 },
                5: { int: 523 },
                6: { int: 528 },
                7: { int: 533 },
                8: { int: 538 },
                9: { int: 543 },
             },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203,}      
            },
            { name: "Crazy Wind Slash", rank: 21,pointNeeded: 21, type: "int", icon: "images/skills/swordsman/cws.png",requires: { int: 529 }, levelRequired: 197,
        requiresSkill: { name: "Rising Edge", level: 4},    
        requiresByLevel: {
                2: { int: 534 },
                3: { int: 539 },
                4: { int: 544 },
                5: { int: 549 },
                6: { int: 554 },
                7: { int: 559 },
                8: { int: 564 },
                9: { int: 569 },
             },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213,}      
            },
            { name: "Glint", rank: 22,pointNeeded: 22, type: "int", icon: "images/skills/swordsman/glint.png",requires: { int: 558 }, levelRequired: 207,
        requiresSkill: { name: "Rising Edge", level: 4},    
        requiresByLevel: {
                2: { int: 562 },
                3: { int: 567 },
                4: { int: 572 },
                5: { int: 577 },
                6: { int: 582 },
                7: { int: 587 },
                8: { int: 592 },
                9: { int: 597 },
             },
            levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223,}
                      
            },
        { name: "X Strike",rank: 1, pointNeeded: 1, type: "pow",icon: "images/skills/swordsman/xs.png", requires: { pow: 23 }, levelRequired: 7,
        requiresByLevel: 
        {2: { pow: 28 },
         3: { pow: 33 },
         4: { pow: 38 },
         5: { pow: 43 },
         6: { pow: 48 },
         7: { pow: 53 },
         8: { pow: 58 },
         9: { pow: 63 }},
        levelRequiredByLevel: {
        2: 9,
        3: 11,
        4: 13,
        5: 15,
        6: 17,
        7: 19,
        8: 21,
        9: 23,} },
        { name: "Dual Slash", rank:3 ,pointNeeded: 3, type: "pow",icon: "images/skills/swordsman/dslash.png", requires: { pow: 69 }, levelRequired: 27,
        requiresSkill: { name: "X Strike", level: 3 },
        requiresByLevel: 
        {2: { pow: 74},
         3: { pow: 79 },
         4: { pow: 84 },
         5: { pow: 89 },
         6: { pow: 94 },
         7: { pow: 99 },
         8: { pow: 104 },
         9: { pow: 109 }},
        levelRequiredByLevel: {
        2: 31,
        3: 33,
        4: 35,
        5: 37,
        6: 39,
        7: 41,
        8: 43,
        9: 45,} },
        { name: "Kick Slash", rank:5 ,pointNeeded: 5, type: "pow",icon: "images/skills/swordsman/ks.png", requires: { pow: 115 }, levelRequired: 47,
        requiresSkill: { name: "X Strike", level: 3 },
        requiresByLevel: 
        {2: { pow: 120},
         3: { pow: 125 },
         4: { pow: 130 },
         5: { pow: 135 },
         6: { pow: 140 },
         7: { pow: 145 },
         8: { pow: 150 },
         9: { pow: 155 }},
        levelRequiredByLevel: {
        2: 49,
        3: 51,
        4: 53,
        5: 55,
        6: 57,
        7: 59,
        8: 61,
        9: 63,} },
        { name: "Blood Lust",rank:5 ,pointNeeded: 5, type: "pow",icon: "images/skills/swordsman/bl.png", requires: { pow: 115 }, levelRequired: 47,
        requiresSkill: { name: "Kick Slash", level: 3 }, 
        requiresSkillByLevel: { 3: 1,4:4,5:5,6:6,7:7,8:8,9:9 },
        requiresByLevel: 
        {2: { pow: 120},
         3: { pow: 125 },
         4: { pow: 130 },
         5: { pow: 135 },
         6: { pow: 140 },
         7: { pow: 145 },
         8: { pow: 150 },
         9: { pow: 155 }},
        levelRequiredByLevel: {
        2: 49,
        3: 51,
        4: 53,
        5: 55,
        6: 57,
        7: 59,
        8: 61,
        9: 63,} },
        { name: "Jumping Slash",rank:7 ,pointNeeded: 7, type: "pow",icon: "images/skills/swordsman/js.png", requires: { pow: 160 }, levelRequired: 67,
        requiresSkill: { name: "Dual Slash", level: 2 }, 
        requiresByLevel: 
        {2: { pow: 165},
         3: { pow: 170 },
         4: { pow: 175 },
         5: { pow: 180 },
         6: { pow: 185 },
         7: { pow: 190 },
         8: { pow: 195 },
         9: { pow: 200 }},
        levelRequiredByLevel: {
        2: 69,
        3: 71,
        4: 73,
        5: 75,
        6: 77,
        7: 79,
        8: 81,
        9: 83,} },
        { name: "Critical Slash",rank:9 ,pointNeeded: 9, type: "pow",icon: "images/skills/swordsman/cslash.png", requires: { pow: 205 }, levelRequired: 87,
        requiresSkill: { name: "X Strike", level: 3 }, 
        requiresByLevel: 
        {2: { pow: 210 },
         3: { pow: 215 },
         4: { pow: 220 },
         5: { pow: 225 },
         6: { pow: 230 },
         7: { pow: 235 },
         8: { pow: 240 },
         9: { pow: 245 }},
        levelRequiredByLevel: {
        2: 89,
        3: 91,
        4: 93,
        5: 95,
        6: 97,
        7: 99,
        8: 101,
        9: 103,} },
        { name: "Hurricane Slash",rank:10 ,pointNeeded: 10, type: "pow",icon: "images/skills/swordsman/hl.png", requires: { pow: 230 }, levelRequired: 97,
        requiresSkill: { name: "Kick Slash", level: 3 }, 
        requiresByLevel: 
        {2: { pow: 235 },
         3: { pow: 240 },
         4: { pow: 245 },
         5: { pow: 250 },
         6: { pow: 255 },
         7: { pow: 260 },
         8: { pow: 265 },
         9: { pow: 270 }}, 
        },
        { name: "Fury",rank:11 ,pointNeeded: 11, type: "pow",icon: "images/skills/swordsman/fury.png", requires: { pow: 250 }, levelRequired: 107,
        requiresSkill: { name: "Blood Lust", level: 3 }, 
        requiresByLevel: 
        {2: { pow: 255 },
         3: { pow: 260 },
         4: { pow: 265 },
         5: { pow: 270 },
         6: { pow: 275 },
         7: { pow: 280 },
         8: { pow: 285 },
         9: { pow: 290 }}, 
        },
         { name: "Vacuum Slash",rank:12 ,pointNeeded: 12, type: "pow",icon: "images/skills/swordsman/vac.png", requires: { pow: 275 }, levelRequired: 117,
        requiresSkill: { name: "Hurricane Slash", level: 2 }, 
        requiresByLevel: 
        {2: { pow: 280 },
         3: { pow: 285 },
         4: { pow: 290 },
         5: { pow: 295 },
         6: { pow: 300 },
         7: { pow: 305 },
         8: { pow: 310 },
         9: { pow: 315 }}, 
        },
        { name: "Tornado Slash",rank:13 ,pointNeeded: 13, type: "pow",icon: "images/skills/swordsman/tornado.png", requires: { pow: 300 }, levelRequired: 127,
        requiresSkill: { name: "Hurricane Slash", level: 2 }, 
        requiresByLevel: 
        {2: { pow: 305 },
         3: { pow: 310 },
         4: { pow: 315 },
         5: { pow: 320 },
         6: { pow: 325 },
         7: { pow: 330 },
         8: { pow: 335 },
         9: { pow: 340 }}, 
        },
        { name: "Bloody Divide",rank:14 ,pointNeeded: 14, type: "pow",icon: "images/skills/swordsman/bd.png", requires: { pow: 345 }, levelRequired: 147,
        requiresSkill: { name: "Hurricane Slash", level: 2 }, 
        requiresByLevel: 
        {2: { pow: 350 },
         3: { pow: 355 },
         4: { pow: 360 },
         5: { pow: 365 },
         6: { pow: 370 },
         7: { pow: 375 },
         8: { pow: 380 },
         9: { pow: 385 }}, 
        levelRequiredByLevel: {
        2: 149,
        3: 151,
        4: 153,
        5: 155,
        6: 157,
        7: 159,
        8: 161,
        9: 163,} },
        { name: "Soul Reaver",rank:15 ,pointNeeded: 15, type: "pow",icon: "images/skills/swordsman/soul.png", requires: { pow: 367 }, levelRequired: 157,
        requiresSkill: { name: "Hurricane Slash", level: 3 }, 
        requiresByLevel: 
        {2: { pow: 372 },
         3: { pow: 377 },
         4: { pow: 382 },
         5: { pow: 387 },
         6: { pow: 392 },
         7: { pow: 397 },
         8: { pow: 402 },
         9: { pow: 407 }}, 
        levelRequiredByLevel: {
        2: 159,
        3: 161,
        4: 163,
        5: 165,
        6: 167,
        7: 169,
        8: 171,
        9: 173,} },
        { name: "Art of Destroyer Blade",rank:16 ,pointNeeded: 16, type: "pow",icon: "images/skills/swordsman/adb.png", requires: { pow: 392 }, levelRequired: 167,
        requiresSkill: { name: "Tornado Slash", level: 2 }, 
        requiresByLevel: 
        {2: { pow: 397 },
         3: { pow: 402 },
         4: { pow: 407 },
         5: { pow: 412 },
         6: { pow: 417 },
         7: { pow: 422 },
         8: { pow: 427 },
         9: { pow: 432 }}, 
        levelRequiredByLevel: {
        2: 169,
        3: 171,
        4: 173,
        5: 175,
        6: 177,
        7: 179,
        8: 181,
        9: 183,} },
        { name: "Sword Boomerang",rank:17 ,pointNeeded: 17, type: "pow",icon: "images/skills/swordsman/sb.png", requires: { pow: 414 }, levelRequired: 177,
        requiresSkill: { name: "Art of Destroyer Blade", level: 2 }, 
        requiresByLevel: 
        {2: { pow: 419 },
         3: { pow: 424 },
         4: { pow: 429 },
         5: { pow: 434 },
         6: { pow: 439 },
         7: { pow: 444 },
         8: { pow: 449 },
         9: { pow: 454 }}, 
        levelRequiredByLevel: {
        2: 179,
        3: 181,
        4: 183,
        5: 185,
        6: 187,
        7: 189,
        8: 191,
        9: 193,} },
        { name: "Cutting Edge",rank:18 ,pointNeeded: 18, type: "pow",icon: "images/skills/swordsman/edge.png", requires: { pow: 437 }, levelRequired: 187,
        requiresSkill: { name: "Sword Boomerang", level: 2 }, 
        requiresByLevel: 
        {2: { pow: 442 },
         3: { pow: 447 },
         4: { pow: 452 },
         5: { pow: 457 },
         6: { pow: 462 },
         7: { pow: 467 },
         8: { pow: 472 },
         9: { pow: 477 }}, 
        levelRequiredByLevel: {
        2: 189,
        3: 191,
        4: 193,
        5: 195,
        6: 197,
        7: 199,
        8: 201,
        9: 203,} },
        { name: "Red Thunder Dance",rank:21 ,pointNeeded: 21, type: "pow",icon: "images/skills/swordsman/rtd.png", requires: { pow: 460 }, levelRequired: 197,
        requiresSkill: { name: "Bloody Divide", level: 4 }, 
        requiresByLevel: 
        {2: { pow: 465 },
         3: { pow: 470 },
         4: { pow: 475 },
         5: { pow: 480 },
         6: { pow: 485 },
         7: { pow: 490 },
         8: { pow: 495 },
         9: { pow: 500 }}, 
        levelRequiredByLevel: {
        2: 199,
        3: 201,
        4: 203,
        5: 205,
        6: 207,
        7: 209,
        8: 211,
        9: 213,} },
        { name: "Flash Strike",rank:22 ,pointNeeded: 22, type: "pow",icon: "images/skills/swordsman/fs.png", requires: { pow: 485 }, levelRequired: 207,
        requiresSkill: { name: "Bloody Divide", level: 4 }, 
        requiresByLevel: 
        {2: { pow: 490 },
         3: { pow: 494 },
         4: { pow: 499 },
         5: { pow: 504 },
         6: { pow: 509 },
         7: { pow: 513 },
         8: { pow: 518 },
         9: { pow: 522 }}, 
        levelRequiredByLevel: {
        2: 209,
        3: 211,
        4: 213,
        5: 215,
        6: 217,
        7: 219,
        8: 221,
        9: 223,} },




        { name: "Blade Mastery",tag:"Passive",rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/swordsman/bm.png",levelRequired: 10,levelRequiredByLevel: {2:20,3:30,4:40,5:50,6:60,7:70,8:80,9:90,} },
        { name: "Regeneration", rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/archer/regen.png",levelRequired: 4 },
        { name: "Titan Will",tag:"Passive", rank: 3,pointNeeded: 0, type: "etc",icon: "images/skills/archer/tw.png",levelRequired: 30,levelRequiredByLevel: {2:50,3:70,4:90,5:110,6:130,7:150,8:170,9:190,} },
        { name: "Lightspeed",rank: 12,pointNeeded: 12, type: "etc",icon: "images/skills/archer/ls.png",levelRequired: 117,levelRequiredByLevel: {2:119,3:121,4:123,5:125,6:127,7:129,8:131,9:133,} },
        { name: "Titan Force",tag:"Passive", rank: 15,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-force.png",levelRequired: 191,levelRequiredByLevel: {2:192,3:193,4:194,5:195,6:196,7:197,8:198,9:199,} },
        { name: "Light Armor", rank: 15,pointNeeded: 1, type: "etc",icon: "images/skills/swordsman/la.png",levelRequired: 160,levelRequiredByLevel: {2:170,3:180,4:190} },
        { name: "Titan Fill",tag:"Passive", rank: 16,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-fill.png",levelRequired: 201,levelRequiredByLevel: {2:202,3:203,4:204,5:205,6:206,7:207,8:208,9:209,} },
        { name: "Aegis of Evasion", rank: 16,pointNeeded: 0, type: "etc" ,icon: "images/skills/archer/aegis.png",levelRequired: 175,levelRequiredByLevel: {2:187,3:199}},
        { name: "Titan's Mettle",tag:"Passive", rank: 22,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-mettle.png",levelRequired: 211,levelRequiredByLevel: {2:212,3:213,4:214,5:215,6:216,7:217,8:218,9:219,} },
        { name: "Titan's Arcanum",tag:"Passive", rank: 23,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-arcanum.png",levelRequired: 221,levelRequiredByLevel: {2:222,3:223,4:224,5:225,6:226,7:227,8:228,9:229,} },

            
        ],

    archer: [
        { name: "Arrow Assault", rank: 1,pointNeeded: 1, type: "dex", icon: "images/skills/archer/arrow-assault.png",requires: { dex: 28 }, levelRequired: 7,
            requiresByLevel: {
                2: { dex: 33 },
                3: { dex: 38 },
                4: { dex: 43 },
                5: { dex: 48 },
                6: { dex: 53 },
                7: { dex: 58 },
                8: { dex: 63 },
                9: { dex: 68 } },
            levelRequiredByLevel: {
                2: 9,
                3: 11,
                4: 13,
                5: 15,
                6: 17,
                7: 19,
                8: 21,
                9: 23, } },
        { name: "Kawasu", rank: 3,tag:"Passive", pointNeeded: 3, type: "dex",icon: "images/skills/archer/kawasu.png", requires: { dex: 78 }, levelRequired: 27, requiresSkill: { name: "Arrow Assault", level: 3 },
            requiresByLevel: {
                2: { dex: 83 },
                3: { dex: 88 },
                4: { dex: 93 },
                5: { dex: 98 },
                6: { dex: 103 },
                7: { dex: 108 },
                8: { dex: 113 },
                9: { dex: 118 }
            },
            levelRequiredByLevel: {
                2: 29,
                3: 31,
                4: 33,
                5: 35,
                6: 37,
                7: 39,
                8: 41,
                9: 43
            } },
        { name: "Arrow Storm", rank: 5,pointNeeded: 5, type: "dex",icon: "images/skills/archer/arrow-storm.png", requires: { dex: 127 }, levelRequired: 47, requiresSkill: { name: "Arrow Assault", level: 4 }
    ,
            requiresByLevel: {
                2: { dex: 132 },
                3: { dex: 137 },
                4: { dex: 142 },
                5: { dex: 147 },
                6: { dex: 152 },
                7: { dex: 157 },
                8: { dex: 162 },
                9: { dex: 167 }
            },
            levelRequiredByLevel: {
                2: 49,
                3: 51,
                4: 53,
                5: 55,
                6: 57,
                7: 59,
                8: 61,
                9: 63
            } },
        { name: "Cripple Shot", rank: 5,pointNeeded: 5, type: "dex",icon: "images/skills/archer/crippleshot.png", requires: { dex: 127 }, levelRequired: 47,
            requiresByLevel: {
                2: { dex: 132 },
                3: { dex: 137 },
                4: { dex: 142 },
                5: { dex: 147 },
                6: { dex: 152 },
                7: { dex: 157 },
                8: { dex: 162 },
                9: { dex: 167 }
            },
            levelRequiredByLevel: {
                2: 49,
                3: 51,
                4: 53,
                5: 55,
                6: 57,
                7: 59,
                8: 61,
                9: 63
            } },
        { name: "Evasive Chant", rank: 7,pointNeeded: 7, type: "dex",icon: "images/skills/archer/ec.png", requires: { dex: 177 }, levelRequired: 67, requiresSkill: { name: "Kawasu", level: 3 },
            requiresByLevel: {
                2: { dex: 181 },
                3: { dex: 186 },
                4: { dex: 191 },
                5: { dex: 196 },
                6: { dex: 201 },
                7: { dex: 206 },
                8: { dex: 211 },
                9: { dex: 216 }
            },
            levelRequiredByLevel: {
                2: 71,
                3: 73,
                4: 75,
                5: 77,
                6: 79,
                7: 81,
                8: 83,
                9: 85
            } },
        { name: "Illusion Charge", rank: 7,pointNeeded: 7, type: "dex",icon: "images/skills/archer/ic.png", requires: { dex: 177 }, levelRequired: 67, requiresSkill: { name: "Arrow Storm", level: 3 },
    requiresByLevel: {
                2: { dex: 182 },
                3: { dex: 187 },
                4: { dex: 192 },
                5: { dex: 197 },
                6: { dex: 202 },
                7: { dex: 207 },
                8: { dex: 212 },
                9: { dex: 217 }
            },
            levelRequiredByLevel: {
                2: 71,
                3: 73,
                4: 75,
                5: 77,
                6: 79,
                7: 81,
                8: 83,
                9: 85
            } },
        { name: "Arrow of Armaggedon", rank: 9,pointNeeded: 9, type: "dex",icon: "images/skills/archer/aa.png", requires: { dex: 226 }, levelRequired: 87, requiresSkill: { name: "Arrow Storm", level: 3 },
    requiresByLevel: {
                2: { dex: 231 },
                3: { dex: 236 },
                4: { dex: 241 },
                5: { dex: 246 },
                6: { dex: 251 },
                7: { dex: 256 },
                8: { dex: 261 },
                9: { dex: 266 }
            } },
        { name: "Tripple Shot", rank: 10,pointNeeded: 10, type: "dex",icon: "images/skills/archer/ts.png", requires: { dex: 251}, levelRequired: 97, requiresSkill: { name: "Arrow Storm", level: 3 },
     requiresByLevel: {
                2: { dex: 256 },
                3: { dex: 261 },
                4: { dex: 266 },
                5: { dex: 271 },
                6: { dex: 276 },
                7: { dex: 281},
                8: { dex: 286 },
                9: { dex: 291 }
            }},
        { name: "Star Fall", rank: 11,pointNeeded: 11, type: "dex",icon: "images/skills/archer/sf.png", requires: { dex: 275 }, levelRequired: 107, requiresSkill: { name: "Arrow Storm", level: 2 },
    requiresByLevel: {
                2: { dex: 281 },
                3: { dex: 286 },
                4: { dex: 291 },
                5: { dex: 296 },
                6: { dex: 301 },
                7: { dex: 306 },
                8: { dex: 311 },
                9: { dex: 316 }
            } },
        { name: "Slow", rank: 12,pointNeeded: 12, type: "dex",icon: "images/skills/archer/slow.png", requires: { dex: 300 }, levelRequired: 117, requiresSkill: { name: "Arrow Assault", level: 2 },
    requiresByLevel: {
                2: { dex: 305 },
                3: { dex: 310 },
                4: { dex: 315 },
                5: { dex: 320 },
                6: { dex: 325 },
                7: { dex: 330 },
                8: { dex: 335 },
                9: { dex: 340 }
            } },
        { name: "Dance of Death", rank: 13,pointNeeded: 13, type: "dex",icon: "images/skills/archer/dod.png", requires: { dex: 325 }, levelRequired: 127, requiresSkill: { name: "Arrow Assault", level: 2 },
    requiresByLevel: {
                2: { dex: 330 },
                3: { dex: 335 },
                4: { dex: 340 },
                5: { dex: 345 },
                6: { dex: 350 },
                7: { dex: 355 },
                8: { dex: 360 },
                9: { dex: 365 }
            } },
        { name: "Guardian Shot", rank: 14,pointNeeded: 14, type: "dex",icon: "images/skills/archer/gs.png", requires: { dex: 375 }, levelRequired: 147, requiresSkill: { name: "Star Fall", level: 2 },
    requiresByLevel: {
                2: { dex: 380 },
                3: { dex: 385},
                4: { dex: 390 },
                5: { dex: 395 },
                6: { dex: 400 },
                7: { dex: 405 },
                8: { dex: 410 },
                9: { dex: 415 }
            },
            levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163
            } },
        { name: "Illusion Chain", rank: 15,pointNeeded: 15, type: "dex",icon: "images/skills/archer/chain.png", requires: { dex: 401 }, levelRequired: 157, requiresSkill: { name: "Star Fall", level: 3 },
    requiresByLevel: {
                2: { dex: 406 },
                3: { dex: 411},
                4: { dex: 416 },
                5: { dex: 421 },
                6: { dex: 426 },
                7: { dex: 431 },
                8: { dex: 436 },
                9: { dex: 441 }
            },
            levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173
            } },
        { name: "Arrow of Destructive Lightning", rank: 16,pointNeeded: 16, type: "dex",icon: "images/skills/archer/adl.png", requires: { dex: 426 }, levelRequired: 167, requiresSkill: { name: "Dance of Death", level: 3 },
    requiresByLevel: {
                2: { dex: 431 },
                3: { dex: 436},
                4: { dex: 441 },
                5: { dex: 446 },
                6: { dex: 451 },
                7: { dex: 456 },
                8: { dex: 461 },
                9: { dex: 466 }
            },
            levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183
            } },
        { name: "Rising Assault", rank: 17,pointNeeded: 17, type: "dex",icon: "images/skills/archer/ra.png", requires: { dex: 449 }, levelRequired: 177, requiresSkill: { name: "Arrow of Destructive Lightning", level: 3 },
    requiresByLevel: {
                2: { dex: 454 },
                3: { dex: 459},
                4: { dex: 464},
                5: { dex: 469 },
                6: { dex: 474 },
                7: { dex: 479 },
                8: { dex: 484 },
                9: { dex: 489 }
            },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193
            } },
        { name: "Wind Slicer", rank: 18,pointNeeded: 18, type: "dex",icon: "images/skills/archer/ws.png", requires: { dex: 473 }, levelRequired: 187, requiresSkill: { name: "Rising Assault", level: 3 },
    requiresByLevel: {
                2: { dex: 478 },
                3: { dex: 483},
                4: { dex: 488},
                5: { dex: 493 },
                6: { dex: 498 },
                7: { dex: 503 },
                8: { dex: 508 },
                9: { dex: 513 }
            },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203
            } },
        { name: "Emperor's Wrath", rank: 21,pointNeeded: 21, type: "dex",icon: "images/skills/archer/ew.png", requires: { dex: 498 }, levelRequired: 197, requiresSkill: { name: "Guardian Shot", level: 4 },requiresByLevel: {
                2: { dex: 503 },
                3: { dex: 508},
                4: { dex: 513},
                5: { dex: 518 },
                6: { dex: 523 },
                7: { dex: 528 },
                8: { dex: 533 },
                9: { dex: 538 }
            },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213
            } },
        { name: "Hearthbreaker", rank: 22,pointNeeded: 22, type: "dex",icon: "images/skills/archer/heart.png", requires: { dex: 525 }, levelRequired: 207, requiresSkill: { name: "Emperor's Wrath", level: 2}
    ,requiresByLevel: {
                2: { dex: 529 },
                3: { dex: 534},
                4: { dex: 539},
                5: { dex: 543 },
                6: { dex: 548 },
                7: { dex: 553 },
                8: { dex: 557 },
                9: { dex: 562}
            },
            levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223
            } },
        { name: "Force Shot", rank: 1, pointNeeded: 1, type: "pow", icon: "images/skills/archer/forceshot.png",requires: { pow: 20 }, levelRequired: 7,requiresByLevel: {
                2: { pow: 25 },
                3: { pow: 30},
                4: { pow: 35},
                5: { pow: 40},
                6: { pow: 45},
                7: { pow: 50},
                8: { pow: 55 },
                9: { pow: 60}
            },
            levelRequiredByLevel: {
                2: 9,
                3: 11,
                4: 13,
                5: 15,
                6: 17,
                7: 19,
                8: 21,
                9: 23
            } },
        { name: "Bow Strike", rank: 3, pointNeeded: 3, type: "pow",icon: "images/skills/archer/bs.png", requires: { pow: 65 }, levelRequired: 27, requiresSkill: { name: "Force Shot", level: 3 }
    ,requiresByLevel: {
                2: { pow: 70 },
                3: { pow: 75},
                4: { pow: 80},
                5: { pow: 85},
                6: { pow: 90},
                7: { pow: 95},
                8: { pow: 100 },
                9: { pow: 105}
            } },
        { name: "Tri-Force", rank: 3, pointNeeded: 3, type: "pow",icon: "images/skills/archer/tf.png", requires: { pow: 73 }, levelRequired: 27, requiresSkill: { name: "Force Shot", level: 3 }
    ,requiresByLevel: {
                2: { pow: 78 },
                3: { pow: 83},
                4: { pow: 88},
                5: { pow: 93},
                6: { pow: 98},
                7: { pow: 103},
                8: { pow: 108},
                9: { pow: 113}
            },
            levelRequiredByLevel: {
                2: 29,
                3: 31,
                4: 33,
                5: 35,
                6: 37,
                7: 39,
                8: 41,
                9: 43
            } },
        { name: "Bow Mastery",tag:"Passive",rank: 5, pointNeeded: 5, type: "pow",icon: "images/skills/archer/bm.png", requires: { pow: 110 }, levelRequired: 47,
        requiresSkill: { name: "Force Shot", level: 4 }, 
        requiresSkillByLevel: { 2: 4,3:5,5:6,7:7,8:8,9:9 },
        requiresByLevel: 
        {2: { pow: 115 },
         3: { pow: 120 },
         4: { pow: 125 },
         5: { pow: 130 },
         6: { pow: 135 },
         7: { pow: 140 },
         8: { pow: 145 },
         9: { pow: 150 }} },
        { name: "Armor Piercing Shot",tag:"Passive", rank: 5, pointNeeded: 5, type: "pow",icon: "images/skills/archer/aps.png",requires: { pow: 110 }, levelRequired: 47,requiresSkill: { name: "Bow Strike", level: 3 }
        ,requiresSkillByLevel: { 2: 5, 3: 7, 4: 9 }
        ,requiresByLevel:
        {2: { pow: 115 },
         3: { pow: 120 },
         4: { pow: 125 },
         5: { pow: 130 },
         6: { pow: 135 },
         7: { pow: 140 },
         8: { pow: 145 },
         9: { pow: 150 }} },
        { name: "Bow Slash", rank: 6, pointNeeded: 6, type: "pow",icon: "images/skills/archer/bow-slash.png", levelRequired: 57,requires: { pow: 154 },
        requiresByLevel: 
        {2: { pow: 159 },
         3: { pow: 164 },
         4: { pow: 169 },
         5: { pow: 174},
         6: { pow: 179 },
         7: { pow: 184 },
         8: { pow: 189 },
         9: { pow: 194 }} },
        { name: "Amazon's Fury", rank: 7, pointNeeded: 7, type: "pow",icon: "images/skills/archer/af.png", levelRequired: 57,requires: { pow: 155 },requiresByLevel: {2: { pow: 160 },3: { pow: 165 },4: { pow: 170 },5: { pow: 175},6: { pow: 180},7: { pow: 185 },8: { pow: 190},9: { pow: 195 }}  },
        { name: "Enhanced Force Shot", rank: 8, pointNeeded: 8, type: "pow",icon: "images/skills/archer/efs.png",
            requires: { pow: 180 }, levelRequired: 77,
            requiresSkill: { name: "Armor Piercing Shot", level: 3 },
            requiresByLevel: {
                2: { pow: 185 },
                3: { pow: 190 },
                4: { pow: 195 },
                5: { pow: 200 },
                6: { pow: 205 },
                7: { pow: 210 },
                8: { pow: 215 },
                9: { pow: 220 }
            },
            levelRequiredByLevel: {
                2: 79,
                3: 81,
                4: 83,
                5: 85,
                6: 87,
                7: 89,
                8: 91,
                9: 93
            }
        },
        { name: "Hunter's Snare", rank: 10, pointNeeded: 10, type: "pow",icon: "images/skills/archer/hs.png",
            requires: { pow: 225 }, levelRequired: 97,
            requiresSkill: { name: "Armor Piercing Shot", level: 3 },
            requiresByLevel: {
                2: { pow: 230 },
                3: { pow: 235 },
                4: { pow: 240 },
                5: { pow: 245 },
                6: { pow: 250 },
                7: { pow: 255 },
                8: { pow: 260 },
                9: { pow: 265 }
            } },
        { name: "Arrow Bombardment", rank: 11, pointNeeded: 11, type: "pow",icon: "images/skills/archer/ab.png",
            requires: { pow: 250 }, levelRequired: 107,
            requiresSkill: { name: "Enhanced Force Shot", level: 2 },
            requiresByLevel: {
                2: { pow: 255 },
                3: { pow: 260},
                4: { pow: 265 },
                5: { pow: 270 },
                6: { pow: 275 },
                7: { pow: 280 },
                8: { pow: 285 },
                9: { pow: 290}
            }  },
        { name: "Tiger's Rage", rank: 12, pointNeeded: 12, type: "pow",icon: "images/skills/archer/tr.png",
            requires: { pow: 270 }, levelRequired: 117,
            requiresSkill: { name: "Enhanced Force Shot", level: 2 },
            requiresByLevel: {
                2: { pow: 275 },
                3: { pow: 280},
                4: { pow: 285 },
                5: { pow: 290 },
                6: { pow: 295 },
                7: { pow: 300 },
                8: { pow: 305 },
                9: { pow: 310}
            } },
        { name: "Wrath of the Phoenix", rank: 13, pointNeeded: 13, type: "pow",icon: "images/skills/archer/wp.png",
            requires: { pow: 305 }, levelRequired: 127,
            requiresSkill: { name: "Enhanced Force Shot", level: 2 },
            requiresByLevel: {
                2: { pow: 310 },
                3: { pow: 315},
                4: { pow: 320 },
                5: { pow: 325 },
                6: { pow: 330 },
                7: { pow: 335 },
                8: { pow: 340 },
                9: { pow: 345}
            }  },
        { name: "Anger Shot", rank: 14, pointNeeded: 14, type: "pow",icon: "images/skills/archer/anger.png",
            requires: { pow: 345 }, levelRequired: 147,
            requiresSkill: { name: "Wrath of the Phoenix", level: 2 },
            requiresByLevel: {
                2: { pow: 350 },
                3: { pow: 355},
                4: { pow: 360 },
                5: { pow: 365 },
                6: { pow: 370 },
                7: { pow: 375 },
                8: { pow: 380 },
                9: { pow: 385}
            } },
        { name: "Blue Dragon Riser", rank: 15, pointNeeded: 15, type: "pow",icon: "images/skills/archer/bdr.png",
            requires: { pow: 368 }, levelRequired: 157,
            requiresSkill: { name: "Anger Shot", level: 3 },
            requiresByLevel: {
                2: { pow: 373 },
                3: { pow: 378},
                4: { pow: 383 },
                5: { pow: 388 },
                6: { pow: 393 },
                7: { pow: 398 },
                8: { pow: 403 },
                9: { pow: 408}
            } },
        { name: "Blue Rising Dragon", rank: 16, pointNeeded: 16, type: "pow",icon: "images/skills/archer/brd.png",
            requires: { pow: 393 }, levelRequired: 167,
            requiresSkill: { name: "Anger Shot", level: 2 },
            requiresByLevel: {
                2: { pow: 398 },
                3: { pow: 403},
                4: { pow: 408 },
                5: { pow: 413 },
                6: { pow: 418 },
                7: { pow: 423 },
                8: { pow: 428 },
                9: { pow: 433}
            } },
        { name: "Vaporize", rank: 17, pointNeeded: 17, type: "pow" ,icon: "images/skills/archer/vap.png",
            requires: { pow: 412 }, levelRequired: 177,
            requiresSkill: { name: "Blue Rising Dragon", level: 2 },
            requiresByLevel: {
                2: { pow: 417},
                3: { pow: 422},
                4: { pow: 427 },
                5: { pow: 432 },
                6: { pow: 437 },
                7: { pow: 442 },
                8: { pow: 447 },
                9: { pow: 452}
            }},
        { name: "Piercing Light", rank: 18, pointNeeded: 18, type: "pow",icon: "images/skills/archer/pl.png",
            requires: { pow: 435 }, levelRequired: 187,
            requiresSkill: { name: "Vaporize", level: 2 },
            requiresByLevel: {
                2: { pow: 440},
                3: { pow: 445},
                4: { pow: 450 },
                5: { pow: 455 },
                6: { pow: 460 },
                7: { pow: 465 },
                8: { pow: 470 },
                9: { pow: 475}
            } },
        { name: "Wind Spirit Strike", rank: 21, pointNeeded: 21, type: "pow",icon: "images/skills/archer/wss.png",
            requires: { pow: 457 }, levelRequired: 197,
            requiresSkill: { name: "Blue Dragon Riser", level: 4 },
            requiresByLevel: {
                2: { pow: 462},
                3: { pow: 467},
                4: { pow: 472 },
                5: { pow: 477 },
                6: { pow: 482 },
                7: { pow: 487 },
                8: { pow: 492 },
                9: { pow: 497}
            } },
        { name: "Ghastly Tempest", rank: 22, pointNeeded: 22, type: "pow",icon: "images/skills/archer/gt.png",
            requires: { pow: 483 }, levelRequired: 207,
            requiresSkill: { name: "Wind Spirit Strike", level: 2 },
            requiresByLevel: {
                2: { pow: 462},
                3: { pow: 467},
                4: { pow: 472 },
                5: { pow: 477 },
                6: { pow: 482 },
                7: { pow: 487 },
                8: { pow: 492 },
                9: { pow: 497}
            } },
        { name: "Shock Wave", rank: 1,pointNeeded: 1, type: "int",icon: "images/skills/archer/sw.png",
            requires: { int: 28 }, levelRequired: 7,
            requiresByLevel: {
                2: { int: 33},
                3: { int: 38},
                4: { int: 43},
                5: { int: 48 },
                6: { int: 53 },
                7: { int: 58 },
                8: { int: 63 },
                9: { int: 68}
            } },
        { name: "Sacrifice", rank: 2,pointNeeded: 2, type: "int",icon: "images/skills/archer/sacri.png",
            requires: { int: 62 }, levelRequired: 17,
            requiresSkill: { name: "Shock Wave", level: 2 },
            requiresByLevel: {
                2: { int: 67},
                3: { int: 72},
                4: { int: 78},
                5: { int: 83 },
                6: { int: 88 },
                7: { int: 93 },
                8: { int: 99 },
                9: { int: 104}
            } },
        { name: "Light Pierce", rank: 2,pointNeeded: 2, type: "int",icon: "images/skills/archer/lp.png",
            requires: { int: 62 }, levelRequired: 17,
            requiresByLevel: {
                2: { int: 67},
                3: { int: 72},
                4: { int: 78},
                5: { int: 83 },
                6: { int: 88 },
                7: { int: 93 },
                8: { int: 99 },
                9: { int: 104}
            } },
        { name: "Energy Arrow", rank: 3,pointNeeded: 3, type: "int",icon: "images/skills/archer/lp.png",
            requires: { int: 88 }, levelRequired: 27,
            requiresByLevel: {
                2: { int: 93},
                3: { int: 98},
                4: { int: 103},
                5: { int: 108},
                6: { int: 113},
                7: { int: 118},
                8: { int: 123 },
                9: { int: 128}
            } },
        { name: "Eagle's Sight",tag:"Passive", rank: 4,pointNeeded: 4, type: "int",icon: "images/skills/archer/es.png",
            requires: { int: 115 }, levelRequired: 37,
            requiresSkill: { name: "Sacrifice", level: 3 },
            requiresByLevel: {
                2: { int: 120},
                3: { int: 125},
                4: { int: 130},
                5: { int: 136},
                6: { int: 141},
                7: { int: 146},
                8: { int: 152 },
                9: { int: 157}
            } },
        { name: "Vampiric Arrow", rank: 5,pointNeeded: 5, type: "int",icon: "images/skills/archer/vamp.png",
            requires: { int: 141 }, levelRequired: 47,
            requiresSkill: { name: "Shock Wave", level: 4 },
            requiresByLevel: {
                2: { int: 146},
                3: { int: 151},
                4: { int: 156},
                5: { int: 161},
                6: { int: 166},
                7: { int: 171},
                8: { int: 176 },
                9: { int: 181}
            } },
        { name: "Burst Fire", rank: 7,pointNeeded: 7, type: "int",icon: "images/skills/archer/bf.png",
            requires: { int: 194}, levelRequired: 67,
            requiresSkill: { name: "Vampiric Arrow", level: 3 },
            requiresByLevel: {
                2: { int: 199},
                3: { int: 204},
                4: { int: 209},
                5: { int: 214},
                6: { int: 219},
                7: { int: 224},
                8: { int: 229 },
                9: { int: 234}
            } },
        { name: "Soul Arrow", rank: 8,pointNeeded: 8, type: "int",icon: "images/skills/archer/sa.png",
            requires: { int: 220}, levelRequired: 77,
            requiresSkill: { name: "Vampiric Arrow", level: 2 },
            requiresByLevel: {
                2: { int: 225},
                3: { int: 231},
                4: { int: 236},
                5: { int: 241},
                6: { int: 246},
                7: { int: 251},
                8: { int: 256 },
                9: { int: 261}
            } },
        { name: "Gaia's Blessing", rank: 10,pointNeeded: 10, type: "int",icon: "images/skills/archer/gb.png",
            requires: { int: 273}, levelRequired: 97,
            requiresSkill: { name: "Soul Arrow", level: 2 },
            requiresByLevel: {
                2: { int: 278},
                3: { int: 283},
                4: { int: 288},
                5: { int: 293},
                6: { int: 298},
                7: { int: 303},
                8: { int: 308 },
                9: { int: 313}
            } },
        { name: "Force of Gaia", rank: 11,pointNeeded: 11, type: "int",icon: "images/skills/archer/gaia.png",
            requires: { int:299}, levelRequired: 107,
            requiresSkill: { name: "Burst Fire", level: 2 },
            requiresByLevel: {
                2: { int: 305},
                3: { int: 310},
                4: { int: 315},
                5: { int: 320},
                6: { int: 325},
                7: { int: 330},
                8: { int: 335 },
                9: { int: 340}
            } },
        { name: "Force of Illusion", rank: 12,pointNeeded: 12, type: "int"
            ,icon: "images/skills/archer/fi.png",
            requires: { int:326}, levelRequired: 117,
            requiresSkill: { name: "Gaia's Blessing", level: 2 },
            requiresByLevel: {
                2: { int: 331},
                3: { int: 336},
                4: { int: 341},
                5: { int: 346},
                6: { int: 351},
                7: { int: 356},
                8: { int: 361 },
                9: { int: 366}
            }
         },
        { name: "Heavens Judgement", rank: 13,pointNeeded: 13, type: "int",icon: "images/skills/archer/hj.png",
            requires: { int:350}, levelRequired: 127,
            requiresSkill: { name: "Gaia's Blessing", level: 2 },
            requiresByLevel: {
                2: { int: 355},
                3: { int: 360},
                4: { int: 365},
                5: { int: 370},
                6: { int: 375},
                7: { int: 380},
                8: { int: 385 },
                9: { int: 390}
            } },
        { name: "Dimension Illusion", rank: 14,pointNeeded: 14, type: "int",icon: "images/skills/archer/di.png",
            requires: { int:405}, levelRequired: 147,
            requiresSkill: { name: "Heaven Judgement", level: 2 },
            requiresByLevel: {
                2: { int: 410},
                3: { int: 415},
                4: { int: 420},
                5: { int: 425},
                6: { int: 430},
                7: { int: 435},
                8: { int: 440 },
                9: { int: 445}
            } },
        { name: "Illusion Squall", rank: 15,pointNeeded: 15, type: "int",icon: "images/skills/archer/is.png",
            requires: { int:432}, levelRequired: 157,
            requiresSkill: { name: "Dimension Illusion", level: 3 },
            requiresByLevel: {
                2: { int: 437},
                3: { int: 442},
                4: { int: 447},
                5: { int: 452},
                6: { int: 457},
                7: { int: 462},
                8: { int: 467 },
                9: { int: 472}
            } },
        { name: "Fire Spirit Arrow", rank: 16,pointNeeded: 16, type: "int",icon: "images/skills/archer/fire.png",
            requires: { int:457}, levelRequired: 167,
            requiresSkill: { name: "Heavens Judgement", level: 2 },
            requiresByLevel: {
                2: { int: 462},
                3: { int: 467},
                4: { int: 472},
                5: { int: 477},
                6: { int: 482},
                7: { int: 487},
                8: { int: 492 },
                9: { int: 497}
            } },
        { name: "Cluster Assault", rank: 17,pointNeeded: 17, type: "int",icon: "images/skills/archer/ca.png",
            requires: { int:485}, levelRequired: 177,
            requiresSkill: { name: "Fire Spirit Arrow", level: 3 },
            requiresByLevel: {
                2: { int: 490},
                3: { int: 495},
                4: { int: 500},
                5: { int: 505},
                6: { int: 510},
                7: { int: 515},
                8: { int: 520 },
                9: { int: 525}
            },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193
            } },
        { name: "Guided Arrow", rank: 18,pointNeeded: 18, type: "int",icon: "images/skills/archer/ga.png",
            requires: { int:511}, levelRequired: 187,
            requiresSkill: { name: "Cluster Assault", level: 3 },
            requiresByLevel: {
                2: { int: 516},
                3: { int: 521},
                4: { int: 526},
                5: { int: 531},
                6: { int: 536},
                7: { int: 541},
                8: { int: 546},
                9: { int: 551}
            },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203
            } },
        { name: "Medusa's Eye", rank: 21,pointNeeded: 21, type: "int",icon: "images/skills/archer/medusa.png",
            requires: { int:537}, levelRequired: 197,
            requiresSkill: { name: "Dimension Illusion", level: 4 },
            requiresByLevel: {
                2: { int: 516},
                3: { int: 521},
                4: { int: 526},
                5: { int: 531},
                6: { int: 536},
                7: { int: 541},
                8: { int: 546},
                9: { int: 551}
            },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213
            } },
        { name: "Dust Cloud", rank: 22,pointNeeded: 22, type: "int",icon: "images/skills/archer/dc.png",
            requires: { int:566}, levelRequired: 207,
            requiresSkill: { name: "Medusa's Eye", level: 2 },
            requiresByLevel: {
                2: { int: 516},
                3: { int: 521},
                4: { int: 526},
                5: { int: 531},
                6: { int: 536},
                7: { int: 541},
                8: { int: 546},
                9: { int: 551}
            },
            levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223
            } },
        { name: "Focus",tag:"Passive",rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/archer/focus.png",levelRequired: 10,levelRequiredByLevel: {2:20,3:30,4:40,5:50,6:60,7:70,8:80,9:90,} },
        { name: "Range Mastery", tag:"Passive",rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/archer/rm.png",levelRequired: 10,levelRequiredByLevel: {2:20,3:30,4:40,5:50,6:60,7:70,8:80,9:90,} },
        { name: "Regeneration", rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/archer/regen.png",levelRequired: 4 },
        { name: "Titan Will",tag:"Passive", rank: 3,pointNeeded: 0, type: "etc",icon: "images/skills/archer/tw.png",levelRequired: 30,levelRequiredByLevel: {2:50,3:70,4:90,5:110,6:130,7:150,8:170,9:190,} },
        { name: "Lightspeed",rank: 12,pointNeeded: 12, type: "etc",icon: "images/skills/archer/ls.png",levelRequired: 117,levelRequiredByLevel: {2:119,3:121,4:123,5:125,6:127,7:129,8:131,9:133,} },
        { name: "Titan Force",tag:"Passive", rank: 15,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-force.png",levelRequired: 191,levelRequiredByLevel: {2:192,3:193,4:194,5:195,6:196,7:197,8:198,9:199,} },
        { name: "Chrono Shift", rank: 15,pointNeeded: 1, type: "etc",icon: "images/skills/archer/cs.png",levelRequired: 160,levelRequiredByLevel: {2:170,3:180,4:190} },
        { name: "Titan Fill",tag:"Passive", rank: 16,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-fill.png",levelRequired: 201,levelRequiredByLevel: {2:202,3:203,4:204,5:205,6:206,7:207,8:208,9:209,} },
        { name: "Aegis of Evasion", rank: 16,pointNeeded: 0, type: "etc" ,icon: "images/skills/archer/aegis.png",levelRequired: 175,levelRequiredByLevel: {2:187,3:199}},
        { name: "Titan's Mettle",tag:"Passive", rank: 22,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-mettle.png",levelRequired: 211,levelRequiredByLevel: {2:212,3:213,4:214,5:215,6:216,7:217,8:218,9:219,} },
        { name: "Titan's Arcanum",tag:"Passive", rank: 23,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-arcanum.png",levelRequired: 221,levelRequiredByLevel: {2:222,3:223,4:224,5:225,6:226,7:227,8:228,9:229,} },
        
        
    ],

    shaman: [{ name: "Rapid Pierce", rank: 1,pointNeeded: 1, type: "pow", icon: "images/skills/shaman/rp.png",requires: { pow: 20 }, levelRequired: 7,
        requiresByLevel: {
                2: { int: 25},
                3: { int: 30},
                4: { int: 35},
                5: { int: 40},
                6: { int: 40},
                7: { int: 45},
                8: { int: 50},
                9: { int: 55}
            },
            },
            { name: "Drilling Strike", rank: 2,pointNeeded: 2, type: "pow", icon: "images/skills/shaman/ds.png",requires: { pow: 40 }, levelRequired: 17,
            requiresByLevel: {
                2: { int: 45},
                3: { int: 50},
                4: { int: 55},
                5: { int: 60},
                6: { int: 65},
                7: { int: 70},
                8: { int: 75},
                9: { int: 70}
            }
            },
            { name: "Spear Mastery", tag:"Passive", rank: 3,pointNeeded: 3, type: "pow", icon: "images/skills/shaman/sm.png",requires: { pow: 65 }, levelRequired: 27,
            requiresSkill: { name: "Rapid Pierce", level: 3 },
            requiresByLevel: {
                2: { int: 70},
                3: { int: 75},
                4: { int: 80},
                5: { int: 85},
                6: { int: 90},
                7: { int: 95},
                8: { int: 100},
                9: { int: 105}
            }
            },
            { name: "Enhanced Drilling Strike", rank: 4,pointNeeded: 4, type: "pow", icon: "images/skills/shaman/eds.png",requires: { pow: 90 }, levelRequired: 37,
            requiresSkill: { name: "Rapid Pierce", level: 3 },
            requiresByLevel: {
                2: { int: 95},
                3: { int: 100},
                4: { int: 105},
                5: { int: 110},
                6: { int: 115},
                7: { int: 120},
                8: { int: 125},
                9: { int: 130}
            }
            },
            { name: "Gift of Life", tag:"Passive", rank: 6,pointNeeded: 6, type: "pow", icon: "images/skills/shaman/gol.png",requires: { pow: 135 }, levelRequired: 57,
            requiresByLevel: {
                2: { int: 140},
                3: { int: 145},
                4: { int: 150},
                5: { int: 155},
                6: { int: 160},
                7: { int: 165},
                8: { int: 170},
                9: { int: 175}
            }
            },
            { name: "Lunar Catastrophe",  rank: 6,pointNeeded: 6, type: "pow", icon: "images/skills/shaman/lc.png",requires: { pow: 135 }, levelRequired: 57,
            requiresByLevel: {
                2: { int: 140},
                3: { int: 145},
                4: { int: 150},
                5: { int: 155},
                6: { int: 160},
                7: { int: 165},
                8: { int: 170},
                9: { int: 175}
            }
            },
            { name: "Radial Spear Strike",  rank: 8,pointNeeded: 8, type: "pow", icon: "images/skills/shaman/rss.png",requires: { pow: 180 }, levelRequired: 77,
            requiresSkill: {name:"Lunar Catastroph",level: 2 },
            requiresByLevel: {
                2: { int: 140},
                3: { int: 145},
                4: { int: 150},
                5: { int: 155},
                6: { int: 160},
                7: { int: 165},
                8: { int: 170},
                9: { int: 175}
            }
            },
            { name: "Spectral Pierce",  rank: 9,pointNeeded: 9, type: "pow", icon: "images/skills/shaman/sp.png",requires: { pow: 205 }, levelRequired: 87,
            requiresByLevel: {
                2: { int: 210},
                3: { int: 215},
                4: { int: 220},
                5: { int: 225},
                6: { int: 230},
                7: { int: 235},
                8: { int: 240},
                9: { int: 245}
            }
            },
            { name: "Shin Ryu Attack",  rank: 10,pointNeeded: 10, type: "pow", icon: "images/skills/shaman/sra.png",requires: { pow: 225 }, levelRequired: 97,
            requiresSkill: {name:"Enhance Drilling Strike",level: 3 },
            requiresByLevel: {
                2: { int: 230},
                3: { int: 235},
                4: { int: 240},
                5: { int: 245},
                6: { int: 250},
                7: { int: 255},
                8: { int: 260},
                9: { int: 265}
            },
            levelRequiredByLevel: {
                2: 99,
                3: 101,
                4: 103,
                5: 105,
                6: 107,
                7: 109,
                8: 111,
                9: 113
            },
            },
            { name: "Tremor",  rank: 11,pointNeeded: 11, type: "pow", icon: "images/skills/shaman/tr.png",requires: { pow: 250 }, levelRequired: 107,
            requiresSkill: {name:"Spectral Pierce",level: 2 },
            requiresByLevel: {
                2: { int: 255},
                3: { int: 260},
                4: { int: 265},
                5: { int: 270},
                6: { int: 275},
                7: { int: 280},
                8: { int: 285},
                9: { int: 290}
            }
            },
            { name: "Flight of the CRane",  rank: 12,pointNeeded: 12, type: "pow", icon: "images/skills/shaman/fc.png",requires: { pow: 275 }, levelRequired: 117,
            requiresSkill: {name:"Shin Ryu Attack",level: 2 },
            requiresByLevel: {
                2: { int: 280},
                3: { int: 285},
                4: { int: 290},
                5: { int: 295},
                6: { int: 300},
                7: { int: 305},
                8: { int: 310},
                9: { int: 315}
            }
            },
            { name: "Demon Spear Dance",  rank: 13,pointNeeded: 13, type: "pow", icon: "images/skills/shaman/dsd.png",requires: { pow: 295 }, levelRequired: 127,
            requiresSkill: {name:"Shin Ryu Attack",level: 2 },
            requiresByLevel: {
                2: { int: 300},
                3: { int: 305},
                4: { int: 310},
                5: { int: 315},
                6: { int: 320},
                7: { int: 325},
                8: { int: 330},
                9: { int: 335}
            }
            },
            { name: "Cresent Moon Raging Winds",  rank: 14,pointNeeded: 14, type: "pow", icon: "images/skills/shaman/cmr.png",requires: { pow: 345 }, levelRequired: 147,
            requiresSkill: {name:"Demon Spear Dance",level: 2 },
            requiresByLevel: {
                2: { int: 350},
                3: { int: 355},
                4: { int: 360},
                5: { int: 365},
                6: { int: 370},
                7: { int: 375},
                8: { int: 380},
                9: { int: 385}
            },
            levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163
            },
            },
            { name: "Shadow Spear",  rank: 15,pointNeeded: 15, type: "pow", icon: "images/skills/shaman/ss.png",requires: { pow: 368 }, levelRequired: 157,
            requiresSkill: {name:"Cresent Moon Raging Winds",level: 3 },
            requiresByLevel: {
                2: { int: 373},
                3: { int: 378},
                4: { int: 383},
                5: { int: 388},
                6: { int: 393},
                7: { int: 398},
                8: { int: 403},
                9: { int: 408}
            },
            levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173
            }
            },
            { name: "Dance of Phoenix",  rank: 16,pointNeeded: 16, type: "pow", icon: "images/skills/shaman/dop.png",requires: { pow: 393 }, levelRequired: 167,
            requiresSkill: {name:"Tremor",level: 3 },
            requiresByLevel: {
                2: { int: 398},
                3: { int: 403},
                4: { int: 408},
                5: { int: 413},
                6: { int: 418},
                7: { int: 423},
                8: { int: 428},
                9: { int: 433}
            },
            },
            { name: "Impale",  rank: 17,pointNeeded: 17, type: "pow", icon: "images/skills/shaman/impale.png",requires: { pow: 413 }, levelRequired: 177,
            requiresSkill: {name:"Dance of Phoenix",level: 3 },
            requiresByLevel: {
                2: { int: 418},
                3: { int: 423},
                4: { int: 428},
                5: { int: 433},
                6: { int: 438},
                7: { int: 443},
                8: { int: 448},
                9: { int: 453}
            },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193
            }
            },
            { name: "Executioner",  rank: 18,pointNeeded: 18, type: "pow", icon: "images/skills/shaman/ex.png",requires: { pow: 436 }, levelRequired: 187,
            requiresSkill: {name:"Impale",level: 3 },
            requiresByLevel: {
                2: { int: 441},
                3: { int: 446},
                4: { int: 451},
                5: { int: 456},
                6: { int: 461},
                7: { int: 466},
                8: { int: 471},
                9: { int: 476}
            },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203
            }
            },
            { name: "Nine-Spectral Demon Spear",  rank: 21,pointNeeded: 21, type: "pow", icon: "images/skills/shaman/ns.png",requires: { pow: 458 }, levelRequired: 197,
            requiresSkill: {name:"Shadow Spear",level: 4 },
            requiresByLevel: {
                2: { int: 463},
                3: { int: 468},
                4: { int: 473},
                5: { int: 478},
                6: { int: 483},
                7: { int: 488},
                8: { int: 493},
                9: { int: 498}
            },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213
            }
            },
            { name: "Schorching Strike",  rank: 22,pointNeeded: 22, type: "pow", icon: "images/skills/shaman/scs.png",requires: { pow: 485 }, levelRequired: 207,
            requiresSkill: {name:"Shadow Spear",level: 4 },
            requiresByLevel: {
                2: { int: 489},
                3: { int: 494},
                4: { int: 499},
                5: { int: 503},
                6: { int: 508},
                7: { int: 513},
                8: { int: 518},
                9: { int: 522}
            },
            levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223
            }
            },
            { name: "Incineration", rank: 1,pointNeeded: 1, type: "dex", icon: "images/skills/shaman/inc.png",requires: { int: 54 }, levelRequired: 7,
        requiresByLevel: {
                2: { int: 60},
                3: { int: 65},
                4: { int: 71},
                5: { int: 76},
                6: { int: 81},
                7: { int: 86},
                8: { int: 91},
                9: { int: 96}
            },
            },
            { name: "Weaken", rank: 2,pointNeeded: 2, type: "dex", icon: "images/skills/shaman/weak.png",requires: { int: 82 }, levelRequired: 17,
            requiresSkill: {name: "Inceneration", level: 2 },
            requiresByLevel: {
                2: { int: 88},
                3: { int: 93},
                4: { int: 98},
                5: { int: 104},
                6: { int: 109},
                7: { int: 115},
                8: { int: 120},
                9: { int: 126}
            },
            levelRequiredByLevel: {
                2: 19,
                3: 21,
                4: 23,
                5: 25,
                6: 27,
                7: 29,
                8: 31,
                9: 33
            }
            },
            { name: "MP Regeneration",tag:"Passive", rank: 4,pointNeeded: 4, type: "dex", icon: "images/skills/shaman/mp.png",requires: { int: 137 }, levelRequired: 37,
            requiresSkill: {name: "Inceneration", level: 2 },
            requiresByLevel: {
                2: { int: 142},
                3: { int: 148},
                4: { int: 153},
                5: { int: 158},
                6: { int: 163},
                7: { int: 168},
                8: { int: 173},
                9: { int: 178}
            },
            levelRequiredByLevel: {
                2: 39,
                3: 41,
                4: 43,
                5: 45,
                6: 47,
                7: 49,
                8: 51,
                9: 53
            }
            },
            { name: "Gaia Dragon Strike", rank: 5,pointNeeded: 5, type: "dex", icon: "images/skills/shaman/gds.png",requires: { int: 164 }, levelRequired: 47,
            requiresSkill: {name: "Inceneration", level: 4 },
            requiresByLevel: {
                2: { int: 170},
                3: { int: 175},
                4: { int: 181},
                5: { int: 186},
                6: { int: 191},
                7: { int: 196},
                8: { int: 201},
                9: { int: 206}
            },
            levelRequiredByLevel: {
                2: 49,
                3: 51,
                4: 53,
                5: 55,
                6: 57,
                7: 59,
                8: 61,
                9: 63
            }
        },
        { name: "Dragon of Cold Icycle", rank: 6,pointNeeded: 6, type: "dex", icon: "images/skills/shaman/di.png",requires: { int: 192 }, levelRequired: 57,
            requiresSkill: {name: "Inceneration", level: 2 },
            requiresByLevel: {
                2: { int: 170},
                3: { int: 175},
                4: { int: 181},
                5: { int: 186},
                6: { int: 191},
                7: { int: 196},
                8: { int: 201},
                9: { int: 206}
            }
        },
        { name: "Amplified Effect", rank: 6,pointNeeded: 6, type: "dex", icon: "images/skills/shaman/ae.png",requires: { int: 192 }, levelRequired: 57,
            requiresSkill: {name: "Gaia Dragon Strike", level: 1 },
            requiresByLevel: {
                2: { int: 197},
                3: { int: 203},
                4: { int: 208},
                5: { int: 214},
                6: { int: 219},
                7: { int: 224},
                8: { int: 229},
                9: { int: 234}
            },
            levelRequiredByLevel: {
                2: 59,
                3: 61,
                4: 63,
                5: 65,
                6: 67,
                7: 69,
                8: 71,
                9: 73
            }
        },
        { name: "Frost Incantation", rank: 7,pointNeeded: 7, type: "dex", icon: "images/skills/shaman/fi.png",requires: { int: 220 }, levelRequired: 67,
            requiresSkill: {name: "Dragon of Cold Icycle", level: 2 },
            requiresByLevel: {
                2: { int: 225},
                3: { int: 230},
                4: { int: 235},
                5: { int: 240},
                6: { int: 245},
                7: { int: 250},
                8: { int: 255},
                9: { int: 260}
            }
        },
        { name: "Serpent's Venom", rank: 8,pointNeeded: 8, type: "dex", icon: "images/skills/shaman/sv.png",requires: { int: 252 }, levelRequired: 77,
            requiresSkill: {name: "Inceniration", level: 4 },
            requiresByLevel: {
                2: { int: 225},
                3: { int: 230},
                4: { int: 235},
                5: { int: 240},
                6: { int: 245},
                7: { int: 250},
                8: { int: 255},
                9: { int: 260}
            },
            levelRequiredByLevel: {
                2: 79,
                3: 81,
                4: 83,
                5: 85,
                6: 87,
                7: 89,
                8: 91,
                9: 93
            }
        },
        { name: "Petrify", rank: 9,pointNeeded: 9, type: "dex", icon: "images/skills/shaman/pet.png",requires: { int: 280 }, levelRequired: 87,
            requiresSkill: {name: "Gaia Dragon Strike", level: 3 },
            requiresByLevel: {
                2: { int: 285},
                3: { int: 290},
                4: { int: 295},
                5: { int: 300},
                6: { int: 305},
                7: { int: 310},
                8: { int: 315},
                9: { int: 320}
            },
            levelRequiredByLevel: {
                2: 89,
                3: 91,
                4: 93,
                5: 95,
                6: 97,
                7: 99,
                8: 101,
                9: 103
            }
        },
        { name: "Dark Souls", rank: 10,pointNeeded: 10, type: "dex", icon: "images/skills/shaman/dark.png",requires: { int: 302 }, levelRequired: 97,
            requiresSkill: {name: "Inceniration", level: 5 },
            requiresByLevel: {
                2: { int: 307},
                3: { int: 312},
                4: { int: 315},
                5: { int: 320},
                6: { int: 325},
                7: { int: 330},
                8: { int: 335},
                9: { int: 340}
            },
        },
        { name: "Vigor Explosion", rank: 11,pointNeeded: 11, type: "dex", icon: "images/skills/shaman/vig.png",requires: { int: 329 }, levelRequired: 107,
            requiresSkill: {name: "Petrify", level: 2 },
            requiresByLevel: {
                2: { int: 335},
                3: { int: 341},
                4: { int: 346},
                5: { int: 351},
                6: { int: 356},
                7: { int: 362},
                8: { int: 367},
                9: { int: 372}
            },
        },
        { name: "Enhanced Weaken", rank: 12,pointNeeded: 12, type: "dex", icon: "images/skills/shaman/ew.png",requires: { int: 357 }, levelRequired: 117,
            requiresSkill: {name: "Serpent's Venom", level: 2 },
            requiresByLevel: {
                2: { int: 362},
                3: { int: 368},
                4: { int: 373},
                5: { int: 379},
                6: { int: 384},
                7: { int: 390},
                8: { int: 395},
                9: { int: 401}
            },
        },
        { name: "Infernal Punishment", rank: 13,pointNeeded: 13, type: "dex", icon: "images/skills/shaman/ip.png",requires: { int: 385 }, levelRequired: 127,
            requiresSkill: {name: "Petrify", level: 2 },
            requiresByLevel: {
                2: { int: 390},
                3: { int: 395},
                4: { int: 400},
                5: { int: 405},
                6: { int: 410},
                7: { int: 415},
                8: { int: 420},
                9: { int: 425}
            },
        },
        { name: "Gravity", rank: 14,pointNeeded: 14, type: "dex", icon: "images/skills/shaman/gr.png",requires: { int: 440 }, levelRequired: 147,
            requiresSkill: {name: "Infernal Punishment", level: 2 },
            requiresByLevel: {
                2: { int: 445},
                3: { int: 450},
                4: { int: 455},
                5: { int: 460},
                6: { int: 465},
                7: { int: 470},
                8: { int: 475},
                9: { int: 480}
            },
            levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163
            }
        },
        { name: "Meteor Smash", rank: 15,pointNeeded: 15, type: "dex", icon: "images/skills/shaman/ms.png",requires: { int: 469 }, levelRequired: 157,
            requiresSkill: {name: "Gravity", level: 3 },
            requiresByLevel: {
                2: { int: 474},
                3: { int: 479},
                4: { int: 484},
                5: { int: 489},
                6: { int: 494},
                7: { int: 499},
                8: { int: 504},
                9: { int: 509}
            },
            levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173
            }
        },
        { name: "Rising Corona", rank: 16,pointNeeded: 16, type: "dex", icon: "images/skills/shaman/rc.png",requires: { int: 494 }, levelRequired: 167,
            requiresSkill: {name: "Gravity", level: 3 },
            requiresByLevel: {
                2: { int: 499},
                3: { int: 504},
                4: { int: 509},
                5: { int: 514},
                6: { int: 519},
                7: { int: 524},
                8: { int: 529},
                9: { int: 534}
            },
            levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183
            }
        },
        { name: "Absolute Zero", rank: 17,pointNeeded: 17, type: "dex", icon: "images/skills/shaman/az.png",requires: { int: 522 }, levelRequired: 177,
            requiresSkill: {name: "Rising Corona", level: 3 },
            requiresByLevel: {
                2: { int: 527},
                3: { int: 532},
                4: { int: 537},
                5: { int: 542},
                6: { int: 547},
                7: { int: 552},
                8: { int: 557},
                9: { int: 562}
            },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193
            }
        },
        { name: "Lightning Bolt", rank: 18,pointNeeded: 18, type: "dex", icon: "images/skills/shaman/lb.png",requires: { int: 550 }, levelRequired: 187,
            requiresSkill: {name: "Gravity", level: 3 },
            requiresByLevel: {
                2: { int: 555},
                3: { int: 560},
                4: { int: 565},
                5: { int: 570},
                6: { int: 575},
                7: { int: 580},
                8: { int: 585},
                9: { int: 590}
            },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203
            }
        },
        { name: "Frost Stardust", rank: 21,pointNeeded: 21, type: "dex", icon: "images/skills/shaman/fs.png",requires: { int: 577 }, levelRequired: 197,
            requiresSkill: {name: "Infernal Punishment", level: 4 },
            requiresByLevel: {
                2: { int: 582},
                3: { int: 588},
                4: { int: 593},
                5: { int: 599},
                6: { int: 604},
                7: { int: 610},
                8: { int: 615},
                9: { int: 621}
            },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213
            }
        },
        { name: "Frostbite", rank: 22,pointNeeded: 22, type: "dex", icon: "images/skills/shaman/frost.png",requires: { int: 607 }, levelRequired: 207,
            requiresSkill: {name: "Frost Stardust", level: 2 },
            requiresByLevel: {
                2: { int: 612},
                3: { int: 618},
                4: { int: 623},
                5: { int: 629},
                6: { int: 635},
                7: { int: 640},
                8: { int: 646},
                9: { int: 651}
            },
            levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223
            }
        },
            { name: "Vampiric Attack", rank: 1,pointNeeded: 1, type: "int", icon: "images/skills/shaman/vba.png",requires: { int: 54 }, levelRequired: 7,
            requiresSkill: {name: "Breath of Life", level: 2 },
            requiresByLevel: {
                2: { int: 60},
                3: { int: 65},
                4: { int: 71},
                5: { int: 76},
                6: { int: 81},
                7: { int: 86},
                8: { int: 92},
                9: { int: 97}
            },
            },
            { name: "Breath of Life", rank: 1,pointNeeded: 1, type: "int", icon: "images/skills/shaman/bl.png",requires: { int: 54 }, levelRequired: 7,
        requiresByLevel: {
                2: { int: 60},
                3: { int: 65},
                4: { int: 71},
                5: { int: 76},
                6: { int: 81},
                7: { int: 86},
                8: { int: 92},
                9: { int: 97}
            },
            },
            { name: "Sacrificial Ritual", rank: 2,pointNeeded: 2, type: "int", icon: "images/skills/shaman/sr.png",requires: { int: 82 }, levelRequired: 17,
         requiresSkill: {name: "Breath of Life", level: 3 },
            requiresByLevel: {
                2: { int: 87},
                3: { int: 93},
                4: { int: 98},
                5: { int: 102},
                6: { int: 108},
                7: { int: 113},
                8: { int: 118},
                9: { int: 123}
            },
            },
            { name: "Inspire", rank: 3,pointNeeded: 3, type: "int", icon: "images/skills/shaman/ins.png",requires: { int: 109 }, levelRequired: 27,
            requiresSkill: {name: "Vampiric Attak", level: 3 },
            requiresByLevel: {
                2: { int: 115},
                3: { int: 120},
                4: { int: 125},
                5: { int: 130},
                6: { int: 135},
                7: { int: 140},
                8: { int: 145},
                9: { int: 150}
            },
            },
            { name: "Fortify", rank: 4,pointNeeded: 4, type: "int", icon: "images/skills/shaman/40fyu.png",requires: { int: 137 }, levelRequired: 37,
            requiresSkill: {name: "Breath of Life", level: 4 },
            requiresByLevel: {
                2: { int: 142},
                3: { int: 148},
                4: { int: 153},
                5: { int: 159},
                6: { int: 164},
                7: { int: 170},
                8: { int: 175},
                9: { int: 181}
            },
            },
            { name: "Arcane Recovery", rank: 4,pointNeeded: 4, type: "int", icon: "images/skills/shaman/arc.png",requires: { int: 137 }, levelRequired: 37,
            requiresSkill: {name: "Vampiric Attack", level: 3 },
            requiresByLevel: {
                2: { int: 142},
                3: { int: 148},
                4: { int: 153},
                5: { int: 159},
                6: { int: 164},
                7: { int: 170},
                8: { int: 175},
                9: { int: 181}
            },
            },
            { name: "Enhanced Vampiric Attack", rank: 5,pointNeeded: 5, type: "int", icon: "images/skills/shaman/va.png",requires: { int: 164 }, levelRequired: 47,
            requiresSkill: {name: "Inspire", level: 2 },
            requiresByLevel: {
                2: { int: 170},
                3: { int: 175},
                4: { int: 181},
                5: { int: 186},
                6: { int: 192},
                7: { int: 197},
                8: { int: 203},
                9: { int: 208}
            },
            },
            { name: "Revitalize", rank: 5,pointNeeded: 5, type: "int", icon: "images/skills/shaman/rev.png",requires: { int: 164 }, levelRequired: 47,
            requiresSkill: {name: "Sacrificial Ritual", level: 3 },
            requiresByLevel: {
                2: { int: 170},
                3: { int: 175},
                4: { int: 181},
                5: { int: 186},
                6: { int: 192},
                7: { int: 197},
                8: { int: 203},
                9: { int: 208}
            },
            },
            { name: "Haste",tag:"Passive",rank: 6,pointNeeded: 6, type: "int", icon: "images/skills/shaman/haste.png",requires: { int: 192 }, levelRequired: 57,
            requiresSkill: {name: "Inspire", level: 2 },
            requiresByLevel: {
                2: { int: 197},
                3: { int: 203},
                4: { int: 208},
                5: { int: 214},
                6: { int: 219},
                7: { int: 225},
                8: { int: 230},
                9: { int: 236}
            },
            levelRequiredByLevel: {
                2: 59,
                3: 61,
                4: 63,
                5: 65,
                6: 67,
                7: 69,
                8: 71,
                9: 73
            }
            },
            { name: "Heaven's Treatment",rank: 7,pointNeeded: 7, type: "int", icon: "images/skills/shaman/ht.png",requires: { int: 219 }, levelRequired: 67,
            requiresSkill: {name: "Revitalize", level: 2 },
            requiresByLevel: {
                2: { int: 225},
                3: { int: 230},
                4: { int: 236},
                5: { int: 241},
                6: { int: 247},
                7: { int: 252},
                8: { int: 258},
                9: { int: 263}
            },
            },
            { name: "Confusion Strike",rank: 8,pointNeeded: 8, type: "int", icon: "images/skills/shaman/cs.png",requires: { int: 247 }, levelRequired: 77,
            requiresSkill: {name: "Fortify", level: 3 },
            requiresByLevel: {
                2: { int: 252},
                3: { int: 258},
                4: { int: 263},
                5: { int: 269},
                6: { int: 274},
                7: { int: 279},
                8: { int: 285},
                9: { int: 291}
            },
            },
            { name: "Magma Explosion",rank: 8,pointNeeded: 8, type: "int", icon: "images/skills/shaman/me.png",requires: { int: 247 }, levelRequired: 77,
            requiresSkill: {name: "Vampiric Attack", level: 3 },
            requiresByLevel: {
                2: { int: 252},
                3: { int: 258},
                4: { int: 263},
                5: { int: 269},
                6: { int: 274},
                7: { int: 279},
                8: { int: 285},
                9: { int: 291}
            },
            },
            { name: "Massive haste",rank: 9,pointNeeded: 9, type: "int", icon: "images/skills/shaman/mh.png",requires: { int: 274 }, levelRequired: 87,
            requiresSkill: {name: "Haste", level: 3 },
            requiresByLevel: {
                2: { int: 280},
                2: { int: 285},
                4: { int: 290},
                5: { int: 296},
                6: { int: 302},
                7: { int: 307},
                8: { int: 307},
                9: { int: 313}
            },
            },
            { name: "Berserk Aura",rank: 11,pointNeeded: 11, type: "int", icon: "images/skills/shaman/ba.png",requires: { int: 340 }, levelRequired: 107,
            requiresSkill: {name: "Massive Haste", level: 3 },
            requiresByLevel: {
                2: { int: 350},
                3: { int: 360},
                4: { int: 370},
                5: { int: 380},
                6: { int: 390},
                7: { int: 400},
                8: { int: 410},
                9: { int: 420}
            },
            },
            { name: "Resurrection",rank: 12,pointNeeded: 12, type: "int", icon: "images/skills/shaman/resu.png",requires: { int: 357 }, levelRequired: 117,
            requiresSkill: {name: "Heaven's Treatment", level: 2 },
            },
            { name: "Spear Guardian's Wrath",rank: 13,pointNeeded: 13, type: "int", icon: "images/skills/shaman/sgw.png",requires: { int: 385 }, levelRequired: 127,
            requiresSkill: {name: "Heaven's Treatment", level: 2 },
            requiresByLevel: {
                2: { int: 390},
                3: { int: 395},
                4: { int: 400},
                5: { int: 405},
                6: { int: 410},
                7: { int: 415},
                8: { int: 420},
                9: { int: 425}
            },
            },
            { name: "Paralysed",rank: 14,pointNeeded: 14, type: "int", icon: "images/skills/shaman/par.png",requires: { int: 440 }, levelRequired: 147,
            requiresSkill: {name: "Spear Guardian's Wrath", level: 2 },
            requiresByLevel: {
                2: { int: 445},
                3: { int: 450},
                4: { int: 455},
                5: { int: 460},
                6: { int: 465},
                7: { int: 470},
                8: { int: 475},
                9: { int: 480}
            },
            levelRequiredByLevel: {
                2: 149,
                3: 151,
                4: 153,
                5: 155,
                6: 157,
                7: 159,
                8: 161,
                9: 163
            }
            },
            { name: "Will o' Wisp",rank: 15,pointNeeded: 15, type: "int", icon: "images/skills/shaman/par.png",requires: { int: 469 }, levelRequired: 157,
            requiresSkill: {name: "Spear Guardian's Wrath", level: 3 },
            requiresByLevel: {
                2: { int: 474},
                3: { int: 479},
                4: { int: 484},
                5: { int: 489},
                6: { int: 494},
                7: { int: 499},
                8: { int: 504},
                9: { int: 509}
            },
            levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173
            }
            },
            { name: "Will o' Wisp",rank: 15,pointNeeded: 15, type: "int", icon: "images/skills/shaman/wow.png",requires: { int: 469 }, levelRequired: 157,
            requiresSkill: {name: "Spear Guardian's Wrath", level: 3 },
            requiresByLevel: {
                2: { int: 474},
                3: { int: 479},
                4: { int: 484},
                5: { int: 489},
                6: { int: 494},
                7: { int: 499},
                8: { int: 504},
                9: { int: 509}
            },
            levelRequiredByLevel: {
                2: 159,
                3: 161,
                4: 163,
                5: 165,
                6: 167,
                7: 169,
                8: 171,
                9: 173
            }
            },
            { name: "Soul Burning Flame",rank: 16,pointNeeded: 16, type: "int", icon: "images/skills/shaman/sbf.png",requires: { int: 494 }, levelRequired: 167,
            requiresSkill: {name: "Spear Guardian's Wrath", level: 3 },
            requiresByLevel: {
                2: { int: 499},
                3: { int: 504},
                4: { int: 509},
                5: { int: 514},
                6: { int: 519},
                7: { int: 524},
                8: { int: 529},
                9: { int: 534}
            },
            levelRequiredByLevel: {
                2: 169,
                3: 171,
                4: 173,
                5: 175,
                6: 177,
                7: 179,
                8: 181,
                9: 183
            }
            },
            { name: "Divine Punishment",rank: 17,pointNeeded: 17, type: "int", icon: "images/skills/shaman/dp.png",requires: { int: 522 }, levelRequired: 177,
            requiresSkill: {name: "Soul Burning Flame", level: 3 },
            requiresByLevel: {
                2: { int: 527},
                3: { int: 532},
                4: { int: 537},
                5: { int: 542},
                6: { int: 547},
                7: { int: 552},
                8: { int: 557},
                9: { int: 562}
            },
            levelRequiredByLevel: {
                2: 179,
                3: 181,
                4: 183,
                5: 185,
                6: 187,
                7: 189,
                8: 191,
                9: 193
            }
            },
            { name: "Abyssal Scythe",rank: 18,pointNeeded: 18, type: "int", icon: "images/skills/shaman/as.png",requires: { int: 550 }, levelRequired: 187,
            requiresSkill: {name: "Divine Punishment", level: 3 },
            requiresByLevel: {
                2: { int: 555},
                3: { int: 560},
                4: { int: 565},
                5: { int: 570},
                6: { int: 575},
                7: { int: 580},
                8: { int: 585},
                9: { int: 590}
            },
            levelRequiredByLevel: {
                2: 189,
                3: 191,
                4: 193,
                5: 195,
                6: 197,
                7: 199,
                8: 201,
                9: 203
            }
            },
            { name: "Million Elements",rank: 21,pointNeeded: 21, type: "int", icon: "images/skills/shaman/mee.png",requires: { int: 577 }, levelRequired: 197,
            requiresSkill: {name: "Massive Haste", level: 4 },
            requiresByLevel: {
                2: { int: 582},
                3: { int: 588},
                4: { int: 593},
                5: { int: 599},
                6: { int: 604},
                7: { int: 610},
                8: { int: 615},
                9: { int: 621}
            },
            levelRequiredByLevel: {
                2: 199,
                3: 201,
                4: 203,
                5: 205,
                6: 207,
                7: 209,
                8: 211,
                9: 213
            }
            },
            { name: "Rampage",rank: 22,pointNeeded: 22, type: "int", icon: "images/skills/shaman/ramp.png",requires: { int: 586 }, levelRequired: 207,
            requiresSkill: {name: "Million Elements", level: 2 },
            requiresByLevel: {
                2: { int: 591},
                3: { int: 596},
                4: { int: 602},
                5: { int: 607},
                6: { int: 613},
                7: { int: 618},
                8: { int: 623},
                9: { int: 629}
            },
            levelRequiredByLevel: {
                2: 209,
                3: 211,
                4: 213,
                5: 215,
                6: 217,
                7: 219,
                8: 221,
                9: 223
            }
            },
            { name: "Spear Mastery",tag:"Passive",rank: 1,pointNeeded: 1, type: "etc",icon: "images/skills/swordsman/bm.png",levelRequired: 10,levelRequiredByLevel: {2:20,3:30,4:40,5:50,6:60,7:70,8:80,9:90,} },
        { name: "Titan Will",tag:"Passive", rank: 3,pointNeeded: 0, type: "etc",icon: "images/skills/archer/tw.png",levelRequired: 30,levelRequiredByLevel: {2:50,3:70,4:90,5:110,6:130,7:150,8:170,9:190,} },
        { name: "Titan Force",tag:"Passive", rank: 15,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-force.png",levelRequired: 191,levelRequiredByLevel: {2:192,3:193,4:194,5:195,6:196,7:197,8:198,9:199,} },
        { name: "Magnetic Shaft", rank: 15,pointNeeded: 1, type: "etc",icon: "images/skills/shaman/mag.png",levelRequired: 160,levelRequiredByLevel: {2:170,3:180,4:190} },
        { name: "Titan Fill",tag:"Passive", rank: 16,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-fill.png",levelRequired: 201,levelRequiredByLevel: {2:202,3:203,4:204,5:205,6:206,7:207,8:208,9:209,} },
        { name: "Aegis of Evasion", rank: 16,pointNeeded: 0, type: "etc" ,icon: "images/skills/archer/aegis.png",levelRequired: 175,levelRequiredByLevel: {2:187,3:199}},
        { name: "Titan's Mettle",tag:"Passive", rank: 22,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-mettle.png",levelRequired: 211,levelRequiredByLevel: {2:212,3:213,4:214,5:215,6:216,7:217,8:218,9:219,} },
        { name: "Titan's Arcanum",tag:"Passive", rank: 23,pointNeeded: 0, type: "etc",icon: "images/skills/archer/titan-arcanum.png",levelRequired: 221,levelRequiredByLevel: {2:222,3:223,4:224,5:225,6:226,7:227,8:228,9:229,} },
            
            
            
        
        
        
        
        ],

    gunner: [],

    extreme: [ 
             { name: "Side Kick", rank: 1, pointNeeded: 1, type: "brawler", icon: "images/skills/extreme/sk.png",requires: { pow: 15 , dex: 18 }, levelRequired: 7,
             requiresSkill: {name: "Heavy Punch", level: 2 },
             requiresByLevel: {
                2: { pow: 17, dex: 20 },
                3: { pow: 19, dex: 22 },
                4: { pow: 21, dex: 24}, }
             },
            { name: "Heavy Punch", rank: 1, pointNeeded: 1, type: "brawler", icon: "images/skills/extreme/hp.png",requires: { pow: 11 , dex: 14 }, levelRequired: 3,
            requiresByLevel: {
                2: { pow: 13, dex: 16 },
                3: { pow: 15, dex: 18 },
                4: { pow: 17, dex: 20}, }
             },
             { name: "Tokkan Punch", rank: 2, pointNeeded: 2, type: "brawler", icon: "images/skills/extreme/tk.png",requires: { pow: 25 , dex: 28 }, levelRequired: 17,
             requiresSkill: {name: "Heavy Punch", level: 4 },
             requiresByLevel: {
                2: { pow: 27, dex: 30 },
                3: { pow: 29, dex: 32 },
                4: { pow: 31, dex: 34}, }
             },
             { name: "Double Attack", rank: 3, pointNeeded: 3, type: "brawler", icon: "images/skills/extreme/da.png",requires: { pow: 31 , dex: 35 }, levelRequired: 27,
             requiresSkill: {name: "Heavy Punch", level: 4 },
             requiresByLevel: {
                2: { pow: 35, dex: 39 },
                3: { pow: 37, dex: 41 },
                4: { pow: 41, dex: 45}, }
             },
            { name: "Fist Mastery", tag:"Passive", rank: 3, pointNeeded: 1, type: "brawler", icon: "images/skills/extreme/fm.png", levelRequired: 30, },
            { name: "Titan Will",tag:"Passive", rank: 3,pointNeeded: 0, type: "brawler",icon: "images/skills/extreme/tw.png",levelRequired: 30,levelRequiredByLevel: {2:50,3:70,4:90,5:110,6:130,7:150,8:170,9:190,} }, 
            

                
                
                
                
                
      

    ]

};


/* Every skill caps at level 9 — Active or Passive. The "Rank.N"
   in a skill's name (e.g. "[Kawasu]Rank.3Passive") is NOT a level
   cap — it's the skill-point cost to learn it, same as
   pointNeeded below. */

const SKILL_MAX_LEVEL = 9;

function getSkillMaxLevel(skill) {

    return skill.maxLevel || SKILL_MAX_LEVEL;

}


/* Every skill is "learnable" now — including Rank.0 skills like
   Titan Will / Titan Force / Titan Fill / Aegis of Evasion /
   Titan's Mettle / Titan's Arcanum. They show the same Learn
   button, Level, and requirement lines as any other skill and can
   be leveled up 1-9 just like the rest — the only difference is
   their cost is 0, so learning or leveling them never deducts (or
   refunds) Skill Points. The first point LEARNS a skill for a
   lump-sum cost (= pointNeeded, i.e. its Rank — Rank.3 costs 3
   skill points to learn, Rank.0 costs 0), and every point after
   that costs a flat 1 per level up to level 9 (also 0 for a
   Rank.0 skill, since getSkillCost only returns non-zero via
   pointNeeded on the very first point). */

function isSkillLearnable(skill) {

    return true;

}

function getSkillCost(skill, fromLevel) {

    if (fromLevel <= 0) {

        return skill.pointNeeded || 0;

    }

    return skill.pointNeeded === 0 ? 0 : 1;

}


/* Total points actually spent on a skill at its current invested
   level — used for refunds (single reset, cascade reset, reset
   whole class). Every normal skill pays pointNeeded to learn plus
   1 per level after that, so total = pointNeeded + (invested - 1).
   Resurrection is the one exception: it goes straight to Master
   for a single flat pointNeeded payment (see the Learn handler),
   so its total cost is always just pointNeeded, no matter the
   invested level — refunding the normal formula for it would hand
   back points that were never spent. */

function getSkillTotalCost(skill, invested) {

    if (invested <= 0) {

        return 0;

    }

    if (skill.name === "Resurrection") {

        return skill.pointNeeded || 0;

    }

    return getSkillCost(skill, 0) + Math.max(0, invested - 1);

}


/* =========================================
   SKILL REQUIREMENTS

   Learning a skill checks four things, matching the in-game
   window: Character Level, the matching POW/DEX/INT stat, a
   prerequisite skill + its level, and enough Skill Points. The
   first three gate the Learn button itself (it shows "Locked");
   Skill Points are checked separately at the moment of learning
   (see the click handler below), same as before.

   A skill can set any combination of:
     requires:      { dex: 10 }                — stat gate
     levelRequired: 20                         — character level gate
     requiresSkill: { name: "Arrow Assault", level: 1 }  — prerequisite

   With no explicit `requires`, the stat gate defaults to needing
   at least `rank` points in the stat matching the skill's own
   `type` (a Rank.7 Dex skill needs 7 DEX). levelRequired and
   requiresSkill have no default — only skills that set them are
   gated by them. */

function getSkillRequirements(skill) {

    if (skill.requires) {

        return skill.requires;

    }

    if (skill.type === "pow" || skill.type === "dex" || skill.type === "int") {

        const req = {};

        req[skill.type] = skill.rank;

        return req;

    }

    return {};

}


/* ---- Character Level ---- */

function getCharLevelInput() {

    return document.getElementById("charLevel");

}

function getCharLevel() {

    const input = getCharLevelInput();

    return input ? (parseInt(input.value, 10) || 0) : 0;

}


/* ---- How many points are invested in a named skill within a
        given class — used to check prerequisite skills, which
        live by name rather than by the caller's skillKey ---- */

function findSkillIndexByName(classKey, name) {

    const list = skillCategories[classKey] || [];

    for (let i = 0; i < list.length; i++) {

        if (list[i].name === name) {

            return i;

        }

    }

    return -1;

}

function getSkillLevelInvested(classKey, name) {

    const index = findSkillIndexByName(classKey, name);

    if (index === -1) {

        return 0;

    }

    return skillPointsInvested[classKey + "-" + index] || 0;

}


/* ---- Every requirement a skill has, met or not — used to
        render the "Requires ..." sub-lines and tooltip rows ---- */

function getSkillRequirementDescriptors(skill) {

    const list = [];

    const statRequirements =
        getSkillRequirements(skill);

    for (const statKey in statRequirements) {

        list.push({ kind: "stat", stat: statKey, need: statRequirements[statKey] });

    }

    if (skill.levelRequired) {

        list.push({ kind: "level", need: skill.levelRequired });

    }

    if (skill.requiresSkill && skill.requiresSkill.name) {

        list.push({
            kind: "skill",
            name: skill.requiresSkill.name,
            need: skill.requiresSkill.level || 1
        });

    }

    return list;

}


/* ---- Is a single requirement descriptor currently unmet? ---- */

function isDescriptorUnmet(desc) {

    if (desc.kind === "stat") {

        return (getBaseValue(desc.stat) || 0) < desc.need;

    }

    if (desc.kind === "level") {

        return getCharLevel() < desc.need;

    }

    /* desc.kind === "skill" */

    return getSkillLevelInvested(activeSkillClass, desc.name) < desc.need;

}


/* ---- Human-readable label for a requirement descriptor ---- */

function formatRequirementLabel(desc) {

    if (desc.kind === "stat") {

        return "Requires " + desc.stat.toUpperCase() + "." + desc.need;

    }

    if (desc.kind === "level") {

        return "Requires Level." + desc.need;

    }

    /* desc.kind === "skill" */

    return "Requires [" + desc.name + "] Lv." + desc.need;

}


/* Returns [] when every requirement is met, otherwise one entry
   per requirement still falling short — used to lock the Learn
   button and explain why in the sub-lines / tooltip. */

   /* =========================================
   SKILL PREREQUISITE HELPERS
========================================= */

function getSkillLevelByName(classKey, skillName) {

    const skills =
        skillCategories[classKey] || [];

    for (let i = 0; i < skills.length; i++) {

        if (skills[i].name === skillName) {

            const skillKey =
                classKey + "-" + i;

            return skillPointsInvested[skillKey] || 0;
        }
    }

    return 0;
}


function getSkillPrerequisiteForLevel(skill, targetLevel) {

    if (!skill.requiresSkill) {
        return null;
    }

    let requiredLevel =
        skill.requiresSkill.level || 1;

    if (
        skill.requiresSkillByLevel &&
        skill.requiresSkillByLevel[targetLevel] !== undefined
    ) {
        requiredLevel =
            skill.requiresSkillByLevel[targetLevel];
    }

    return {
        name: skill.requiresSkill.name,
        level: requiredLevel
    };
}


function getUnmetSkillPrerequisite(skill, targetLevel) {

    const prerequisite =
        getSkillPrerequisiteForLevel(
            skill,
            targetLevel
        );

    if (!prerequisite) {
        return null;
    }

    const have =
        getSkillLevelByName(
            activeSkillClass,
            prerequisite.name
        );

    if (have < prerequisite.level) {

        return {
            name: prerequisite.name,
            need: prerequisite.level,
            have: have
        };
    }

    return null;
}


/* ---- STAT gate for a specific level-up, same idea as
        requiresSkillByLevel above but for POW/DEX/INT ----

   Most skills have no extra stat gate beyond the one that unlocks
   them (skill.requires, checked only at Learn). Some, like Armor
   Piercing Shot going into Lv.3, additionally need a stat total by
   that point (e.g. Pow.120). Set it per-level with:

     requiresByLevel: { 3: { pow: 120 } }

   targetLevel with no entry in requiresByLevel returns null — no
   extra stat gate on that level-up. */

function getStatPrerequisiteForLevel(skill, targetLevel) {

    if (
        skill.requiresByLevel &&
        skill.requiresByLevel[targetLevel]
    ) {
        return skill.requiresByLevel[targetLevel];
    }

    return null;
}


function getUnmetStatPrerequisite(skill, targetLevel) {

    const statsNeeded =
        getStatPrerequisiteForLevel(skill, targetLevel);

    if (!statsNeeded) {
        return null;
    }

    const unmet = [];

    for (const statKey in statsNeeded) {

        const need = statsNeeded[statKey];

        const have = getBaseValue(statKey) || 0;

        if (have < need) {

            unmet.push({ stat: statKey, need: need, have: have });

        }

    }

    return unmet.length > 0 ? unmet : null;
}


/* ---- CHARACTER LEVEL gate for a specific level-up, same idea as
        requiresByLevel above but for the Character Level field ----

   skill.levelRequired only gates learning (Lv.0 -> Lv.1). Some
   skills also need a higher character level for later points (e.g.
   Enhanced Force Shot Lv.2 needing Character Level 79). Set it
   per-level with:

     levelRequiredByLevel: { 2: 79 }

   targetLevel with no entry in levelRequiredByLevel returns null —
   no extra character-level gate on that level-up. */

function getLevelPrerequisiteForLevel(skill, targetLevel) {

    if (
        skill.levelRequiredByLevel &&
        skill.levelRequiredByLevel[targetLevel] !== undefined
    ) {
        return skill.levelRequiredByLevel[targetLevel];
    }

    return null;
}


function getUnmetLevelPrerequisite(skill, targetLevel) {

    const need =
        getLevelPrerequisiteForLevel(skill, targetLevel);

    if (need === null) {
        return null;
    }

    const have =
        getCharLevel();

    if (have < need) {

        return { need: need, have: have };

    }

    return null;
}
function getUnmetSkillRequirements(skill) {

    return getSkillRequirementDescriptors(skill).filter(isDescriptorUnmet);

}


function meetsSkillRequirements(skill) {

    return getUnmetSkillRequirements(skill).length === 0;

}


/* =========================================
   SKILL ICON (locked / learned states)

   Two generic placeholder images stand in for every skill's icon
   until real artwork is dropped in:
     - not learned  -> images/skills/skill-icon-locked.png
     - learned      -> images/skills/skill-icon-learned.png
   A skill can set its own `icon: "images/skills/arrow-assault.png"`
   to use real artwork instead — that path is used for BOTH states
   (learned rows just get the "learned" ring/glow from the
   .skill-icon-learned class already in style.css). Drop your own
   files at those paths, or add `icon` to any skill entry, and this
   function picks them up automatically — nothing else to change. */

const SKILL_ICON_LOCKED = "images/skills/skill-icon-locked.png";
const SKILL_ICON_LEARNED = "images/skills/skill-icon-learned.png";

function buildSkillIcon(skill, learned) {

    const icon =
        document.createElement("div");

    icon.className =
        "skill-icon" + (learned ? " skill-icon-learned" : " skill-icon-locked");

    const img =
        document.createElement("img");

    img.src =
        skill.icon || (learned ? SKILL_ICON_LEARNED : SKILL_ICON_LOCKED);

    img.alt =
        skill.name;

    /* if the placeholder file isn't there yet, fail quietly rather
       than showing a broken-image icon */

    img.addEventListener("error", function() {

        img.style.display = "none";

    });

    icon.appendChild(img);

    return icon;

}


/* How many points the user has put into each skill so far,
   keyed by "class-index" (e.g. "dex-0"). Kept outside the DOM
   so it survives switching tabs. A skill counts as "learned"
   the moment it has 1+ points in it — there's no separate
   on/off flag to fall out of sync with the stepper. */

const skillPointsInvested = {};

/* Snapshot of skillPointsInvested taken at the moment of the last
   "Save Build". The Skills tab (LEARN/LOCKED tree) always reads
   straight off skillPointsInvested and is never touched by saving,
   so it keeps showing the full learned picture. The Skill Learned
   panel, on the other hand, only lists a skill once its live level
   climbs ABOVE this baseline — so right after a save, every skill
   is "caught up" to its baseline and the panel goes back to "No
   skills learned yet.", ready to track whatever gets learned next.
   Keyed the same way as skillPointsInvested ("class-index"). Only
   touched by freezeSkillLearnedBaseline() (on Save Build). */

const skillLearnedBaseline = {};

let activeSkillClass = null;

/* EPISODE FILTER — restricts the Skills window to skills whose
   levelRequired falls inside [min, max] for the chosen episode,
   on top of whichever class/type tab is currently showing.
   Episode 2 is filled in below (Lv.7–127). To add another
   episode, just fill in its min/max here — everything else
   (the button, the filtering, the label) already works off
   this table, no other code needs to change.

   Optional `excludeActiveRange: { min, max }` additionally hides
   ACTIVE skills (anything without tag:"Passive") whose
   levelRequired falls in that inner range, while still showing
   passive skills in that same range. Applies to every class. */

const EPISODE_LEVEL_RANGES = {
    ep2:   { min: 7,    max: 127 },
    ep3:   { min: 7, max: 127 },
    ep4:   { min: 7, max: 147 },
    ep5:   { min: 7, max: 157 },
    ep6:   { min: 7,    max: 210, excludeActiveRange: { min: 177, max: 207 } },
    ep6_1: { min: 7,    max: 210, excludeActiveRange: { min: 198, max: 207 } },
    ep7:   { min: 7, max: 207 }
};

/* Display label for each episode key — only needed here because
   "ep6_1" can't be turned into "Episode 6.1" by simple text
   substitution the way "ep2" -> "Episode 2" can. */

const EPISODE_LABELS = {
    ep2: "Episode 2",
    ep3: "Episode 3",
    ep4: "Episode 4",
    ep5: "Episode 5",
    ep6: "Episode 6",
    ep6_1: "Episode 6.1",
    ep7: "Episode 7"
};

let activeEpisode = null;

/* The 4 inner window tabs classify skills by stat type (Dex/Pow/
   Int/Etc), independent of which job's list is currently open. */

let activeSkillType = "dex";

const SKILL_TYPE_TABS_DEFAULT = [
    { type: "dex", label: "DEX" },
    { type: "pow", label: "POW" },
    { type: "int", label: "INT" },
    { type: "etc", label: "ETC" }
];

/* Extreme's skills aren't grouped by stat type — they're grouped by
   which base class (Brawler/Swordsman/Archer/Shaman) the skill
   originated from, so its 4 tabs swap to those instead. Give
   Extreme skills a `type` of "brawler"/"swordsman"/"archer"/"shaman"
   in skillCategories.extreme and this filtering just works, same as
   dex/pow/int/etc does for every other class. */

const SKILL_TYPE_TABS_EXTREME = [
    { type: "brawler", label: "BRAWLER" },
    { type: "swordsman", label: "SWORDSMAN" },
    { type: "archer", label: "ARCHER" },
    { type: "shaman", label: "SHAMAN" }
];

/* Shaman has no DEX-type skills — in-game that tab/stat is called
   ATTACK for Shaman specifically. Every other class keeps the
   normal DEX label. Used both for the tab button text and for the
   "No ___ skills for this class" empty message. */

function getSkillTypeLabel(type) {

    if (activeSkillClass === "extreme") {

        const match = SKILL_TYPE_TABS_EXTREME.find(function(t) {

            return t.type === type;

        });

        if (match) {

            return match.label;

        }

    }

    if (type === "dex" && activeSkillClass === "shaman") {

        return "ATTACK";

    }

    return type.toUpperCase();

}


function getSkillsWindowClassEl() {

    return document.getElementById("skillsWindowClass");

}


function getSkillsWindowEl() {

    return document.getElementById("skillsWindow");

}

function getSkillsListEl() {

    return document.getElementById("skillsWindowList");

}


/* ---- Skill Points pool (mirrors the Total Point pool) ---- */

function getSkillPointsInput() {

    return document.getElementById("skillPoints");

}

function getSkillPointsValue() {

    const input = getSkillPointsInput();

    return input ? (parseInt(input.value, 10) || 0) : 0;

}

function setSkillPointsValue(value) {

    const input = getSkillPointsInput();

    if (input) {

        input.value = value;

    }

}

function adjustSkillPoints(delta) {

    setSkillPointsValue(getSkillPointsValue() + delta);

}


/* Briefly flash the Skill Points number red when a level-up is
   blocked by not having enough points — same idea as the game
   just refusing the click, but with a little visual feedback. */

function flashInsufficientSkillPoints() {

    const input = getSkillPointsInput();

    if (!input) {

        return;

    }

    input.classList.remove("skill-points-flash");

    /* force reflow so the animation can re-trigger on repeat clicks */

    void input.offsetWidth;

    input.classList.add("skill-points-flash");

}


/* Same idea, but for a skill row whose stat requirement isn't
   met yet — flashes the row border and the Learn button red so
   clicking a locked skill gives clear feedback instead of doing
   nothing silently. */

function flashSkillRowLocked(row, button) {

    if (row) {

        row.classList.remove("skill-row-locked-flash");

        void row.offsetWidth;

        row.classList.add("skill-row-locked-flash");

    }

    if (button) {

        button.classList.remove("skill-learn-btn-flash");

        void button.offsetWidth;

        button.classList.add("skill-learn-btn-flash");

    }

}


/* =========================================
   RESET SKILL

   Un-learns every skill in one class and refunds every point
   spent (the lump-sum Rank cost for the first point, +1 for each
   level after that) back into the Skill Points pool. Only touches
   the class passed in — switching to another class and hitting
   Reset again resets that one independently.
========================================= */

/* ---- Every skill (recursively) that depends on a given skill,
        directly or through a chain, and currently has points spent
        in it — e.g. resetting Force Shot also has to take Bow
        Strike, Tri-Force, and Bow Mastery with it, since all three
        list Force Shot in requiresSkill. `seen` guards against ever
        double-counting/looping if two skills somehow require each
        other. ---- */

function getCascadeResetTargets(classKey, skillName, seen) {

    seen = seen || {};

    const list =
        skillCategories[classKey] || [];

    const targets = [];

    list.forEach(function(dependent, index) {

        if (!dependent.requiresSkill || dependent.requiresSkill.name !== skillName) {

            return;

        }

        const depKey =
            classKey + "-" + index;

        if (seen[depKey]) {

            return;

        }

        const depInvested =
            skillPointsInvested[depKey] || 0;

        if (depInvested <= 0) {

            return;

        }

        seen[depKey] = true;

        targets.push({ skillKey: depKey, skill: dependent });

        /* anything that in turn requires THIS dependent cascades too */

        targets.push.apply(
            targets,
            getCascadeResetTargets(classKey, dependent.name, seen)
        );

    });

    return targets;

}


/* ---- Confirm message, naming the cascade up front so a reset
        never surprises the player with skills vanishing they
        didn't ask to touch ---- */

function buildResetConfirmMessage(classKey, skill) {

    const cascade =
        getCascadeResetTargets(classKey, skill.name);

    if (cascade.length === 0) {

        return "Reset '" + skill.name + "'?";

    }

    const names =
        cascade.map(function(entry) {

            return entry.skill.name;

        }).join(", ");

    return "Reset '" + skill.name + "'? This also resets: " + names;

}


/* ---- Reset ONE skill (any single row's own reset button) ----

   Same refund math as resetSkillsForClass (full Rank cost for the
   first point + 1 per level after that), but scoped to a single
   skillKey so a player can back out of one skill — mastered or
   mid-leveled — without touching anything else they've learned.
   Anything that requires THIS skill (directly or through a chain)
   is reset and refunded first, so nothing is left pointing at a
   prerequisite that no longer exists. */

function resetSingleSkill(skillKey, skill) {

    const invested =
        skillPointsInvested[skillKey] || 0;

    if (invested <= 0) {

        return;

    }

    const classKey =
        skillKey.split("-")[0];

    getCascadeResetTargets(classKey, skill.name).forEach(function(entry) {

        const depInvested =
            skillPointsInvested[entry.skillKey] || 0;

        if (depInvested <= 0) {

            return;

        }

        const depRefund =
            getSkillTotalCost(entry.skill, depInvested);

        skillPointsInvested[entry.skillKey] = 0;

        adjustSkillPoints(depRefund);

    });

    const refund =
        getSkillTotalCost(skill, invested);

    skillPointsInvested[skillKey] = 0;

    adjustSkillPoints(refund);

    renderSkillsList();

    renderSkillLearnedPanel();

}


function resetSkillsForClass(classKey) {

    let refund = 0;

    const list =
        skillCategories[classKey] || [];

    list.forEach(function(skill, index) {

        const key =
            classKey + "-" + index;

        const invested =
            skillPointsInvested[key] || 0;

        if (invested > 0) {

            refund +=
                getSkillTotalCost(skill, invested);

            skillPointsInvested[key] = 0;

        }

    });

    adjustSkillPoints(refund);

    renderSkillsList();

}


/* ---- Snapshot every skill's currently-invested level as the new
        skillLearnedBaseline, WITHOUT touching skillPointsInvested.
        Used after "Save Build" so the Skill Learned panel starts
        clean for the next build while the Skills tab (LEARN/LOCKED
        tree, right side) is left exactly as the player set it —
        nothing there gets reset. Doesn't refund anything either:
        points spent learning skills for the build that was just
        saved stay deducted (they were "used" by that build), so
        the pool only ever shows what's genuinely left to spend. ---- */

function freezeSkillLearnedBaseline() {

    Object.keys(skillCategories).forEach(function(classKey) {

        (skillCategories[classKey] || []).forEach(function(skill, index) {

            const key = classKey + "-" + index;

            skillLearnedBaseline[key] = skillPointsInvested[key] || 0;

        });

    });

    renderSkillLearnedPanel();

}


/* ---- Deselect every selected Pandaya item, wipe the Selected
        Items panel and clear every Inventory HUD box back to its
        plain label. Used after "Save Build" the same way
        freezeSkillLearnedBaseline above clears the Skill Learned
        panel — the Inventory HUD/Selected Items have no separate
        "tab" to preserve, so they reset outright. ---- */

function resetAllSelectedItems() {

    pandayaCardRegistry.forEach(function(entry) {

        entry.card.classList.remove("selected");

    });

    updatePandayaBonuses();

    renderSelectedItems();

    updateInventorySlots();

}


/* ---- Whether a skill counts as Mastered right now ---- */

function isSkillMastered(skill, skillKey) {

    if (skill.master) {

        return true;

    }

    if (!isSkillLearnable(skill)) {

        return false;

    }

    return (skillPointsInvested[skillKey] || 0) >= getSkillMaxLevel(skill);

}


/* ---- Build the sub-text lines for one skill row ----

   Not learnable (innate passive):  nothing — the [Name]Rank.XPassive
                                     header line says it all.
   Not learned yet (0 points):      "Point Needed.<unlock cost>"
   Partway leveled:                 "Level.<n>" + "Point Needed.<next cost>"
   Maxed out:                       "Master"
*/

function buildSkillSubLines(skill, skillKey) {

    const lines = [];

    if (!isSkillLearnable(skill)) {

        return lines;

    }

    const invested = skillPointsInvested[skillKey] || 0;

    const mastered = isSkillMastered(skill, skillKey);

    if (mastered) {

        lines.push({ text: "Master", master: true });

        return lines;

    }

    if (invested > 0) {

        lines.push({ text: "Level." + invested, master: false });

        /* Already learned, not maxed — show the prerequisite gate for
           the NEXT point specifically (may differ level-to-level via
           requiresSkillByLevel, e.g. Lv.6 suddenly needing Force Shot
           Lv.5 instead of the Lv.4 that unlocked Bow Mastery itself).
           This is what actually blocks the ▲ stepper below. */

        const nextLevel = invested + 1;

        const prerequisite =
            getSkillPrerequisiteForLevel(skill, nextLevel);

        if (prerequisite) {

            const have =
                getSkillLevelByName(activeSkillClass, prerequisite.name);

            lines.push({
                text: "Requires [" + prerequisite.name + "] Lv." + prerequisite.level,
                master: false,
                locked: have < prerequisite.level
            });

        }

        /* Extra stat gate for THIS level-up specifically (e.g. Armor
           Piercing Shot needing Pow.120 to reach Lv.3) — see
           requiresByLevel / getStatPrerequisiteForLevel. */

        const statsNeeded =
            getStatPrerequisiteForLevel(skill, nextLevel);

        if (statsNeeded) {

            for (const statKey in statsNeeded) {

                const need = statsNeeded[statKey];

                const have = getBaseValue(statKey) || 0;

                lines.push({
                    text: "Requires " + statKey.toUpperCase() + "." + need,
                    master: false,
                    locked: have < need
                });

            }

        }

        /* Extra character-level gate for THIS level-up specifically
           (e.g. Enhanced Force Shot needing Character Level 79 to
           reach Lv.2) — see levelRequiredByLevel /
           getLevelPrerequisiteForLevel. */

        const levelNeeded =
            getLevelPrerequisiteForLevel(skill, nextLevel);

        if (levelNeeded !== null) {

            lines.push({
                text: "Requires Level." + levelNeeded,
                master: false,
                locked: getCharLevel() < levelNeeded
            });

        }

    }

    /* Not learned yet — show every gate (level, stat, prerequisite
       skill) so the player sees why Learn is locked before they
       even try clicking it */

    if (invested <= 0) {

        getSkillRequirementDescriptors(skill).forEach(function(desc) {

            lines.push({
                text: formatRequirementLabel(desc),
                master: false,
                locked: isDescriptorUnmet(desc)
            });

        });

    }

    lines.push({ text: "Point Needed." + getSkillCost(skill, invested), master: false });

    return lines;

}


/* ---- Item Information tooltip (hover on desktop, tap on touch) ----

   Mirrors the in-game "Item Information" popup: name/type up top
   in green, then a short "what happens next" section. We only show
   facts this calculator actually knows (level, rank, cost) rather
   than inventing combat numbers (range/delay/HP) the build data
   doesn't have. */

function getSkillTooltipEl() {

    let tooltip =
        document.getElementById("skillTooltip");

    if (tooltip) {

        return tooltip;

    }

    tooltip =
        document.createElement("div");

    tooltip.id =
        "skillTooltip";

    tooltip.className =
        "skill-tooltip";

    document.body.appendChild(tooltip);

    return tooltip;

}


function fillSkillTooltip(tooltip, skill, skillKey) {

    tooltip.innerHTML = "";

    const learnable =
        isSkillLearnable(skill);

    const invested =
        skillPointsInvested[skillKey] || 0;

    const mastered =
        isSkillMastered(skill, skillKey);

    function addLine(text, cls) {

        const line =
            document.createElement("div");

        line.className =
            "skill-tooltip-line" + (cls ? " " + cls : "");

        line.textContent =
            text;

        tooltip.appendChild(line);

    }

    addLine("skill Information", "skill-tooltip-heading");

    addLine(
        "Name:" + skill.name + (skill.tag ? "(" + skill.tag + ")" : ""),
        "skill-tooltip-stat"
    );

    addLine(
        "Type:" + (skill.tag === "Passive" ? "Passive" : "Active"),
        "skill-tooltip-stat"
    );

    addLine(
        "Class:" + (activeSkillClass ? activeSkillClass.charAt(0).toUpperCase() + activeSkillClass.slice(1) : ""),
        "skill-tooltip-stat"
    );

    if (!learnable) {

        addLine("Innate — always active, no points needed.", "skill-tooltip-note");

    } else {

        addLine(
            "Level:" + (invested > 0 ? invested : "Not learned"),
            "skill-tooltip-stat"
        );

        if (mastered) {

            addLine("Max Level (Master) Skill", "skill-tooltip-master");

        } else if (invested <= 0) {

            const cost = getSkillCost(skill, 0);

            addLine("Learn Requirement", "skill-tooltip-heading-sm");

            getSkillRequirementDescriptors(skill).forEach(function(desc) {

                const unmetFlag =
                    isDescriptorUnmet(desc);

                let text;

                if (desc.kind === "stat") {

                    text = desc.stat.toUpperCase() + ":" + desc.need +
                        " (have " + getBaseValue(desc.stat) + ")";

                } else if (desc.kind === "level") {

                    text = "Level:" + desc.need + " (have " + getCharLevel() + ")";

                } else {

                    text = "[" + desc.name + "]:Lv." + desc.need +
                        " (have " + getSkillLevelInvested(activeSkillClass, desc.name) + ")";

                }

                addLine(
                    text,
                    "skill-tooltip-stat" + (unmetFlag ? " skill-tooltip-locked" : "")
                );

            });

            addLine(
                "Skill Point:" + cost + " (have " + getSkillPointsValue() + ")",
                "skill-tooltip-note"
            );

        } else {

            const nextLevel = invested + 1;

            const cost = getSkillCost(skill, invested);

            addLine("Next Level Requirement", "skill-tooltip-heading-sm");

            addLine("Next Level:" + nextLevel, "skill-tooltip-next");

            /* Prerequisite skill gate for THIS level-up specifically —
               e.g. Bow Mastery going from Lv.5 to Lv.6 needing Force
               Shot at Lv.5. Pulled from requiresSkill (flat, every
               level) or requiresSkillByLevel[nextLevel] (a bump that
               only kicks in at a specific level) — see
               getSkillPrerequisiteForLevel. Skills with neither set
               have no prerequisite gate on level-up, so nothing shows. */

            const prerequisite =
                getSkillPrerequisiteForLevel(skill, nextLevel);

            if (prerequisite) {

                const have =
                    getSkillLevelByName(activeSkillClass, prerequisite.name);

                const unmetFlag =
                    have < prerequisite.level;

                addLine(
                    "Skill " + prerequisite.name,
                    "skill-tooltip-stat" + (unmetFlag ? " skill-tooltip-locked" : "")
                );

                addLine(
                    "Skill Level:" + prerequisite.level + " (have " + have + ")",
                    "skill-tooltip-stat" + (unmetFlag ? " skill-tooltip-locked" : "")
                );

            }

            /* Extra stat gate for THIS level-up specifically — e.g.
               Armor Piercing Shot needing Pow.120 to reach Lv.3.
               Pulled from requiresByLevel[nextLevel]; skills with
               nothing set there show no extra stat row here. */

            const statsNeeded =
                getStatPrerequisiteForLevel(skill, nextLevel);

            if (statsNeeded) {

                for (const statKey in statsNeeded) {

                    const need = statsNeeded[statKey];

                    const have = getBaseValue(statKey) || 0;

                    addLine(
                        statKey.toUpperCase() + ":" + need + " (have " + have + ")",
                        "skill-tooltip-stat" + (have < need ? " skill-tooltip-locked" : "")
                    );

                }

            }

            /* Extra character-level gate for THIS level-up
               specifically — e.g. Enhanced Force Shot needing
               Character Level 79 to reach Lv.2. Pulled from
               levelRequiredByLevel[nextLevel]; skills with nothing
               set there show no extra row here. */

            const levelNeeded =
                getLevelPrerequisiteForLevel(skill, nextLevel);

            if (levelNeeded !== null) {

                const haveLevel = getCharLevel();

                addLine(
                    "Character Level:" + levelNeeded + " (have " + haveLevel + ")",
                    "skill-tooltip-stat" + (haveLevel < levelNeeded ? " skill-tooltip-locked" : "")
                );

            }

            addLine(
                "Skill Point:" + cost + " (have " + getSkillPointsValue() + ")",
                "skill-tooltip-note"
            );

        }

    }

}


/* Position the tooltip next to the row it belongs to, flipping
   to the left / clamping vertically when it would run off the
   edge of the viewport (the skills window can sit close to the
   right edge on narrow screens). */

function positionSkillTooltip(tooltip, row) {

    const rect =
        row.getBoundingClientRect();

    /* let it lay out at natural size off-screen first, so we can
       measure it before placing it */

    tooltip.style.left = "-9999px";
    tooltip.style.top = "-9999px";
    tooltip.classList.add("open");

    const tw = tooltip.offsetWidth;
    const th = tooltip.offsetHeight;

    let left = rect.right + 8;

    if (left + tw > window.innerWidth - 8) {

        left = rect.left - tw - 8;

    }

    if (left < 8) {

        left = Math.max(8, Math.min(rect.left, window.innerWidth - tw - 8));

    }

    let top = rect.top;

    if (top + th > window.innerHeight - 8) {

        top = window.innerHeight - th - 8;

    }

    if (top < 8) {

        top = 8;

    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";

}


let skillTooltipOpenKey = null;

function showSkillTooltip(row, skill, skillKey) {

    const tooltip =
        getSkillTooltipEl();

    fillSkillTooltip(tooltip, skill, skillKey);

    positionSkillTooltip(tooltip, row);

    skillTooltipOpenKey = skillKey;

}

function hideSkillTooltip() {

    const tooltip =
        document.getElementById("skillTooltip");

    if (tooltip) {

        tooltip.classList.remove("open");

    }

    skillTooltipOpenKey = null;

    document.querySelectorAll(".skill-row.tooltip-open").forEach(function(row) {

        row.classList.remove("tooltip-open");

    });

}

window.addEventListener("scroll", hideSkillTooltip, true);
window.addEventListener("resize", hideSkillTooltip);

/* Close the tooltip whenever the user taps/clicks anywhere
   outside a skill row or the tooltip itself — registered once
   here, not per-row, so it doesn't pile up across re-renders */

document.addEventListener("click", function(event) {

    if (!event.target.closest(".skill-row") && !event.target.closest(".skill-tooltip")) {

        hideSkillTooltip();

    }

});


/* ---- Confirmation prompt for learning a new skill ----

   Matches the in-game "Learn <Skill>?" Yes/No confirm that pops up
   the moment a skill's first point is spent — the full Rank cost
   is deducted as a lump sum right after the user confirms. */

function getSkillConfirmOverlayEl() {

    let overlay =
        document.getElementById("skillConfirmOverlay");

    if (overlay) {

        return overlay;

    }

    overlay =
        document.createElement("div");

    overlay.id =
        "skillConfirmOverlay";

    overlay.className =
        "skill-confirm-overlay";

    const box =
        document.createElement("div");

    box.className =
        "skill-confirm-box";

    const message =
        document.createElement("div");

    message.className =
        "skill-confirm-message";

    message.id =
        "skillConfirmMessage";

    const buttons =
        document.createElement("div");

    buttons.className =
        "skill-confirm-buttons";

    const yesBtn =
        document.createElement("button");

    yesBtn.type = "button";
    yesBtn.className = "skill-confirm-btn skill-confirm-yes";
    yesBtn.id = "skillConfirmYes";
    yesBtn.textContent = "Yes";

    const noBtn =
        document.createElement("button");

    noBtn.type = "button";
    noBtn.className = "skill-confirm-btn skill-confirm-no";
    noBtn.textContent = "No";

    noBtn.addEventListener("click", hideSkillConfirm);

    buttons.appendChild(yesBtn);

    buttons.appendChild(noBtn);

    box.appendChild(message);

    box.appendChild(buttons);

    overlay.appendChild(box);

    overlay.addEventListener("click", function(event) {

        if (event.target === overlay) {

            hideSkillConfirm();

        }

    });

    document.body.appendChild(overlay);

    return overlay;

}

function hideSkillConfirm() {

    const overlay =
        document.getElementById("skillConfirmOverlay");

    if (overlay) {

        overlay.classList.remove("open");

    }

}

/* ENTER confirms (Yes), ESC cancels (No) — mirrors the in-game
   confirm popup's keyboard shortcuts. Only acts while the dialog
   is actually open, so it never interferes with typing elsewhere
   on the page. */

document.addEventListener("keydown", function(event) {

    const overlay =
        document.getElementById("skillConfirmOverlay");

    if (!overlay || !overlay.classList.contains("open")) {

        return;

    }

    if (event.key === "Enter") {

        event.preventDefault();

        const yesBtn =
            document.getElementById("skillConfirmYes");

        if (yesBtn) {

            yesBtn.click();

        }

    } else if (event.key === "Escape") {

        event.preventDefault();

        hideSkillConfirm();

    }

});

function showConfirmDialog(message, onYes) {

    const overlay =
        getSkillConfirmOverlayEl();

    const messageEl =
        document.getElementById("skillConfirmMessage");

    if (messageEl) {

        messageEl.textContent =
            message;

    }

    const yesBtn =
        document.getElementById("skillConfirmYes");

    if (yesBtn) {

        const freshYes =
            yesBtn.cloneNode(true);

        yesBtn.parentNode.replaceChild(freshYes, yesBtn);

        freshYes.addEventListener("click", function() {

            hideSkillConfirm();

            onYes();

        });

    }

    overlay.classList.add("open");

}

function showSkillConfirm(skillName, onYes) {

    showConfirmDialog("Learn '" + skillName + "'?", onYes);

}


/* ---- Build one skill row ---- */

function createSkillRow(skill, skillKey) {

    const learnable =
        isSkillLearnable(skill);

    const invested =
        skillPointsInvested[skillKey] || 0;

    const mastered =
        isSkillMastered(skill, skillKey);

    const row =
        document.createElement("div");

    row.className =
        "skill-row" + (invested > 0 ? " learned" : "");


    /* Skill icon — swaps between the locked/learned images based
       on whether this skill has any points invested yet */

    const icon =
        buildSkillIcon(skill, invested > 0);

    row.appendChild(icon);


    /* Name + rank + tag glued on, e.g. "[Kawasu]Rank.3Passive" —
       matches how the in-game skill window renders it */

    const info =
        document.createElement("div");

    info.className =
        "skill-info";

    const name =
        document.createElement("div");

    name.className =
        "skill-name";

    name.textContent =
        "[" + skill.name + "]Rank." + skill.rank + (skill.tag || "");

    info.appendChild(name);

    buildSkillSubLines(skill, skillKey).forEach(function(line) {

        const sub =
            document.createElement("div");

        sub.className =
            "skill-sub" +
            (line.master ? " skill-sub-master" : "") +
            (line.locked ? " skill-sub-locked" : "");

        sub.textContent =
            line.text;

        info.appendChild(sub);

    });

    row.appendChild(info);


    /* Mastered skills, and innate passives with nothing to spend
       points on, get neither a Learn button nor a stepper.
       Not-yet-learned skills get a LEARN button (pays the full
       Rank cost as a lump sum, with a confirm first). Once
       learned, the LEARN button is replaced by the usual ▲▼
       stepper for leveling up 1 point at a time. */

    if (learnable && !mastered && invested <= 0) {

        const requirementsMet =
            meetsSkillRequirements(skill);

        const learnBtn =
            document.createElement("button");

        learnBtn.type = "button";
        learnBtn.className = "skill-learn-btn" + (requirementsMet ? "" : " skill-learn-btn-locked");
        learnBtn.textContent = requirementsMet ? "Learn" : "Locked";
        learnBtn.setAttribute("aria-label", "Learn " + skill.name);

        if (!requirementsMet) {

            const unmet =
                getUnmetSkillRequirements(skill);

            learnBtn.title =
                "Requires " +
                unmet.map(function(desc) {

                    if (desc.kind === "stat") {

                        return desc.stat.toUpperCase() + " " + desc.need;

                    }

                    if (desc.kind === "level") {

                        return "Level " + desc.need;

                    }

                    return "[" + desc.name + "] Lv." + desc.need;

                }).join(", ");

        }

        learnBtn.addEventListener("click", function(event) {

            /* don't let this bubble up into the row's tooltip toggle */

            event.stopPropagation();

            /* Re-check live (not the requirementsMet captured when the
               row was built) in case the character's stats changed
               since this row was drawn, then re-check on every click
               so a skill can never be learned without the stat gate */

            const stillUnmet =
                getUnmetSkillRequirements(skill);

            if (stillUnmet.length > 0) {

                flashSkillRowLocked(row, learnBtn);

                return;

            }

            const cost =
                getSkillCost(skill, 0);

            if (getSkillPointsValue() < cost) {

                flashInsufficientSkillPoints();

                return;

            }

            /* Confirm FIRST, then deduct the full Rank cost as a
               lump sum the moment the skill is learned — matches
               the in-game "Learn 'X'?" popup */

            showSkillConfirm(skill.name, function() {

                /* Resurrection only: learning it immediately grants
                   Master (max level), skipping the normal 1-at-a-time
                   leveling every other skill uses. Cost is still just
                   the usual lump-sum Rank cost paid to learn it. */

                skillPointsInvested[skillKey] =
                    skill.name === "Resurrection" ?
                        getSkillMaxLevel(skill) :
                        1;

                adjustSkillPoints(-cost);

                renderSkillsList();

            });

        });

        row.appendChild(learnBtn);

    } else if (learnable && !mastered && invested > 0) {

        const stepper =
            document.createElement("span");

        stepper.className =
            "skill-stepper";

        const up =
            document.createElement("button");

        up.type = "button";
        up.className = "skill-step-btn";
        up.textContent = "▲";
        up.setAttribute("aria-label", "Add point to " + skill.name);

        const down =
            document.createElement("button");

        down.type = "button";
        down.className = "skill-step-btn";
        down.textContent = "▼";
        down.setAttribute("aria-label", "Remove point from " + skill.name);

        /* Level-up is locked out (disabled, greyed via the existing
           .skill-step-btn:disabled style) once maxed, or while the
           prerequisite skill for the NEXT point isn't met yet — same
           gate the tooltip and sub-line above already display, via
           getSkillPrerequisiteForLevel / getUnmetSkillPrerequisite. */

        const nextLevel = invested + 1;

        const unmetPrereqNow =
            getUnmetSkillPrerequisite(skill, nextLevel);

        const unmetStatNow =
            getUnmetStatPrerequisite(skill, nextLevel);

        const unmetLevelNow =
            getUnmetLevelPrerequisite(skill, nextLevel);

        if (invested >= getSkillMaxLevel(skill)) {

            up.disabled = true;

        } else if (unmetPrereqNow) {

            up.disabled = true;

            up.title =
                "Requires [" + unmetPrereqNow.name + "] Lv." + unmetPrereqNow.need +
                " (have " + unmetPrereqNow.have + ")";

        } else if (unmetStatNow) {

            up.disabled = true;

            up.title =
                "Requires " +
                unmetStatNow.map(function(u) {

                    return u.stat.toUpperCase() + "." + u.need + " (have " + u.have + ")";

                }).join(", ");

        } else if (unmetLevelNow) {

            up.disabled = true;

            up.title =
                "Requires Level." + unmetLevelNow.need +
                " (have " + unmetLevelNow.have + ")";

        }

        up.addEventListener("click", function(event) {

            event.stopPropagation();

            const current =
                skillPointsInvested[skillKey] || 0;

            const max =
                getSkillMaxLevel(skill);

            if (current >= max) {

                return;

            }

            /* Re-check live, same reasoning as the Learn button re-check
               below it — the disabled attribute above reflects the state
               at render time, but stats/prerequisite skills can change
               between renders, so the click itself is the source of truth. */

            const unmetPrereq =
                getUnmetSkillPrerequisite(skill, current + 1);

            if (unmetPrereq) {

                flashSkillRowLocked(row, up);

                return;

            }

            const unmetStat =
                getUnmetStatPrerequisite(skill, current + 1);

            if (unmetStat) {

                flashSkillRowLocked(row, up);

                return;

            }

            const unmetLevel =
                getUnmetLevelPrerequisite(skill, current + 1);

            if (unmetLevel) {

                flashSkillRowLocked(row, up);

                return;

            }

            const cost =
                getSkillCost(skill, current);

            if (getSkillPointsValue() < cost) {

                flashInsufficientSkillPoints();

                return;

            }

            skillPointsInvested[skillKey] = current + 1;

            adjustSkillPoints(-cost);

            renderSkillsList();

        });

        down.addEventListener("click", function(event) {

            event.stopPropagation();

            const current =
                skillPointsInvested[skillKey] || 0;

            if (current <= 0) {

                return;

            }

            const refund =
                getSkillCost(skill, current - 1);

            skillPointsInvested[skillKey] = current - 1;

            adjustSkillPoints(refund);

            renderSkillsList();

        });

        stepper.appendChild(up);

        stepper.appendChild(down);

        row.appendChild(stepper);

    }


    /* Reset button — shown on ANY row with points already in it,
       mastered or not, so a single skill can be backed out of
       without resetting the whole class. Sits after the stepper
       (or in its place for a mastered skill, which has no stepper
       at all) so the row's trailing edge always has some control. */

    if (learnable && invested > 0) {

        const resetBtn =
            document.createElement("button");

        resetBtn.type = "button";
        resetBtn.className = "skill-reset-btn";
        resetBtn.textContent = "↺";
        resetBtn.title = "Reset " + skill.name;
        resetBtn.setAttribute("aria-label", "Reset " + skill.name);

        resetBtn.addEventListener("click", function(event) {

            event.stopPropagation();

            const classKey =
                skillKey.split("-")[0];

            showConfirmDialog(
                buildResetConfirmMessage(classKey, skill),
                function() {

                    resetSingleSkill(skillKey, skill);

                }
            );

        });

        row.appendChild(resetBtn);

    }


    /* Hover (desktop) shows the Item Information tooltip; tap
       (touch) toggles it, since there's no hover there. The
       tooltip is one shared element (see showSkillTooltip) so it
       can never be clipped by the scrolling list. */

    row.classList.add("has-tooltip");

    row.addEventListener("mouseenter", function() {

        showSkillTooltip(row, skill, skillKey);

    });

    row.addEventListener("mouseleave", function() {

        hideSkillTooltip();

    });

    row.addEventListener("click", function(event) {

        if (event.target.closest(".skill-stepper")) {

            return;

        }

        if (row.classList.contains("tooltip-open")) {

            hideSkillTooltip();

            return;

        }

        document.querySelectorAll(".skill-row.tooltip-open").forEach(function(other) {

            other.classList.remove("tooltip-open");

        });

        showSkillTooltip(row, skill, skillKey);

        row.classList.add("tooltip-open");

    });

    return row;

}


/* =========================================
   SKILL LEARNED PANEL

   Floats in the left column next to Selected
   Pandaya Items. Lists every learned skill
   (across all classes, not just the active
   tab) with its current level, live-updating
   whenever a skill is leveled up/down.
========================================= */

function getSkillLearnedListEl() {

    return document.getElementById("skillLearnedList");

}


function renderSkillLearnedPanel() {

    const listEl = getSkillLearnedListEl();

    if (!listEl) {

        return;

    }

    listEl.innerHTML = "";

    const learnedEntries = [];

    Object.keys(skillCategories).forEach(function(classKey) {

        (skillCategories[classKey] || []).forEach(function(skill, index) {

            const skillKey = classKey + "-" + index;

            const liveLevel = skillPointsInvested[skillKey] || 0;

            const baseline = skillLearnedBaseline[skillKey] || 0;

            /* Only list a skill here once it's been invested in
               PAST its last-saved baseline. Right after Save Build
               every skill's live level equals its baseline, so
               nothing shows — the panel reads as freshly cleared —
               even though the Skills tab itself still shows the
               full tree as learned. Spend another point on
               anything (new or already-learned) and it reappears
               here. */

            if (liveLevel > baseline) {

                learnedEntries.push({
                    skill: skill,
                    skillKey: skillKey,
                    level: liveLevel
                });

            }

        });

    });


    if (learnedEntries.length === 0) {

        const empty =
            document.createElement("div");

        empty.className =
            "selected-empty";

        empty.textContent =
            "No skills learned yet.";

        listEl.appendChild(empty);

        return;

    }


    learnedEntries.forEach(function(entry) {

        const row =
            document.createElement("div");

        row.className =
            "skill-learned-item";

        const icon =
            buildSkillIcon(entry.skill, true);

        icon.classList.add("skill-learned-icon");

        row.appendChild(icon);


        const info =
            document.createElement("div");

        info.className =
            "skill-learned-info";

        const name =
            document.createElement("div");

        name.className =
            "skill-learned-name";

        name.textContent =
            "[" + entry.skill.name + "]Rank." + entry.skill.rank;

        const level =
            document.createElement("div");

        const mastered =
            isSkillMastered(entry.skill, entry.skillKey);

        level.className =
            "skill-learned-level" + (mastered ? " skill-learned-master" : "");

        level.textContent =
            mastered ? "✓ MASTER" : "Level " + entry.level;

        info.appendChild(name);

        info.appendChild(level);

        row.appendChild(info);


        const resetBtn =
            document.createElement("button");

        resetBtn.type = "button";
        resetBtn.className = "skill-learned-reset-btn";
        resetBtn.textContent = "✕";
        resetBtn.title = "Reset " + entry.skill.name;
        resetBtn.setAttribute("aria-label", "Reset " + entry.skill.name);

        resetBtn.addEventListener("click", function(event) {

            event.stopPropagation();

            const classKey =
                entry.skillKey.split("-")[0];

            showConfirmDialog(
                buildResetConfirmMessage(classKey, entry.skill),
                function() {

                    resetSingleSkill(entry.skillKey, entry.skill);

                }
            );

        });

        row.appendChild(resetBtn);

        listEl.appendChild(row);

    });

}


/* ---- Render whichever class is active, filtered to the active
        Dex/Pow/Int/Etc type tab ---- */

function renderSkillsList() {

    /* Every row gets rebuilt below, so any tooltip pointing at an
       old row would be left showing stale (pre-level-up) info —
       close it rather than let it go stale. */

    hideSkillTooltip();

    /* Learned skills can live in any class tab, so refresh the
       left-panel summary every time skills re-render, not just
       when the active tab happens to change. */

    renderSkillLearnedPanel();

    const listEl = getSkillsListEl();

    if (!listEl) {

        return;

    }

    listEl.innerHTML = "";

    if (!activeSkillClass) {

        const empty =
            document.createElement("div");

        empty.className =
            "skills-window-empty";

        empty.textContent =
            "Select a class above to view its skills.";

        listEl.appendChild(empty);

        return;

    }

    const allSkills = skillCategories[activeSkillClass] || [];

    /* Keep each skill's original index (not its filtered position)
       so skillKey stays stable — that's what skillPointsInvested
       is keyed on. */

    const episodeRange =
        activeEpisode ? EPISODE_LEVEL_RANGES[activeEpisode] : null;

    const episodeConfigured =
        episodeRange && episodeRange.min !== null && episodeRange.max !== null;

    const filtered = [];

    allSkills.forEach(function(skill, index) {

        const type = skill.type || "etc";

        if (type !== activeSkillType) {

            return;

        }

        if (episodeConfigured) {

            const lvl = skill.levelRequired || 0;

            if (lvl < episodeRange.min || lvl > episodeRange.max) {

                return;

            }

            const excludeRange = episodeRange.excludeActiveRange;

            if (excludeRange) {

                const isPassive = skill.tag === "Passive";

                if (!isPassive && lvl >= excludeRange.min && lvl <= excludeRange.max) {

                    return;

                }

            }

        }

        filtered.push({ skill: skill, index: index });

    });

    if (filtered.length === 0) {

        const empty =
            document.createElement("div");

        empty.className =
            "skills-window-empty";

        if (allSkills.length === 0) {

            empty.textContent =
                "No skills added yet.";

        } else if (episodeConfigured) {

            empty.textContent =
                "No " + getSkillTypeLabel(activeSkillType) +
                " skills between Lv." + episodeRange.min +
                " and Lv." + episodeRange.max + " for this class.";

        } else {

            empty.textContent =
                "No " + getSkillTypeLabel(activeSkillType) + " skills for this class.";

        }

        listEl.appendChild(empty);

        return;

    }

    filtered.forEach(function(entry) {

        listEl.appendChild(
            createSkillRow(entry.skill, activeSkillClass + "-" + entry.index)
        );

    });

}


/* ---- Switch which class's skills are showing (quickbar buttons) ---- */

function setActiveSkillClass(key) {

    activeSkillClass = key;

    document.querySelectorAll(".skills-quick-btn").forEach(function(btn) {

        btn.classList.toggle("active", btn.dataset.class === key);

    });

    document.querySelectorAll(".class-btn").forEach(function(btn) {

        btn.classList.toggle("active", btn.dataset.class === key);

    });

    /* Per-class silhouette, faded in behind the Inventory grid */

    const inventoryBoxEl =
        document.querySelector(".inventory-box");

    if (inventoryBoxEl) {

        inventoryBoxEl.classList.toggle("brawler-active", key === "brawler");
        inventoryBoxEl.classList.toggle("archer-active", key === "archer");
        inventoryBoxEl.classList.toggle("shaman-active", key === "shaman");
        inventoryBoxEl.classList.toggle("swordsman-active", key === "swordsman");
        inventoryBoxEl.classList.toggle("gunner-active", key === "gunner");
        inventoryBoxEl.classList.toggle("extreme-active", key === "extreme");

    }

    /* Class key art behind the Stats panel — picking BRAWLER (or any
       class) automatically swaps in that class's background here */

    const statsBoxEl =
        document.querySelector(".stats-box");

    if (statsBoxEl) {

        statsBoxEl.classList.toggle("brawler-active", key === "brawler");
        statsBoxEl.classList.toggle("archer-active", key === "archer");
        statsBoxEl.classList.toggle("shaman-active", key === "shaman");
        statsBoxEl.classList.toggle("swordsman-active", key === "swordsman");
        statsBoxEl.classList.toggle("gunner-active", key === "gunner");
        statsBoxEl.classList.toggle("extreme-active", key === "extreme");

    }

    const classEl = getSkillsWindowClassEl();

    if (classEl) {

        classEl.textContent = key.charAt(0).toUpperCase() + key.slice(1);

    }

    const classCurrentEl =
        document.getElementById("classCurrent");

    if (classCurrentEl) {

        classCurrentEl.textContent = key.charAt(0).toUpperCase() + key.slice(1);

    }

    /* Rebuild the 4 skill-type tabs for whichever class is now
       active. Extreme swaps them to Brawler/Swordsman/Archer/Shaman
       (the base class each skill came from) instead of Dex/Pow/Int/
       Etc; Shaman keeps Dex/Pow/Int/Etc but relabels Dex to Attack
       and swaps its position with Pow; every other class gets the
       plain Dex, Pow, Int, Etc order. */

    const tabsContainer =
        document.getElementById("skillsWindowTabs");

    if (tabsContainer) {

        let tabSpecs = SKILL_TYPE_TABS_DEFAULT;

        if (key === "extreme") {

            tabSpecs = SKILL_TYPE_TABS_EXTREME;

        } else if (key === "shaman") {

            tabSpecs = [
                { type: "pow", label: "POW" },
                { type: "dex", label: "ATTACK" },
                { type: "int", label: "INT" },
                { type: "etc", label: "ETC" }
            ];

        }

        const tabEls =
            Array.from(tabsContainer.querySelectorAll(".skills-window-tab"));

        tabSpecs.forEach(function(spec, index) {

            const tabEl = tabEls[index];

            if (!tabEl) {

                return;

            }

            tabEl.dataset.type = spec.type;

            tabEl.textContent = spec.label;

        });

        /* Whichever tab set is now showing, land on its first tab so
           the filter always matches something visible */

        activeSkillType = tabSpecs[0].type;

        tabEls.forEach(function(tab, index) {

            tab.classList.toggle("active", index === 0);

        });

    }

    renderSkillsList();

}


/* ---- Switch the active Dex/Pow/Int/Etc type tab ---- */

function setActiveSkillType(type) {

    activeSkillType = type;

    document.querySelectorAll(".skills-window-tab").forEach(function(tab) {

        tab.classList.toggle("active", tab.dataset.type === type);

    });

    renderSkillsList();

}


/* ---- Switch (or clear) the active Episode filter ---- */

function setActiveEpisode(key) {

    /* Clicking the already-active episode again clears the filter,
       same toggle feel as re-clicking an open accordion header. */

    activeEpisode = (activeEpisode === key) ? null : key;

    document.querySelectorAll(".episode-btn").forEach(function(btn) {

        btn.classList.toggle("active", btn.dataset.episode === activeEpisode);

    });

    const currentEl =
        document.getElementById("episodeCurrent");

    if (currentEl) {

        currentEl.textContent =
            activeEpisode ? (EPISODE_LABELS[activeEpisode] || activeEpisode) : "";

    }

    renderSkillsList();

}


/* ---- Open / close the Skills window ---- */

function openSkillsWindow() {

    const win = getSkillsWindowEl();

    if (win) {

        win.classList.add("open");

    }

    const toggleBtn =
        document.getElementById("skillsToggleBtn");

    if (toggleBtn) {

        toggleBtn.classList.add("active");

    }

    /* Expand the class row (Brawler/Swordsman/.../Extreme) alongside
       the Skill window — collapsed the rest of the time so the
       quickbar stays compact at narrower widths */

    const classlistEl =
        document.getElementById("skillsClasslist");

    if (classlistEl) {

        classlistEl.classList.remove("collapsed");

    }

}

function closeSkillsWindow() {

    const win = getSkillsWindowEl();

    if (win) {

        win.classList.remove("open");

    }

    const toggleBtn =
        document.getElementById("skillsToggleBtn");

    if (toggleBtn) {

        toggleBtn.classList.remove("active");

    }

    const classlistEl =
        document.getElementById("skillsClasslist");

    if (classlistEl) {

        classlistEl.classList.add("collapsed");

    }

}

function toggleSkillsWindow() {

    const win = getSkillsWindowEl();

    if (!win) {

        return;

    }

    if (win.classList.contains("open")) {

        closeSkillsWindow();

    } else {

        openSkillsWindow();

    }

}


/* ---- Wire up the buttons ---- */

const skillsToggleBtn =
    document.getElementById("skillsToggleBtn");

if (skillsToggleBtn) {

    skillsToggleBtn.addEventListener("click", toggleSkillsWindow);

}

const skillsCloseBtn =
    document.getElementById("skillsCloseBtn");

if (skillsCloseBtn) {

    skillsCloseBtn.addEventListener("click", closeSkillsWindow);

}

document.querySelectorAll(".skills-quick-btn").forEach(function(btn) {

    btn.addEventListener("click", function() {

        openSkillsWindow();

        setActiveSkillClass(btn.dataset.class);

    });

});

/* CLASS list in the left panel — same effect as a quickbar
   button, kept in sync with it via setActiveSkillClass */

document.querySelectorAll(".class-btn").forEach(function(btn) {

    btn.addEventListener("click", function() {

        openSkillsWindow();

        setActiveSkillClass(btn.dataset.class);

        /* Collapse the list back down once a class is picked, so
           "CLASS: Archer" reads as the current choice rather than
           leaving all six buttons sitting open permanently */

        const list =
            document.getElementById("classList");

        const arrow =
            document.getElementById("classArrow");

        if (list) {

            list.classList.add("collapsed");

        }

        if (arrow) {

            arrow.textContent = "▶";

        }

    });

});


/* CLASS header — click "CLASS: <Name>" to open the list back up
   and freely pick a different class, same collapsible pattern as
   the Pandaya item categories */

const classHeaderEl =
    document.getElementById("classHeader");

if (classHeaderEl) {

    classHeaderEl.addEventListener("click", function() {

        const list =
            document.getElementById("classList");

        const arrow =
            document.getElementById("classArrow");

        if (!list) {

            return;

        }

        const isCollapsed =
            list.classList.toggle("collapsed");

        if (arrow) {

            arrow.textContent = isCollapsed ? "▶" : "▼";

        }

    });

}

/* EPISODE list — picking one opens the Skills window (same as
   picking a class) and filters whichever class/type is showing
   down to that episode's level range. Picking the same episode
   again clears the filter. */

document.querySelectorAll(".episode-btn").forEach(function(btn) {

    btn.addEventListener("click", function() {

        openSkillsWindow();

        setActiveEpisode(btn.dataset.episode);

        /* Collapse the list back down once an episode is picked,
           same behaviour as the CLASS list above */

        const list =
            document.getElementById("episodeList");

        const arrow =
            document.getElementById("episodeArrow");

        if (list) {

            list.classList.add("collapsed");

        }

        if (arrow) {

            arrow.textContent = "▶";

        }

    });

});

/* EPISODE header — click "EPISODE:" to open the list back up,
   same collapsible pattern as CLASS */

const episodeHeaderEl =
    document.getElementById("episodeHeader");

if (episodeHeaderEl) {

    episodeHeaderEl.addEventListener("click", function() {

        const list =
            document.getElementById("episodeList");

        const arrow =
            document.getElementById("episodeArrow");

        if (!list) {

            return;

        }

        const isCollapsed =
            list.classList.toggle("collapsed");

        if (arrow) {

            arrow.textContent = isCollapsed ? "▶" : "▼";

        }

    });

}

/* RESET SKILL — un-learns every skill in the class currently
   showing, refunding every point spent back to Skill Points */

const skillsResetBtn =
    document.getElementById("skillsResetBtn");

if (skillsResetBtn) {

    skillsResetBtn.addEventListener("click", function() {

        if (!activeSkillClass) {

            return;

        }

        const className =
            activeSkillClass.charAt(0).toUpperCase() + activeSkillClass.slice(1);

        showConfirmDialog("Reset all " + className + " skills?", function() {

            resetSkillsForClass(activeSkillClass);

        });

    });

}

/* RESET STAT — zeroes POW/DEX/INT/VIT allocation and refunds the
   Total Point pool */

const resetStatBtn =
    document.getElementById("resetStatBtn");

if (resetStatBtn) {

    resetStatBtn.addEventListener("click", function() {

        showConfirmDialog("Reset all stats?", resetAllStats);

    });

}


/* =========================================
   SAVE BUILD → BUILD PREVIEW PANEL

   "Save Build" snapshots the current stats,
   HP, level, selected Pandaya items and
   learned skills into a record shown in the
   Build Preview panel (left column, below
   the calculator). Every click adds a new
   record — newest first — so a player can
   keep several builds side by side. Records
   persist across reloads via localStorage.
========================================= */

const BUILD_PREVIEW_STORAGE_KEY = "ranBuildCalculator.savedBuilds";

let savedBuilds = [];

(function loadSavedBuilds() {

    try {

        const raw =
            window.localStorage.getItem(BUILD_PREVIEW_STORAGE_KEY);

        if (raw) {

            const parsed = JSON.parse(raw);

            if (Array.isArray(parsed)) {

                savedBuilds = parsed;

            }

        }

    } catch (err) {

        savedBuilds = [];

    }

})();


function persistSavedBuilds() {

    try {

        window.localStorage.setItem(
            BUILD_PREVIEW_STORAGE_KEY,
            JSON.stringify(savedBuilds)
        );

    } catch (err) {

        /* storage unavailable (private browsing, quota, etc.) —
           records still work for the rest of this session */

    }

}


/* ---- Figure out what this build is "about" from what was invested ----

   Looks at the Stat Points actually SPENT this build (not the total
   stat, which can carry over pre-existing base values) for Pow, Dex
   and Int and labels the build after whichever one got the most
   points — ex: "DEX Build" for a build that put its points into
   Dex. Ties among Pow/Dex/Int fall back to "Balanced Build". If
   nothing was spent on Pow/Dex/Int at all, Vit gets checked next —
   a build that only invested in Vit is labeled "VIT/HP Build"
   instead of Balanced, since that's a deliberate tanky/HP focus, not
   a lack of one. Only a build with nothing spent anywhere falls all
   the way back to "Balanced Build". */

function getBuildFocusLabel(stats) {

    const focusKeys = ["pow", "dex", "int"];

    const totals = focusKeys.map(function(key) {

        const stat = stats[key] || { invested: 0 };

        return { key: key, value: stat.invested || 0 };

    });

    const highest = totals.reduce(function(best, entry) {

        return entry.value > best.value ? entry : best;

    }, totals[0]);

    const tiedForHighest = totals.filter(function(entry) {

        return entry.value === highest.value;

    });

    if (highest.value > 0 && tiedForHighest.length === 1) {

        return highest.key.toUpperCase() + " Build";

    }

    if (highest.value <= 0) {

        const vitStat = stats.vit || { invested: 0 };

        if ((vitStat.invested || 0) > 0) {

            return "VIT/HP Build";

        }

    }

    return "Balanced Build";

}


/* ---- Gather everything on screen right now into one record ---- */

function collectBuildSnapshot() {

    const stats = {};

    STAT_KEYS.forEach(function(key) {

        const inputs = getStatInputs(key);

        stats[key] = {
            total: inputs.base ? (parseInt(inputs.base.value, 10) || 0) : 0,
            allocated: inputs.allocated ? (parseInt(inputs.allocated.value, 10) || 0) : 0,
            /* Pure manual spend — the green box above also folds in
               the Pandaya gear bonus, but "invested" should only
               reflect Stat Points the player actually spent */
            invested: statManualAllocated[key] || 0
        };

    });

    const hpInput =
        document.getElementById("statHP");

    const skillPointsInput =
        document.getElementById("skillPoints");

    const items = pandayaCardRegistry
        .filter(function(entry) {

            return entry.card.classList.contains("selected");

        })
        .map(function(entry) {

            return {
                name: entry.name,
                image: entry.image,
                stats: entry.stats || {}
            };

        });

    const skills = [];

    Object.keys(skillCategories).forEach(function(classKey) {

        (skillCategories[classKey] || []).forEach(function(skill, index) {

            const skillKey = classKey + "-" + index;

            const level = skillPointsInvested[skillKey] || 0;

            if (level > 0) {

                skills.push({
                    classKey: classKey,
                    name: skill.name,
                    rank: skill.rank,
                    level: level,
                    mastered: isSkillMastered(skill, skillKey)
                });

            }

        });

    });

    return {
        id: "build-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        savedAt: Date.now(),
        className: activeSkillClass ?
            (activeSkillClass.charAt(0).toUpperCase() + activeSkillClass.slice(1)) :
            "No Class",
        buildLabel: getBuildFocusLabel(stats),
        charLevel: getCharLevel(),
        statPoints: getPointValue(),
        skillPoints: skillPointsInput ? (parseInt(skillPointsInput.value, 10) || 0) : 0,
        hp: hpInput ? (parseInt(hpInput.value, 10) || 0) : 0,
        stats: stats,
        items: items,
        skills: skills
    };

}


function getBuildPreviewListEl() {

    return document.getElementById("buildPreviewList");

}

function getBuildPreviewEmptyEl() {

    return document.getElementById("buildPreviewEmpty");

}

function getBuildPreviewCountEl() {

    return document.getElementById("buildPreviewCount");

}


/* ---- Build one saved-build card ---- */

function buildRecordCard(build) {

    const card =
        document.createElement("div");

    card.className = "build-record";

    card.dataset.buildId = build.id;


    /* Header: title + timestamp + delete */

    const header =
        document.createElement("div");

    header.className = "build-record-header";

    const titleWrap =
        document.createElement("div");

    const title =
        document.createElement("div");

    title.className = "build-record-title";

    /* Lead with the stat focus (DEX Build / POW Build / INT Build)
       instead of the class name, so it's obvious at a glance what
       kind of build this is — class + level move to the meta line
       below since that's secondary info once the record is saved. */

    title.textContent =
        (build.buildLabel || "Balanced Build");

    const meta =
        document.createElement("div");

    meta.className = "build-record-meta";

    meta.textContent =
        build.className + " · Lv." + build.charLevel;

    titleWrap.appendChild(title);

    titleWrap.appendChild(meta);

    header.appendChild(titleWrap);

    const deleteBtn =
        document.createElement("button");

    deleteBtn.type = "button";

    deleteBtn.className = "build-record-delete";

    deleteBtn.textContent = "✕";

    deleteBtn.title = "Delete this saved build";

    deleteBtn.setAttribute("aria-label", "Delete this saved build");

    deleteBtn.addEventListener("click", function() {

        showConfirmDialog("Delete this saved build?", function() {

            savedBuilds = savedBuilds.filter(function(entry) {

                return entry.id !== build.id;

            });

            persistSavedBuilds();

            renderBuildPreview();

        });

    });

    header.appendChild(deleteBtn);

    card.appendChild(header);


    /* Stats section */

    const statsSection =
        document.createElement("div");

    statsSection.className = "build-record-section";

    const statsTitle =
        document.createElement("div");

    statsTitle.className = "build-record-section-title";

    statsTitle.textContent = "Stats";

    statsSection.appendChild(statsTitle);

    const statsRow =
        document.createElement("div");

    statsRow.className = "build-record-stats";

    STAT_KEYS.forEach(function(key) {

        const chip =
            document.createElement("span");

        chip.className = "build-record-chip";

        const stat =
            build.stats[key] || { total: 0, allocated: 0 };

        chip.innerHTML =
            key.toUpperCase() + " <strong>" + stat.total + "</strong>" +
            (stat.allocated > 0 ? " (+" + stat.allocated + ")" : "");

        statsRow.appendChild(chip);

    });

    /* "Skill Pts" chip below shows points USED, not points left —
       sum of every learned skill's level for this build snapshot */

    const skillPointsUsed =
        build.skills.reduce(function(sum, skill) {

            return sum + (skill.level || 0);

        }, 0);

    [
        ["HP", build.hp],
        ["Stat Pts", build.statPoints],
        ["Skill Pts", skillPointsUsed]
    ].forEach(function(pair) {

        const chip =
            document.createElement("span");

        chip.className = "build-record-chip";

        chip.innerHTML =
            pair[0] + " <strong>" + pair[1] + "</strong>";

        statsRow.appendChild(chip);

    });

    statsSection.appendChild(statsRow);

    card.appendChild(statsSection);


    /* Invested Stats section — how many Stat Points the player
       actually spent on each stat for this build (manual spend
       only, Pandaya gear bonus not included) */

    const investedSection =
        document.createElement("div");

    investedSection.className = "build-record-section";

    const investedTitle =
        document.createElement("div");

    investedTitle.className = "build-record-section-title";

    investedTitle.textContent = "Invested Stats";

    investedSection.appendChild(investedTitle);

    const investedRow =
        document.createElement("div");

    investedRow.className = "build-record-stats";

    const investedTotal =
        STAT_KEYS.reduce(function(sum, key) {

            const stat = build.stats[key] || { invested: 0 };

            return sum + (stat.invested || 0);

        }, 0);

    if (investedTotal <= 0) {

        const note =
            document.createElement("div");

        note.className = "build-record-empty-note";

        note.textContent = "No points invested.";

        investedSection.appendChild(note);

    } else {

        STAT_KEYS.forEach(function(key) {

            const stat =
                build.stats[key] || { invested: 0 };

            if (!stat.invested) {

                return;

            }

            const chip =
                document.createElement("span");

            chip.className = "build-record-chip";

            chip.innerHTML =
                key.toUpperCase() + " <strong>+" + stat.invested + "</strong>";

            investedRow.appendChild(chip);

        });

        investedSection.appendChild(investedRow);

    }

    card.appendChild(investedSection);


    /* Selected Pandaya Items section */

    const itemsSection =
        document.createElement("div");

    itemsSection.className = "build-record-section";

    const itemsTitle =
        document.createElement("div");

    itemsTitle.className = "build-record-section-title";

    itemsTitle.textContent =
        "Pandaya Items (" + build.items.length + ")";

    itemsSection.appendChild(itemsTitle);

    if (build.items.length === 0) {

        const note =
            document.createElement("div");

        note.className = "build-record-empty-note";

        note.textContent = "No items selected.";

        itemsSection.appendChild(note);

    } else {

        const itemsList =
            document.createElement("div");

        itemsList.className = "build-record-items";

        build.items.forEach(function(item) {

            const line =
                document.createElement("div");

            line.className = "build-record-line";

            const name =
                document.createElement("span");

            name.className = "build-record-line-name";

            name.textContent = item.name;

            line.appendChild(name);

            if (item.stats && Object.keys(item.stats).length > 0) {

                const bonus =
                    document.createElement("span");

                bonus.className = "build-record-line-bonus";

                bonus.textContent = formatStatBonus(item.stats);

                line.appendChild(bonus);

            }

            itemsList.appendChild(line);

        });

        itemsSection.appendChild(itemsList);

    }

    card.appendChild(itemsSection);


    /* Skills Learned section */

    const skillsSection =
        document.createElement("div");

    skillsSection.className = "build-record-section";

    const skillsTitle =
        document.createElement("div");

    skillsTitle.className = "build-record-section-title";

    skillsTitle.textContent =
        "Skills Learned (" + build.skills.length + ")";

    skillsSection.appendChild(skillsTitle);

    if (build.skills.length === 0) {

        const note =
            document.createElement("div");

        note.className = "build-record-empty-note";

        note.textContent = "No skills learned.";

        skillsSection.appendChild(note);

    } else {

        const skillsList =
            document.createElement("div");

        skillsList.className = "build-record-skills";

        build.skills.forEach(function(skill) {

            const line =
                document.createElement("div");

            line.className = "build-record-line";

            const name =
                document.createElement("span");

            name.className = "build-record-line-name";

            name.textContent =
                "[" + skill.name + "] Rank." + skill.rank;

            line.appendChild(name);

            const level =
                document.createElement("span");

            level.className = "build-record-line-level";

            level.textContent =
                skill.mastered ? "✓ MASTER" : "Lv." + skill.level;

            line.appendChild(level);

            skillsList.appendChild(line);

        });

        skillsSection.appendChild(skillsList);

    }

    card.appendChild(skillsSection);

    return card;

}


/* ---- Redraw the whole Build Preview panel from savedBuilds ---- */

function renderBuildPreview() {

    const listEl = getBuildPreviewListEl();

    const emptyEl = getBuildPreviewEmptyEl();

    const countEl = getBuildPreviewCountEl();

    if (!listEl) {

        return;

    }

    listEl.innerHTML = "";

    if (countEl) {

        countEl.textContent =
            savedBuilds.length > 0 ? (savedBuilds.length + " SAVED") : "";

    }

    if (savedBuilds.length === 0) {

        if (emptyEl) {

            emptyEl.style.display = "flex";

        }

        listEl.style.display = "none";

        return;

    }

    if (emptyEl) {

        emptyEl.style.display = "none";

    }

    listEl.style.display = "flex";

    savedBuilds.forEach(function(build) {

        listEl.appendChild(buildRecordCard(build));

    });

}


const saveBuildBtn =
    document.getElementById("saveBuildBtn");

if (saveBuildBtn) {

    saveBuildBtn.addEventListener("click", function() {

        savedBuilds.unshift(collectBuildSnapshot());

        persistSavedBuilds();

        renderBuildPreview();

        /* The snapshot above already has everything on screen
           locked in, so clear the picks that make up ONE build —
           selected Pandaya items and every learned skill (all
           classes), plus the Inventory HUD boxes those two feed —
           so the player lands on a clean slate for their next
           build's gear/skills. The Character panel (POW/DEX/INT/VIT/
           HP, including the green +X allocated box) is deliberately
           left untouched — it keeps showing exactly what was just
           saved instead of resetting, so the next save keeps
           building on top of this one. Stat Points / Skill Points
           spent on this build stay spent either way. */

        resetAllSelectedItems();

        /* Snapshot the current skill levels as the new baseline so
           the Skill Learned panel drops back to empty for the next
           build — but leave skillPointsInvested (and so the
           Skills tab / LEARN-LOCKED tree) completely untouched. */

        freezeSkillLearnedBaseline();

        const saveBuildStatusEl =
            document.getElementById("saveBuildStatus");

        if (saveBuildStatusEl) {

            saveBuildStatusEl.textContent =
                "Saved! " + getPointValue() + " Stat Pts · " +
                getSkillPointsValue() + " Skill Pts still free to spend.";

            saveBuildStatusEl.classList.add("save-build-status-visible");

        }

        /* brief flash on the button + the new record so the
           save is obviously registered */

        saveBuildBtn.classList.add("save-build-flash");

        setTimeout(function() {

            saveBuildBtn.classList.remove("save-build-flash");

        }, 500);

        const listEl = getBuildPreviewListEl();

        if (listEl && listEl.firstChild) {

            listEl.firstChild.classList.add("build-record-flash");

            listEl.firstChild.scrollIntoView({ block: "nearest" });

            setTimeout(function() {

                if (listEl.firstChild) {

                    listEl.firstChild.classList.remove("build-record-flash");

                }

            }, 900);

        }

    });

}

renderBuildPreview();


document.querySelectorAll(".skills-window-tab").forEach(function(tab) {

    tab.addEventListener("click", function() {

        setActiveSkillType(tab.dataset.type);

    });

});


/* =========================================
   LIVE SKILL LOCK REFRESH

   POW/DEX/INT feed the skill stat requirements above, so the
   skills list needs to redraw (Learn ↔ Locked) whenever one of
   them changes — not just when the skills window is opened or a
   skill is leveled. Wrapped here, after skillCategories and
   renderSkillsList both exist, so the very first stat write
   during page setup (before either is defined) can't blow up.
========================================= */

const recomputeBaseCore = recomputeBase;

recomputeBase = function(key) {

    recomputeBaseCore(key);

    if (key === "pow" || key === "dex" || key === "int") {

        renderSkillsList();

    }

};


/* Character Level feeds skill level gates the same way — refresh
   the skills list live as it's typed */

const charLevelInputEl =
    getCharLevelInput();

if (charLevelInputEl) {

    charLevelInputEl.addEventListener("input", function() {

        renderSkillsList();

    });

}


/* Initial render — no class picked yet (matches the CLASS list
   starting collapsed with nothing selected); tabs start on Dex,
   skills window closed until opened */

const initialClassEl = getSkillsWindowClassEl();

if (initialClassEl) {

    initialClassEl.textContent =
        activeSkillClass ? activeSkillClass.charAt(0).toUpperCase() + activeSkillClass.slice(1) : "";

}

const initialClassCurrentEl =
    document.getElementById("classCurrent");

if (initialClassCurrentEl) {

    initialClassCurrentEl.textContent =
        activeSkillClass ? activeSkillClass.charAt(0).toUpperCase() + activeSkillClass.slice(1) : "";

}

renderSkillsList();