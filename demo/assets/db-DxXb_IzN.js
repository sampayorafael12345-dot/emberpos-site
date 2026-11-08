import{a as e,n as t,t as n}from"./defineProperty-CUH-9I6X.js";import{a as r}from"./index.demo-Da1-Fehh.js";import{a as i,n as a}from"./expense-accounts-BEXCF80N.js";import{t as o}from"./sql-wasm-browser-7uumVa3i.js";t();var s=class extends Uint8Array{toString(e){if(e===`hex`||e===void 0){let e=``;for(let t=0;t<this.length;t++)e+=this[t].toString(16).padStart(2,`0`);return e}if(e===`utf8`||e===`utf-8`)return new TextDecoder().decode(this);throw Error(`HexBytes.toString: unsupported encoding `+e)}};function c(e){let t=new s(e);return crypto.getRandomValues(t),t}function l(e,t){if(e.length!==t.length)throw Error(`Input buffers must have the same length`);let n=0;for(let r=0;r<e.length;r++)n|=e[r]^t[r];return n===0}var u=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),d=class{constructor(){n(this,`h`,new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225])),n(this,`block`,new Uint8Array(64)),n(this,`w`,new Uint32Array(64)),n(this,`fill`,0),n(this,`len`,0)}update(e){this.len+=e.length;let t=0;for(;t<e.length;){let n=Math.min(64-this.fill,e.length-t);this.block.set(e.subarray(t,t+n),this.fill),this.fill+=n,t+=n,this.fill===64&&(this.compress(),this.fill=0)}return this}compress(){let{block:e,w:t,h:n}=this;for(let n=0;n<16;n++)t[n]=e[n*4]<<24|e[n*4+1]<<16|e[n*4+2]<<8|e[n*4+3];for(let e=16;e<64;e++){let n=t[e-15],r=t[e-2],i=(n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,a=(r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10;t[e]=t[e-16]+i+t[e-7]+a|0}let r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6],d=n[7];for(let e=0;e<64;e++){let n=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),f=s&c^~s&l,p=d+n+f+u[e]+t[e]|0,m=((r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10))+(r&i^r&a^i&a)|0;d=l,l=c,c=s,s=o+p|0,o=a,a=i,i=r,r=p+m|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+a|0,n[3]=n[3]+o|0,n[4]=n[4]+s|0,n[5]=n[5]+c|0,n[6]=n[6]+l|0,n[7]=n[7]+d|0}digest(){let e=this.len*8;for(this.update(new Uint8Array([128]));this.fill!==56;)this.update(new Uint8Array([0]));let t=new Uint8Array(8);t[0]=e/4294967296>>>24,t[1]=e/4294967296>>>16,t[2]=e/4294967296>>>8,t[3]=e/4294967296&255,t[4]=e>>>24&255,t[5]=e>>>16&255,t[6]=e>>>8&255,t[7]=e&255,this.update(t);let n=new Uint8Array(32);for(let e=0;e<8;e++)n[e*4]=this.h[e]>>>24,n[e*4+1]=this.h[e]>>>16&255,n[e*4+2]=this.h[e]>>>8&255,n[e*4+3]=this.h[e]&255;return n}},f=e=>new d().update(e).digest();function p(e,t){let n=e.length>64?f(e):e,r=new Uint8Array(64).fill(54),i=new Uint8Array(64).fill(92);for(let e=0;e<n.length;e++)r[e]^=n[e],i[e]^=n[e];let a=new d().update(r).update(t).digest();return new d().update(i).update(a).digest()}function m(e,t,n,r,i){if(i!==`sha256`)throw Error(`pbkdf2Sync shim: only sha256`);let a=typeof e==`string`?new TextEncoder().encode(e):e,o=typeof t==`string`?new TextEncoder().encode(t):t,c=new s(r),l=Math.ceil(r/32);for(let e=1;e<=l;e++){let t=new Uint8Array(o.length+4);t.set(o),t[o.length]=e>>>24,t[o.length+1]=e>>>16&255,t[o.length+2]=e>>>8&255,t[o.length+3]=e&255;let i=p(a,t),s=new Uint8Array(i);for(let e=1;e<n;e++){i=p(a,i);for(let e=0;e<32;e++)s[e]^=i[e]}c.set(s.subarray(0,Math.min(32,r-(e-1)*32)),(e-1)*32)}return c}function h(e){if(e!==`sha256`)throw Error(`createHash shim: only sha256`);let t=new d,n={update(e){return t.update(typeof e==`string`?new TextEncoder().encode(e):e),n},digest(e){let n=t.digest();if(e===`hex`)return Array.from(n).map(e=>e.toString(16).padStart(2,`0`)).join(``);if(e)throw Error(`createHash shim: only hex`);return n}};return n}var g=e(o()),_=`/demo/assets/sql-wasm-B-9ndiyM.wasm`,v=`emberpos-demo`,y=`db`,b=typeof location<`u`?new URLSearchParams(location.search):new URLSearchParams,x=b.has(`practice`),S=x&&b.has(`fresh`),C=x?`practice-bytes`:r===`pharmacy`?`pharmacy-bytes`:`bytes`,w=r===`pharmacy`&&!x?`demo-pharmacy.db`:`demo-shop.db`;function T(){return new Promise((e,t)=>{let n=indexedDB.open(v,1);n.onupgradeneeded=()=>n.result.createObjectStore(y),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function ee(){try{let e=await T();return await new Promise(t=>{let n=e.transaction(y,`readonly`).objectStore(y).get(C);n.onsuccess=()=>t(n.result instanceof Uint8Array?n.result:null),n.onerror=()=>t(null)})}catch(e){return null}}async function E(e){try{let t=await T();await new Promise(n=>{let r=t.transaction(y,`readwrite`);r.objectStore(y).put(e,C),r.oncomplete=()=>n(),r.onerror=()=>n()})}catch(e){}}function D(){return`browser:indexeddb/emberpos-demo`}async function O(){return(0,g.default)({locateFile:()=>_})}async function k(e){let t=S?null:await ee();if(t&&t.length>0)return t;let n=e=>{for(let t=0;t<15;t++)if(e[t]!==`SQLite format 3`.charCodeAt(t))return null;return e};if(typeof DecompressionStream==`function`)try{let e=await fetch(`${w}.gz`,{cache:`no-store`});if(e.ok&&e.body){let t=e.body.pipeThrough(new DecompressionStream(`gzip`)),r=n(new Uint8Array(await new Response(t).arrayBuffer()));if(r)return r}}catch(e){}try{let e=await fetch(w,{cache:`no-store`});return e.ok?n(new Uint8Array(await e.arrayBuffer())):null}catch(e){return null}}var A=Promise.resolve();function j(e,t){let n=new Uint8Array(t);A=A.then(()=>E(n))}var M=null,N=``,P=null;function F(){if(!M)throw Error(`Database not initialized. Call initDatabase() first.`);return M}function I(){return N}async function L(){N=D();let e=await O(),t=await k(N);M=t?new e.Database(t):new e.Database,M.exec(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      full_name TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('owner', 'manager', 'cashier', 'kitchen', 'accountant') OR role LIKE 'r\\_%' ESCAPE '\\'),
      pin TEXT,
      active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      color TEXT,
      active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS menu_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL REFERENCES categories(id),
      name TEXT NOT NULL,
      description TEXT,
      price_cents INTEGER NOT NULL,
      image_path TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0,
      available INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS ingredients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      unit TEXT NOT NULL,
      stock_qty REAL NOT NULL DEFAULT 0,
      low_stock_threshold REAL,
      cost_per_unit_cents INTEGER
    );

    CREATE TABLE IF NOT EXISTS recipes (
      menu_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      PRIMARY KEY (menu_item_id, ingredient_id)
    );

    -- A SIZE can carry its own recipe (a large uses a different cup, not 1.5
    -- cups). A size with no rows here falls back to the item's base recipe, so
    -- nothing changes for shops that don't use it. Sibling table, not a column
    -- on recipes, because recipes' primary key is (menu_item_id, ingredient_id)
    -- and per-size rows would collide with the base row.
    CREATE TABLE IF NOT EXISTS variant_recipes (
      variant_id INTEGER NOT NULL REFERENCES menu_variants(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      entry_qty REAL,
      entry_unit TEXT,
      PRIMARY KEY (variant_id, ingredient_id)
    );

    -- An ADD-ON can consume stock too ("extra cheese" is a slice of cheese).
    -- No rows = deducts nothing, which is how add-ons behaved before.
    -- TAKEOUT PACKAGING (v1.1.80): the bag and the sleeve, consumed only
    -- when the order's type is takeout or delivery. No rows = nothing.
    CREATE TABLE IF NOT EXISTS takeout_recipes (
      menu_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      entry_qty REAL,
      entry_unit TEXT,
      PRIMARY KEY (menu_item_id, ingredient_id)
    );

    CREATE TABLE IF NOT EXISTS addon_recipes (
      modifier_id INTEGER NOT NULL REFERENCES modifiers_library(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      entry_qty REAL,
      entry_unit TEXT,
      PRIMARY KEY (modifier_id, ingredient_id)
    );

    -- A STOCK ITEM the shop makes itself (sauce, syrup, cold brew) carries its
    -- own recipe: what ONE unit of it consumes. This is what lets Prep ask a
    -- single question. Cloud twin: migration 0076.
    CREATE TABLE IF NOT EXISTS prep_recipes (
      output_id INTEGER NOT NULL REFERENCES ingredients(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      entry_qty REAL,
      entry_unit TEXT,
      PRIMARY KEY (output_id, ingredient_id),
      CHECK (output_id <> ingredient_id)
    );

    CREATE TABLE IF NOT EXISTS components (
      parent_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
      child_id INTEGER NOT NULL REFERENCES menu_items(id),
      qty REAL NOT NULL,
      PRIMARY KEY (parent_id, child_id)
    );

    CREATE TABLE IF NOT EXISTS stock_movements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty_delta REAL NOT NULL,
      reason TEXT NOT NULL,
      reference_id INTEGER,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_number TEXT UNIQUE NOT NULL,
      status TEXT NOT NULL CHECK (status IN ('open', 'sent', 'ready', 'paid', 'voided')),
      order_type TEXT NOT NULL CHECK (order_type IN ('dine_in', 'takeout', 'delivery')),
      table_number TEXT,
      subtotal_cents INTEGER NOT NULL DEFAULT 0,
      discount_cents INTEGER NOT NULL DEFAULT 0,
      discount_reason TEXT,
      tax_cents INTEGER NOT NULL DEFAULT 0,
      total_cents INTEGER NOT NULL DEFAULT 0,
      payment_method TEXT,
      cashier_id INTEGER REFERENCES users(id),
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      paid_at TEXT,
      voided_at TEXT,
      voided_by INTEGER REFERENCES users(id),
      void_reason TEXT
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      menu_item_id INTEGER NOT NULL REFERENCES menu_items(id),
      name_snapshot TEXT NOT NULL,
      price_cents_snapshot INTEGER NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1,
      notes TEXT,
      kitchen_status TEXT NOT NULL DEFAULT 'pending' CHECK (kitchen_status IN ('pending', 'in_progress', 'done'))
    );

    CREATE TABLE IF NOT EXISTS activity_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER REFERENCES users(id),
      user_name TEXT,
      role TEXT,
      action TEXT NOT NULL,
      target_type TEXT,
      target_id INTEGER,
      details TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS timecards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      clock_in TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      clock_out TEXT,
      duration_minutes INTEGER,
      notes TEXT
    );

    -- Staff schedule / roster (who works when).
    CREATE TABLE IF NOT EXISTS schedules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      work_date TEXT NOT NULL,
      start_time TEXT,
      end_time TEXT,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS payment_types (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      code TEXT NOT NULL UNIQUE,
      sort_order INTEGER NOT NULL DEFAULT 0,
      color TEXT,
      active INTEGER NOT NULL DEFAULT 1
    );

    -- WHO ELSE SELLS YOUR FOOD (0192, 16 Sep 2026). Grab and foodpanda take
    -- 20-30% before remitting, and until now nothing recorded that: a P500
    -- GrabFood order went into the books as P500 earned. The rate lives per
    -- shop because every merchant negotiates its own.
    CREATE TABLE IF NOT EXISTS delivery_platforms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      commission_pct REAL NOT NULL DEFAULT 0,
      commission_vat_pct REAL NOT NULL DEFAULT 12,
      collects_payment INTEGER NOT NULL DEFAULT 1,
      price_uplift_pct REAL NOT NULL DEFAULT 0,
      color TEXT,
      active INTEGER NOT NULL DEFAULT 1,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS predefined_tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL,
      kind TEXT NOT NULL CHECK (kind IN ('table', 'takeout', 'delivery', 'other')),
      sort_order INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS inventory_counts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      status TEXT NOT NULL CHECK (status IN ('open', 'applied', 'cancelled')),
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      applied_at TEXT,
      notes TEXT
    );

    CREATE TABLE IF NOT EXISTS inventory_count_items (
      count_id INTEGER NOT NULL REFERENCES inventory_counts(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      expected_qty REAL NOT NULL,
      counted_qty REAL,
      variance_qty REAL,
      PRIMARY KEY (count_id, ingredient_id)
    );

    CREATE TABLE IF NOT EXISTS role_permissions (
      role TEXT NOT NULL,
      capability TEXT NOT NULL,
      allowed INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (role, capability)
    );

    CREATE TABLE IF NOT EXISTS modifiers_library (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL UNIQUE,
      category TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS shifts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      opened_by INTEGER REFERENCES users(id),
      opened_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      starting_cash_cents INTEGER NOT NULL DEFAULT 0,
      closed_at TEXT,
      closed_by INTEGER REFERENCES users(id),
      counted_cash_cents INTEGER,
      expected_cash_cents INTEGER,
      variance_cents INTEGER,
      notes TEXT,
      status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed'))
    );

    -- One row per shift BREAK (v1.1.66, cloud twin: 0081). The drawer is handed
    -- over with a count at both ends: the gap at pause is the cashier's own
    -- variance, the gap at resume is what she accepts back. Two cashiers on one
    -- till are never answerable for each other's cash.
    CREATE TABLE IF NOT EXISTS shift_breaks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      shift_id INTEGER NOT NULL REFERENCES shifts(id) ON DELETE CASCADE,
      paused_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      paused_by INTEGER REFERENCES users(id),
      pause_expected_cents INTEGER,
      pause_counted_cents INTEGER,
      pause_variance_cents INTEGER,
      resumed_at TEXT,
      resumed_by INTEGER REFERENCES users(id),
      resume_expected_cents INTEGER,
      resume_counted_cents INTEGER,
      adjust_cents INTEGER,
      cover_shift_id INTEGER REFERENCES shifts(id)
    );

    -- v1.1.67 (cloud twin: 0082). Every recipe as it stood between two
    -- moments. Editing a recipe used to rewrite the ingredient breakdown of
    -- periods that had ALREADY been reported: the totals came from the stock
    -- ledger and stayed put, but the explanation underneath them changed.
    -- The lines column is the whole ingredient list as JSON, not a diff, so
    -- reading an old report never means replaying a chain of edits.
    CREATE TABLE IF NOT EXISTS recipe_versions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      scope TEXT NOT NULL,               -- item | variant | addon | combo
      ref_id INTEGER NOT NULL,
      effective_from TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      effective_to TEXT,                 -- NULL = in force now
      lines TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_recipe_versions ON recipe_versions (scope, ref_id, effective_from);

    -- v1.1.67 (cloud twin: 0082). Start of Day / End of Day. The trading day
    -- is a thing with a start and an end, not an inference from the clock, so
    -- a shop that trades past midnight keeps one day's figures together.
    -- WHERE THE CASH IS, once it leaves the drawer (v1.1.72). The customer's
    -- chain: Reconciled -> Endorsed to Manager -> In Vault -> Deposited /
    -- Picked Up, "including the amount, date/time, and responsible employee",
    -- so cash can never be unaccounted for between the count and the bank.
    -- A row is born when a shift closes (only when the shop switches the
    -- feature on) and every step stamps who and when.
    CREATE TABLE IF NOT EXISTS cash_custody (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      shift_id INTEGER REFERENCES shifts(id),
      amount_cents INTEGER NOT NULL,
      state TEXT NOT NULL DEFAULT 'with_manager'
        CHECK (state IN ('with_manager', 'in_vault', 'deposited', 'picked_up')),
      from_user INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      vault_at TEXT, vault_by INTEGER REFERENCES users(id),
      settled_at TEXT, settled_by INTEGER REFERENCES users(id),
      settle_notes TEXT
    );

    -- A MATCH IS KEPT (v1.3.8). A shop asked to save every reconciled payment so a
    -- whole month can be exported later. One row per PAYMENT a wallet statement was
    -- matched against - kept per payment, not per date range, so an export
    -- of the whole month shows the weeks that were reconciled one at a time.
    -- Not money: the payment rows are untouched, this is a mark beside them.
    CREATE TABLE IF NOT EXISTS payment_reconciliations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      method TEXT NOT NULL,
      statement_ref TEXT,
      statement_day TEXT,
      statement_amount_cents INTEGER,
      matched_by TEXT,
      statement_label TEXT,
      reconciled_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      reconciled_by INTEGER REFERENCES users(id),
      UNIQUE (order_id, method)
    );

    CREATE TABLE IF NOT EXISTS business_days (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      day_date TEXT NOT NULL,
      opened_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      opened_by INTEGER REFERENCES users(id),
      closed_at TEXT,
      closed_by INTEGER REFERENCES users(id),
      status TEXT NOT NULL DEFAULT 'open',
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE UNIQUE INDEX IF NOT EXISTS idx_business_days_one_open
      ON business_days (status) WHERE status = 'open';

    CREATE TABLE IF NOT EXISTS upsell_pairs (
      trigger_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
      suggested_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
      PRIMARY KEY (trigger_item_id, suggested_item_id)
    );

    -- Petty cash taken out of / put into the drawer mid-shift (pay the delivery
    -- guy, buy milk, drop excess to the safe, etc.). Feeds shift reconciliation.
    CREATE TABLE IF NOT EXISTS cash_movements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      shift_id INTEGER NOT NULL REFERENCES shifts(id),
      kind TEXT NOT NULL CHECK (kind IN ('in', 'out')),
      amount_cents INTEGER NOT NULL,
      reason TEXT,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Split payments: one row per tender on an order (cash + GCash on one bill, etc.).
    CREATE TABLE IF NOT EXISTS order_payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      method TEXT NOT NULL,
      amount_cents INTEGER NOT NULL,
      tendered_cents INTEGER,
      change_cents INTEGER,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Refunds / returns against a paid order (partial or full).
    CREATE TABLE IF NOT EXISTS order_refunds (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id),
      amount_cents INTEGER NOT NULL,
      reason TEXT,
      restocked INTEGER NOT NULL DEFAULT 0,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Suppliers + purchase orders + receiving (with weighted-average costing).
    CREATE TABLE IF NOT EXISTS suppliers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      contact TEXT,
      phone TEXT,
      notes TEXT,
      active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS purchase_orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      supplier_id INTEGER REFERENCES suppliers(id),
      status TEXT NOT NULL CHECK (status IN ('draft', 'ordered', 'received', 'cancelled')),
      notes TEXT,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      ordered_at TEXT,
      received_at TEXT,
      total_cost_cents INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS purchase_order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      po_id INTEGER NOT NULL REFERENCES purchase_orders(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      packs REAL NOT NULL DEFAULT 1,
      units_per_pack REAL NOT NULL DEFAULT 1,
      cost_per_pack_cents INTEGER NOT NULL DEFAULT 0,
      expiry TEXT
    );
    -- Stock batches carry expiry dates (for expiring-soon alerts). Deduction still
    -- runs on the aggregate ingredients.stock_qty; batches are for visibility.
    CREATE TABLE IF NOT EXISTS stock_batches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      expiry TEXT,
      received_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      po_id INTEGER
    );

    -- Dining tables for the floor map. label matches orders.table_number.
    CREATE TABLE IF NOT EXISTS dining_tables (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL,
      seats INTEGER NOT NULL DEFAULT 2,
      sort_order INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1
    );

    -- Table reservations / bookings.
    CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT,
      party_size INTEGER NOT NULL DEFAULT 2,
      res_date TEXT NOT NULL,
      res_time TEXT,
      table_label TEXT,
      status TEXT NOT NULL DEFAULT 'booked' CHECK (status IN ('booked', 'seated', 'cancelled', 'no_show')),
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Operating expenses (rent, utilities, salaries, etc.) for the P&L.
    CREATE TABLE IF NOT EXISTS expense_categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      active INTEGER NOT NULL DEFAULT 1
    );
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER REFERENCES expense_categories(id),
      amount_cents INTEGER NOT NULL,
      payee TEXT,
      notes TEXT,
      expense_date TEXT NOT NULL,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Discount codes / coupons.
    CREATE TABLE IF NOT EXISTS coupons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT NOT NULL UNIQUE,
      kind TEXT NOT NULL CHECK (kind IN ('percent', 'amount')),
      value INTEGER NOT NULL,
      active INTEGER NOT NULL DEFAULT 1,
      max_uses INTEGER,
      used_count INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Prepaid gift cards / store credit (local; redeemed as a payment method).
    CREATE TABLE IF NOT EXISTS gift_cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT NOT NULL UNIQUE,
      balance_cents INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Loyalty / regulars: simple local customer records + a stamp counter.
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT,
      stamps INTEGER NOT NULL DEFAULT 0,
      total_visits INTEGER NOT NULL DEFAULT 0,
      total_spent_cents INTEGER NOT NULL DEFAULT 0,
      free_redeemed INTEGER NOT NULL DEFAULT 0,
      notes TEXT,
      active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS menu_variants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      menu_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
      label TEXT NOT NULL,
      price_delta_cents INTEGER NOT NULL DEFAULT 0,
      cost_delta_cents INTEGER NOT NULL DEFAULT 0,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    -- Which add-ons ONE item offers (14 Sep 2026). The cloud engine has had
    -- this since v1.1.63 (menu_item_addons); on this engine every item showed
    -- the whole library, so an espresso offered "Extra rice" and "No onions".
    -- No rows for an item = the whole library, exactly as before.
    CREATE TABLE IF NOT EXISTS menu_item_addons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      menu_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
      modifier_id INTEGER NOT NULL REFERENCES modifiers_library(id) ON DELETE CASCADE,
      required INTEGER NOT NULL DEFAULT 0,
      sort_order INTEGER NOT NULL DEFAULT 0,
      UNIQUE (menu_item_id, modifier_id)
    );

    -- Purchase returns: stock sent BACK to a supplier (spoiled / wrong / over-delivery).
    -- Decrements ingredient stock and records the credit owed by the supplier.
    CREATE TABLE IF NOT EXISTS purchase_returns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      supplier_id INTEGER REFERENCES suppliers(id),
      total_cents INTEGER NOT NULL DEFAULT 0,
      reason TEXT,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS purchase_return_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      return_id INTEGER NOT NULL REFERENCES purchase_returns(id) ON DELETE CASCADE,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      unit_cost_cents INTEGER NOT NULL DEFAULT 0
    );

    -- Quotations / estimates (e.g. catering, large pre-orders). A quote can be
    -- converted into a real order once the customer confirms.
    CREATE TABLE IF NOT EXISTS quotations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      number TEXT,
      customer_id INTEGER REFERENCES customers(id),
      customer_name TEXT,
      status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'accepted', 'declined', 'converted')),
      valid_until TEXT,
      notes TEXT,
      subtotal_cents INTEGER NOT NULL DEFAULT 0,
      total_cents INTEGER NOT NULL DEFAULT 0,
      converted_order_id INTEGER REFERENCES orders(id),
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS quotation_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      quotation_id INTEGER NOT NULL REFERENCES quotations(id) ON DELETE CASCADE,
      menu_item_id INTEGER REFERENCES menu_items(id),
      name TEXT NOT NULL,
      qty REAL NOT NULL DEFAULT 1,
      unit_price_cents INTEGER NOT NULL DEFAULT 0
    );

    -- Storage locations + stock transfer log. With one site this is a movement
    -- record (where stock physically went); it becomes branch-to-branch when a
    -- second location is added.
    CREATE TABLE IF NOT EXISTS locations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1
    );
    CREATE TABLE IF NOT EXISTS stock_transfers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ingredient_id INTEGER NOT NULL REFERENCES ingredients(id),
      qty REAL NOT NULL,
      from_location_id INTEGER REFERENCES locations(id),
      to_location_id INTEGER REFERENCES locations(id),
      note TEXT,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Payroll: a saved run for a pay period + one computed line per employee.
    CREATE TABLE IF NOT EXISTS payroll_runs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      period_from TEXT NOT NULL,
      period_to TEXT NOT NULL,
      ot_threshold_hours REAL NOT NULL DEFAULT 8,
      ot_multiplier REAL NOT NULL DEFAULT 1.25,
      notes TEXT,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS payroll_lines (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      run_id INTEGER NOT NULL REFERENCES payroll_runs(id) ON DELETE CASCADE,
      user_id INTEGER REFERENCES users(id),
      full_name TEXT NOT NULL,
      role TEXT,
      days_worked INTEGER NOT NULL DEFAULT 0,
      regular_minutes INTEGER NOT NULL DEFAULT 0,
      ot_minutes INTEGER NOT NULL DEFAULT 0,
      wage_cents_per_hour INTEGER NOT NULL DEFAULT 0,
      regular_pay_cents INTEGER NOT NULL DEFAULT 0,
      ot_pay_cents INTEGER NOT NULL DEFAULT 0,
      gross_cents INTEGER NOT NULL DEFAULT 0,
      allowance_cents INTEGER NOT NULL DEFAULT 0,
      sss_cents INTEGER NOT NULL DEFAULT 0,
      philhealth_cents INTEGER NOT NULL DEFAULT 0,
      pagibig_cents INTEGER NOT NULL DEFAULT 0,
      tax_cents INTEGER NOT NULL DEFAULT 0,
      other_deduction_cents INTEGER NOT NULL DEFAULT 0,
      net_cents INTEGER NOT NULL DEFAULT 0,
      note TEXT
    );

    -- Incident logbook: accidents, customer complaints, equipment failures,
    -- security events… anything the owner/manager should have a paper trail for.
    CREATE TABLE IF NOT EXISTS incidents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      happened_at TEXT NOT NULL,
      kind TEXT NOT NULL DEFAULT 'other',
      severity TEXT NOT NULL DEFAULT 'minor' CHECK (severity IN ('minor', 'moderate', 'major')),
      title TEXT NOT NULL,
      details TEXT,
      people TEXT,
      action_taken TEXT,
      status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'resolved')),
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      resolved_at TEXT,
      resolved_by INTEGER REFERENCES users(id)
    );

    -- ---------------------------------------------------------------------
    -- THE TAMPER-EVIDENT SALES CHAIN (0144's desktop twin).
    --
    -- One row per financial event, each carrying the hash of the one before
    -- it, so a sale that is later edited or deleted breaks the chain at a
    -- provable point. Events, never rows: a void appends a second entry
    -- rather than changing the first.
    --
    -- SQLite cannot refuse an UPDATE the way Postgres does with a trigger, and
    -- pretending otherwise would be theatre - anyone with the .db file can
    -- rewrite anything in it. What it CAN do, and what actually matters, is
    -- make the rewrite show up: verify() recomputes every fingerprint and says
    -- where the first one stops matching.
    -- ---------------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS ledger_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      seq INTEGER NOT NULL UNIQUE,
      kind TEXT NOT NULL CHECK (kind IN ('sale', 'void', 'refund')),
      order_id INTEGER,
      or_number INTEGER,
      amount_cents INTEGER NOT NULL,
      occurred_at TEXT NOT NULL,
      items_digest TEXT NOT NULL,
      prev_hash TEXT NOT NULL,
      hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Single row. Holds the next sequence number and the last hash, so an
    -- append never has to scan the chain to find its own tail.
    CREATE TABLE IF NOT EXISTS ledger_head (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      seq INTEGER NOT NULL DEFAULT 0,
      last_hash TEXT NOT NULL DEFAULT ''
    );

    -- The numbered end-of-day reading. One per trading date.
    CREATE TABLE IF NOT EXISTS z_readings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      z_number INTEGER NOT NULL UNIQUE,
      business_date TEXT NOT NULL UNIQUE,
      taken_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      taken_by INTEGER REFERENCES users(id),
      txn_count INTEGER NOT NULL,
      gross_cents INTEGER NOT NULL,
      discount_cents INTEGER NOT NULL,
      net_cents INTEGER NOT NULL,
      vatable_cents INTEGER NOT NULL,
      vat_cents INTEGER NOT NULL,
      vat_exempt_cents INTEGER NOT NULL,
      void_count INTEGER NOT NULL,
      void_cents INTEGER NOT NULL,
      refund_count INTEGER NOT NULL,
      refund_cents INTEGER NOT NULL,
      first_or INTEGER,
      last_or INTEGER,
      grand_before_cents INTEGER NOT NULL,
      grand_after_cents INTEGER NOT NULL,
      ledger_seq_from INTEGER,
      ledger_seq_to INTEGER,
      ledger_hash_to TEXT,
      vat_status TEXT NOT NULL
    );

    -- ===================================================================
    -- THE 10 SEP 2026 BATCH. Every table here stays EMPTY unless the shop
    -- switches the matching feature on in Settings -> Features. Cloud twin:
    -- migration 0156. Cross-branch stock (branch_stock_moves over there) has
    -- no desktop equivalent: the desktop app is one shop.
    -- ===================================================================

    -- Names at the door, and how long each has been standing there.
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      party_size INTEGER NOT NULL DEFAULT 2,
      phone TEXT,
      note TEXT,
      status TEXT NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting','seated','left')),
      table_label TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      seated_at TEXT
    );

    -- Ask before you buy: somebody who cannot commit the shop's money writes
    -- down what they need, somebody who can says yes, and the yes becomes a
    -- purchase order.
    CREATE TABLE IF NOT EXISTS stock_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','ordered')),
      note TEXT,
      supplier_id INTEGER REFERENCES suppliers(id),
      po_id INTEGER,
      created_by INTEGER REFERENCES users(id),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      decided_by INTEGER REFERENCES users(id),
      decided_at TEXT,
      decided_note TEXT
    );
    CREATE TABLE IF NOT EXISTS stock_request_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      request_id INTEGER NOT NULL REFERENCES stock_requests(id) ON DELETE CASCADE,
      ingredient_id INTEGER,
      -- The NAME is kept beside the id so a request still reads correctly
      -- after somebody renames or retires the ingredient. A request is a
      -- record of what was asked for on the day.
      name TEXT NOT NULL,
      unit TEXT,
      qty REAL NOT NULL DEFAULT 0,
      note TEXT
    );

    -- A daily reading with a name against it. Never edited: a wrong reading is
    -- followed by a right one, which is what a signed log means.
    CREATE TABLE IF NOT EXISTS temp_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      unit_name TEXT NOT NULL,
      temp_c REAL NOT NULL,
      taken_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      taken_by INTEGER REFERENCES users(id),
      note TEXT
    );

    -- Rent on the 5th, wifi on the 15th.
    CREATE TABLE IF NOT EXISTS recurring_bills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount_cents INTEGER NOT NULL DEFAULT 0,
      account TEXT,
      day_of_month INTEGER NOT NULL DEFAULT 1,
      every_months INTEGER NOT NULL DEFAULT 1,
      active INTEGER NOT NULL DEFAULT 1,
      note TEXT,
      last_paid_on TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Vale. Money already handed over, so a row is never deleted - it is
    -- repaid, in whole or in part, and the balance is what payroll deducts.
    CREATE TABLE IF NOT EXISTS staff_advances (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      amount_cents INTEGER NOT NULL,
      repaid_cents INTEGER NOT NULL DEFAULT 0,
      reason TEXT,
      paid_from TEXT NOT NULL DEFAULT 'drawer' CHECK (paid_from IN ('drawer','bank','other')),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      created_by INTEGER REFERENCES users(id),
      settled_at TEXT
    );

    -- The days the law pays differently.
    CREATE TABLE IF NOT EXISTS holidays (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      holiday_date TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      kind TEXT NOT NULL DEFAULT 'regular' CHECK (kind IN ('regular','special'))
    );

    -- 1.5.0 (0222): days off, market prices, and new-hire sign-offs.
    CREATE TABLE IF NOT EXISTS leave_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      kind TEXT NOT NULL DEFAULT 'vacation' CHECK (kind IN ('vacation','sick','emergency','other')),
      from_date TEXT NOT NULL,
      to_date TEXT NOT NULL,
      days REAL NOT NULL DEFAULT 1,
      note TEXT,
      status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','cancelled')),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      decided_by INTEGER REFERENCES users(id),
      decided_at TEXT
    );
    CREATE TABLE IF NOT EXISTS market_prices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ingredient_id INTEGER,
      item_name TEXT NOT NULL,
      price_cents INTEGER NOT NULL,
      qty REAL NOT NULL DEFAULT 1,
      unit TEXT NOT NULL DEFAULT 'kg',
      place TEXT,
      bought_on TEXT NOT NULL DEFAULT (date('now','localtime')),
      note TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS training_signoffs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      item_key TEXT NOT NULL,
      signed_by INTEGER REFERENCES users(id),
      signed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE (user_id, item_key)
    );

    CREATE TABLE IF NOT EXISTS shift_swaps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      schedule_id INTEGER NOT NULL,
      from_user INTEGER NOT NULL REFERENCES users(id),
      to_user INTEGER NOT NULL REFERENCES users(id),
      status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','cancelled')),
      note TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      decided_by INTEGER REFERENCES users(id),
      decided_at TEXT
    );

    -- role_permissions is already keyed by a plain role NAME, so a role a shop
    -- writes for itself needs no new permission machinery - only somewhere to
    -- record that the name exists and what it is called on screen.
    CREATE TABLE IF NOT EXISTS custom_roles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT NOT NULL UNIQUE,
      label TEXT NOT NULL,
      based_on TEXT NOT NULL DEFAULT 'cashier',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS csat_responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER,
      score INTEGER NOT NULL,
      comment TEXT,
      source TEXT NOT NULL DEFAULT 'screen',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_ledger_seq ON ledger_entries(seq);
    CREATE INDEX IF NOT EXISTS idx_ledger_order ON ledger_entries(order_id);
    CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
    CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
    CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
    CREATE INDEX IF NOT EXISTS idx_activity_user ON activity_log(user_id);
    CREATE INDEX IF NOT EXISTS idx_activity_created ON activity_log(created_at);
    CREATE INDEX IF NOT EXISTS idx_timecards_user ON timecards(user_id);
    CREATE INDEX IF NOT EXISTS idx_timecards_in ON timecards(clock_in);
  `),R(M);for(let e of[`CREATE INDEX IF NOT EXISTS idx_order_payments_order ON order_payments(order_id)`,`CREATE INDEX IF NOT EXISTS idx_order_refunds_order ON order_refunds(order_id)`,`CREATE INDEX IF NOT EXISTS idx_stock_movements_ing ON stock_movements(ingredient_id, created_at)`,`CREATE INDEX IF NOT EXISTS idx_cash_movements_shift ON cash_movements(shift_id)`,`CREATE INDEX IF NOT EXISTS idx_orders_paid_at ON orders(paid_at)`,`CREATE INDEX IF NOT EXISTS idx_orders_shift ON orders(shift_id)`])try{M.exec(e)}catch(e){}if(U(M),Z(),!globalThis.__EMBER_DEFER_SAVES__)try{M.exec(`PRAGMA foreign_keys = OFF`)}catch(e){}return M}function R(e){var t,n,r,i,a;let o=(t,n,r)=>{var i,a;((i=(a=e.exec(`PRAGMA table_info(${t})`)[0])==null?void 0:a.values.map(e=>e[1]))==null?[]:i).includes(n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r}`)};o(`orders`,`discount_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`orders`,`discount_reason`,`TEXT`),o(`orders`,`voided_at`,`TEXT`),o(`orders`,`voided_by`,`INTEGER`),o(`orders`,`void_reason`,`TEXT`),o(`orders`,`source`,`TEXT`),o(`orders`,`platform_ref`,`TEXT`),o(`orders`,`bir_invoice_no`,`TEXT`),o(`orders`,`commission_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`orders`,`customer_note`,`TEXT`),o(`orders`,`customer_phone`,`TEXT`),o(`orders`,`delivery_address`,`TEXT`),o(`menu_items`,`cost_cents`,`INTEGER`),o(`menu_items`,`sold_by`,`TEXT NOT NULL DEFAULT 'each'`),o(`menu_items`,`track_stock`,`INTEGER NOT NULL DEFAULT 0`),o(`menu_items`,`is_composite`,`INTEGER NOT NULL DEFAULT 0`),o(`menu_items`,`color`,`TEXT`),o(`menu_items`,`shape`,`TEXT`),o(`orders`,`shift_id`,`INTEGER`),o(`order_items`,`variant_id`,`INTEGER`),o(`order_items`,`variant_label`,`TEXT`),o(`orders`,`cash_tendered_cents`,`INTEGER`),o(`orders`,`change_cents`,`INTEGER`),o(`orders`,`customer_id`,`INTEGER`),o(`orders`,`refunded_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`wage_cents_per_hour`,`INTEGER NOT NULL DEFAULT 0`),o(`orders`,`tip_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`menu_items`,`barcode`,`TEXT`),o(`orders`,`or_number`,`INTEGER`),o(`timecards`,`break_minutes`,`INTEGER NOT NULL DEFAULT 0`),o(`timecards`,`break_start`,`TEXT`),o(`customers`,`birthday`,`TEXT`),o(`customers`,`no_message`,`INTEGER NOT NULL DEFAULT 0`),o(`customers`,`last_messaged_at`,`TEXT`),o(`ingredients`,`brand`,`TEXT`),o(`ingredients`,`supplier`,`TEXT`),o(`ingredients`,`pack_size`,`TEXT`),o(`menu_items`,`tax_exempt`,`INTEGER NOT NULL DEFAULT 0`),o(`menu_items`,`zero_rated`,`INTEGER NOT NULL DEFAULT 0`),o(`menu_items`,`addon_max_picks`,`INTEGER`),o(`menu_variants`,`addon_max_picks`,`INTEGER`),o(`menu_variants`,`sold_out`,`INTEGER NOT NULL DEFAULT 0`),o(`menu_items`,`no_addons`,`INTEGER NOT NULL DEFAULT 0`),o(`order_items`,`modifier_ids`,`TEXT`),o(`stock_movements`,`user_id`,`INTEGER`),o(`expenses`,`category_name_snapshot`,`TEXT`),o(`expenses`,`category_kind_snapshot`,`TEXT`),o(`expenses`,`reviewed_at`,`TEXT`),o(`expenses`,`reviewed_by`,`INTEGER`),o(`menu_items`,`addon_min_picks`,`INTEGER`),o(`menu_variants`,`addon_min_picks`,`INTEGER`),o(`cash_custody`,`received_at`,`TEXT`),o(`cash_custody`,`received_by`,`INTEGER`),o(`cash_custody`,`verified_at`,`TEXT`),o(`cash_custody`,`verified_by`,`INTEGER`),o(`expenses`,`voided_at`,`TEXT`),o(`expenses`,`voided_by`,`INTEGER`),o(`expenses`,`void_reason`,`TEXT`),o(`orders`,`ready_at`,`TEXT`),o(`orders`,`sent_at`,`TEXT`);try{M.exec(`CREATE TRIGGER IF NOT EXISTS orders_sent_at_ins AFTER INSERT ON orders WHEN NEW.status = 'sent' AND NEW.sent_at IS NULL BEGIN UPDATE orders SET sent_at = CURRENT_TIMESTAMP WHERE id = NEW.id; END`),M.exec(`CREATE TRIGGER IF NOT EXISTS orders_sent_at_upd AFTER UPDATE OF status ON orders WHEN NEW.status = 'sent' AND OLD.status IS NOT 'sent' BEGIN UPDATE orders SET sent_at = CURRENT_TIMESTAMP WHERE id = NEW.id; END`)}catch(e){}o(`shifts`,`paused_at`,`TEXT`),o(`shifts`,`covers_shift_id`,`INTEGER`),o(`orders`,`business_date`,`TEXT`),o(`orders`,`business_day_id`,`INTEGER`),o(`purchase_orders`,`received_by`,`INTEGER`),o(`purchase_orders`,`payment_terms`,`TEXT`),o(`purchase_orders`,`paid_at`,`TEXT`),o(`purchase_orders`,`paid_via`,`TEXT`),o(`expense_categories`,`kind`,`TEXT NOT NULL DEFAULT 'operating'`),o(`expense_categories`,`spread_basis`,`TEXT NOT NULL DEFAULT 'calendar'`),o(`expense_categories`,`is_payroll`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`must_change_pin`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`def_allowance_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`def_sss_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`def_philhealth_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`def_pagibig_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`def_tax_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`users`,`def_other_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`modifiers_library`,`price_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`modifiers_library`,`cost_cents`,`INTEGER`),o(`categories`,`station`,`TEXT`),o(`payroll_lines`,`tip_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`recipes`,`entry_qty`,`REAL`),o(`recipes`,`entry_unit`,`TEXT`),o(`ingredients`,`pack_label`,`TEXT`),o(`ingredients`,`pack_qty`,`REAL`),o(`ingredients`,`image_path`,`TEXT`),o(`ingredients`,`barcode`,`TEXT`),o(`ingredients`,`made_in_house`,`INTEGER DEFAULT 0`),o(`ingredients`,`prep_batch_qty`,`REAL`),o(`ingredients`,`kind`,`TEXT NOT NULL DEFAULT 'food'`),o(`orders`,`collected_at`,`TEXT`),o(`orders`,`pickup_label`,`TEXT`),o(`inventory_counts`,`audited_at`,`TEXT`),o(`inventory_counts`,`audited_by`,`TEXT`),o(`inventory_counts`,`snapshot_deferred`,`INTEGER NOT NULL DEFAULT 0`),o(`order_payments`,`ref`,`TEXT`),o(`order_payments`,`shift_id`,`INTEGER`),o(`cash_movements`,`source`,`TEXT`),o(`cash_movements`,`ref_id`,`INTEGER`);try{e.exec(`UPDATE ingredients SET unit = 'piece' WHERE unit IN ('each','pc')`),e.exec(`UPDATE recipes SET entry_unit = 'piece' WHERE entry_unit IN ('each','pc')`)}catch(e){}o(`menu_items`,`extra_cost_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`menu_items`,`retired_at`,`TEXT`),o(`ingredients`,`retired_at`,`TEXT`),o(`purchase_order_items`,`received_packs`,`REAL`),o(`shifts`,`left_in_drawer_cents`,`INTEGER`),o(`cash_custody`,`split_from`,`INTEGER`),o(`orders`,`service_charge_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`orders`,`deposit_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`orders`,`service_charge_waived`,`INTEGER NOT NULL DEFAULT 0`),o(`orders`,`discount_pct`,`REAL`),o(`orders`,`price_locked`,`INTEGER DEFAULT 0`),o(`order_refunds`,`shift_id`,`INTEGER`),o(`order_refunds`,`cash_cents`,`INTEGER`),o(`orders`,`pickup_at`,`TEXT`),o(`orders`,`promised_at`,`TEXT`),o(`orders`,`buyer_name`,`TEXT`),o(`orders`,`buyer_address`,`TEXT`),o(`orders`,`buyer_tin`,`TEXT`),o(`order_items`,`course`,`INTEGER NOT NULL DEFAULT 1`),o(`order_items`,`fired_at`,`TEXT`),o(`order_items`,`refunded_qty`,`REAL NOT NULL DEFAULT 0`),o(`order_items`,`restocked_qty`,`REAL NOT NULL DEFAULT 0`),o(`orders`,`loyalty_reversed`,`INTEGER NOT NULL DEFAULT 0`),o(`orders`,`coupon_counted`,`INTEGER NOT NULL DEFAULT 0`),o(`z_readings`,`senior_pwd_cents`,`INTEGER`),o(`z_readings`,`zero_rated_cents`,`INTEGER`),o(`menu_items`,`allergens`,`TEXT`),o(`menu_items`,`diet_tags`,`TEXT`),o(`menu_items`,`kcal`,`INTEGER`),o(`menu_items`,`protein_g`,`REAL`),o(`menu_items`,`fat_g`,`REAL`),o(`menu_items`,`carbs_g`,`REAL`),o(`suppliers`,`lead_time_days`,`INTEGER`),o(`suppliers`,`min_order_cents`,`INTEGER`),o(`suppliers`,`email`,`TEXT`),o(`ingredients`,`supplier_code`,`TEXT`),o(`purchase_orders`,`freight_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`purchase_orders`,`discount_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`purchase_order_items`,`discount_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`stock_batches`,`lot_code`,`TEXT`),o(`purchase_order_items`,`prev_unit_cost_cents`,`INTEGER`),o(`purchase_orders`,`unreceived_count`,`INTEGER NOT NULL DEFAULT 0`),o(`purchase_orders`,`unreceived_at`,`TEXT`),o(`purchase_orders`,`unreceived_by`,`INTEGER`),o(`purchase_orders`,`received_keyed_at`,`TEXT`),o(`stock_batches`,`received_at`,`TEXT`),o(`users`,`password_changed_at`,`TEXT`),o(`users`,`must_change_password`,`INTEGER NOT NULL DEFAULT 0`),o(`customers`,`last_stamp_at`,`TEXT`),o(`payroll_lines`,`holiday_minutes`,`INTEGER NOT NULL DEFAULT 0`),o(`payroll_lines`,`holiday_premium_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`recurring_bills`,`payments_total`,`INTEGER`),o(`recurring_bills`,`payments_made`,`INTEGER NOT NULL DEFAULT 0`),e.exec(`CREATE TABLE IF NOT EXISTS floor_plans (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    layout TEXT NOT NULL DEFAULT '{}',
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`),o(`dining_tables`,`seated_at`,`TEXT`),o(`dining_tables`,`guests`,`INTEGER`),o(`dining_tables`,`seated_by`,`INTEGER`),o(`dining_tables`,`cleared_at`,`TEXT`),o(`dining_tables`,`joined_to`,`TEXT`),o(`dining_tables`,`joined_at`,`TEXT`),e.exec(`CREATE TABLE IF NOT EXISTS supplier_profiles (
    id INTEGER PRIMARY KEY CHECK (id = 1), listed INTEGER NOT NULL DEFAULT 0, accepts_new INTEGER NOT NULL DEFAULT 1,
    display_name TEXT, about TEXT, categories TEXT NOT NULL DEFAULT '[]', area TEXT, city TEXT, lat REAL, lng REAL,
    phone TEXT, email TEXT, min_order_cents INTEGER NOT NULL DEFAULT 0, delivery_days TEXT NOT NULL DEFAULT '[1,2,3,4,5,6]',
    cutoff TEXT DEFAULT '17:00', lead_days INTEGER NOT NULL DEFAULT 1, delivery_fee_cents INTEGER NOT NULL DEFAULT 0,
    free_delivery_over_cents INTEGER NOT NULL DEFAULT 0, default_terms_days INTEGER NOT NULL DEFAULT 0,
    invoice_prefix TEXT, connect_code TEXT, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`),e.exec(`CREATE TABLE IF NOT EXISTS trade_catalog (
    menu_item_id INTEGER PRIMARY KEY, unit TEXT NOT NULL DEFAULT 'piece', case_size REAL, min_qty REAL NOT NULL DEFAULT 1,
    step_qty REAL NOT NULL DEFAULT 1, sku TEXT, listed INTEGER NOT NULL DEFAULT 1, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`),e.exec(`CREATE TABLE IF NOT EXISTS price_lists (
    id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, percent_off REAL NOT NULL DEFAULT 0, active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`),e.exec(`CREATE TABLE IF NOT EXISTS price_list_items (
    price_list_id INTEGER NOT NULL, menu_item_id INTEGER NOT NULL, price_cents INTEGER NOT NULL, PRIMARY KEY (price_list_id, menu_item_id))`),e.exec(`CREATE TABLE IF NOT EXISTS trade_accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, contact_name TEXT, phone TEXT, email TEXT, address TEXT, area TEXT,
    lat REAL, lng REAL, tin TEXT, terms_days INTEGER NOT NULL DEFAULT 0, credit_limit_cents INTEGER NOT NULL DEFAULT 0,
    price_list_id INTEGER, delivery_days TEXT, notes TEXT, standing TEXT, status TEXT NOT NULL DEFAULT 'active',
    linked_business_id INTEGER, portal_token TEXT, active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`),e.exec(`CREATE TABLE IF NOT EXISTS trade_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT, account_id INTEGER NOT NULL, seq INTEGER NOT NULL UNIQUE, order_no TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'placed', source TEXT NOT NULL DEFAULT 'supplier', delivery_date TEXT, notes TEXT, buyer_note TEXT,
    subtotal_cents INTEGER NOT NULL DEFAULT 0, discount_cents INTEGER NOT NULL DEFAULT 0, delivery_cents INTEGER NOT NULL DEFAULT 0,
    tax_pct REAL NOT NULL DEFAULT 0, tax_cents INTEGER NOT NULL DEFAULT 0, total_cents INTEGER NOT NULL DEFAULT 0,
    placed_at TEXT NOT NULL, confirmed_at TEXT, packed_at TEXT, out_at TEXT, delivered_at TEXT, cancelled_at TEXT, cancel_reason TEXT,
    received_by TEXT, invoice_seq INTEGER, invoice_no TEXT, invoiced_on TEXT, due_date TEXT, paid_cents INTEGER NOT NULL DEFAULT 0,
    paid_at TEXT, buyer_business_id INTEGER, buyer_ref TEXT, created_by INTEGER)`),e.exec(`CREATE TABLE IF NOT EXISTS trade_order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER NOT NULL, menu_item_id INTEGER, name TEXT NOT NULL, unit TEXT,
    qty REAL NOT NULL, qty_delivered REAL, price_cents INTEGER NOT NULL, taxable INTEGER NOT NULL DEFAULT 1, note TEXT)`),e.exec(`CREATE TABLE IF NOT EXISTS trade_payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT, account_id INTEGER NOT NULL, amount_cents INTEGER NOT NULL, method TEXT NOT NULL DEFAULT 'cash',
    ref TEXT, check_date TEXT, bounced_at TEXT, paid_on TEXT NOT NULL, note TEXT, allocations TEXT NOT NULL DEFAULT '[]',
    created_by INTEGER, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, voided_at TEXT)`),o(`trade_catalog`,`breaks`,`TEXT`),o(`trade_catalog`,`catch_weight`,`INTEGER NOT NULL DEFAULT 0`),o(`trade_catalog`,`container_name`,`TEXT`),o(`trade_catalog`,`container_deposit_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`trade_orders`,`credited_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`trade_orders`,`official_invoice_no`,`TEXT`),o(`trade_orders`,`edited_at`,`TEXT`),o(`trade_orders`,`standing_for`,`TEXT`),o(`trade_order_items`,`catch_weight`,`INTEGER NOT NULL DEFAULT 0`),o(`trade_order_items`,`changed`,`TEXT`),o(`supplier_profiles`,`hold_overdue_days`,`INTEGER NOT NULL DEFAULT 0`),o(`supplier_profiles`,`hold_over_limit`,`INTEGER NOT NULL DEFAULT 1`),e.exec(`CREATE TABLE IF NOT EXISTS trade_credits (
    id INTEGER PRIMARY KEY AUTOINCREMENT, account_id INTEGER NOT NULL, order_id INTEGER, kind TEXT NOT NULL DEFAULT 'other',
    source TEXT NOT NULL DEFAULT 'supplier', status TEXT NOT NULL DEFAULT 'approved', amount_cents INTEGER NOT NULL DEFAULT 0,
    lines TEXT, note TEXT, reply TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, decided_at TEXT, created_by INTEGER)`),e.exec(`CREATE TABLE IF NOT EXISTS trade_container_moves (
    id INTEGER PRIMARY KEY AUTOINCREMENT, account_id INTEGER NOT NULL, order_id INTEGER, container TEXT NOT NULL,
    out_qty INTEGER NOT NULL DEFAULT 0, back_qty INTEGER NOT NULL DEFAULT 0, deposit_cents INTEGER NOT NULL DEFAULT 0,
    note TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, created_by INTEGER)`),o(`trade_payments`,`unapplied_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`trade_credits`,`unapplied_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`trade_payments`,`held`,`INTEGER NOT NULL DEFAULT 0`),o(`trade_payments`,`cleared_on`,`TEXT`),o(`trade_orders`,`stock_moved_at`,`TEXT`),o(`trade_credits`,`restocked_at`,`TEXT`),o(`trade_credits`,`restocked_lines`,`TEXT`),o(`suppliers`,`ember_business_id`,`INTEGER`),o(`purchase_orders`,`share_token`,`TEXT`),o(`purchase_orders`,`supplier_reply`,`TEXT`),o(`purchase_orders`,`supplier_note`,`TEXT`),o(`purchase_orders`,`supplier_delivery_date`,`TEXT`),o(`purchase_orders`,`supplier_replied_at`,`TEXT`),o(`purchase_orders`,`supplier_lines`,`TEXT`),o(`reservations`,`occasion`,`TEXT`),o(`reservations`,`duration_min`,`INTEGER`),o(`reservations`,`email`,`TEXT`),o(`reservations`,`source`,`TEXT`),o(`reservations`,`arrived_at`,`TEXT`),o(`reservations`,`deposit_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`reservations`,`deposit_paid_cents`,`INTEGER NOT NULL DEFAULT 0`),o(`reservations`,`deposit_ref`,`TEXT`),e.exec(`CREATE TABLE IF NOT EXISTS money_back (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    kind TEXT NOT NULL CHECK (kind IN ('overpaid', 'void', 'refund')),
    way TEXT NOT NULL CHECK (way IN ('drawer', 'ewallet')),
    method TEXT NOT NULL DEFAULT 'qrph',
    via_provider INTEGER NOT NULL DEFAULT 0,
    amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
    shift_id INTEGER,
    cash_movement_id INTEGER,
    note TEXT,
    created_by INTEGER,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`);try{e.exec(`SELECT name FROM sqlite_master WHERE type='table' AND name='order_payments'`).length>0&&e.exec(`
        INSERT INTO order_payments (order_id, method, amount_cents, tendered_cents, change_cents, created_at)
        SELECT id, COALESCE(payment_method, 'unknown'), total_cents, cash_tendered_cents, change_cents, COALESCE(paid_at, created_at)
        FROM orders
        WHERE status = 'paid' AND id NOT IN (SELECT order_id FROM order_payments)
      `)}catch(e){}try{e.exec(`
      UPDATE orders SET business_date = date(COALESCE(
        (SELECT s.opened_at FROM shifts s WHERE s.id = orders.shift_id),
        orders.paid_at, orders.created_at), 'localtime')
      WHERE business_date IS NULL
    `)}catch(e){}let s=(t=e.exec(`SELECT value FROM settings WHERE key = 'currency_symbol'`)[0])==null||(t=t.values[0])==null?void 0:t[0],c=e.exec(`SELECT value FROM settings WHERE key = 'country'`),l=String((n=(r=c[0])==null||(r=r.values[0])==null?void 0:r[0])==null?``:n).trim().toUpperCase();s===`$`&&(l===``||l===`PH`)&&e.exec(`UPDATE settings SET value = '₱' WHERE key = 'currency_symbol'`);let u=((i=(a=e.exec(`SELECT id FROM users WHERE password_hash IS NULL OR password_hash = ''`)[0])==null?void 0:a.values)==null?[]:i).map(e=>e[0]);if(u.length>0){let t=V(`1234`),n=e.prepare(`UPDATE users SET password_hash = ?, must_change_pin = 1 WHERE id = ?`);for(let e of u)n.run([t,e]);n.free()}e.exec(`
    DELETE FROM stock_movements WHERE rowid IN (
      SELECT a.rowid FROM stock_movements a
      JOIN stock_movements b
        ON a.reason = b.reason AND a.ingredient_id = b.ingredient_id AND a.rowid > b.rowid
      WHERE a.reason LIKE 'stocktake-%'
    );
    CREATE UNIQUE INDEX IF NOT EXISTS idx_stocktake_once
      ON stock_movements (ingredient_id, reason) WHERE reason LIKE 'stocktake-%';
  `);for(let e of[`generic_name`,`strength`,`dosage_form`,`drug_class`,`rx_class`,`manufacturer`])o(`menu_items`,e,`TEXT`);o(`suppliers`,`return_days`,`INTEGER`),o(`users`,`pay_basis`,`TEXT`),o(`users`,`pay_rate_cents`,`INTEGER`),o(`stock_movements`,`user_id`,`INTEGER`),e.exec(`
    CREATE TABLE IF NOT EXISTS stock_batch_moves (
      id INTEGER PRIMARY KEY AUTOINCREMENT, batch_id INTEGER NOT NULL, movement_id INTEGER NOT NULL,
      ingredient_id INTEGER NOT NULL, qty REAL NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
    CREATE INDEX IF NOT EXISTS idx_batch_moves_movement ON stock_batch_moves (movement_id);
    CREATE TABLE IF NOT EXISTS prescriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER, kind TEXT NOT NULL DEFAULT 'rx',
      patient_name TEXT NOT NULL, patient_address TEXT, prescriber_name TEXT, prescriber_license TEXT,
      prescriber_s2 TEXT, rx_number TEXT, rx_date TEXT, senior_pwd_id TEXT, pharmacist TEXT, notes TEXT,
      created_by INTEGER, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
    CREATE TABLE IF NOT EXISTS prescription_lines (
      id INTEGER PRIMARY KEY AUTOINCREMENT, prescription_id INTEGER NOT NULL, menu_item_id INTEGER,
      item_name TEXT NOT NULL, generic_name TEXT, strength TEXT, rx_class TEXT NOT NULL DEFAULT 'rx',
      qty_prescribed REAL, qty_given REAL NOT NULL DEFAULT 0, lot_codes TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
    CREATE TABLE IF NOT EXISTS pharmacy_asks (
      id INTEGER PRIMARY KEY AUTOINCREMENT, menu_item_id INTEGER, wanted TEXT NOT NULL,
      created_by INTEGER, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
    CREATE TRIGGER IF NOT EXISTS pharmacy_batches_out AFTER INSERT ON stock_movements
    WHEN NEW.qty_delta < 0 AND NEW.reason <> 'unreceive'
      AND (SELECT value FROM settings WHERE key = 'business_kind') = 'pharmacy'
    BEGIN
      INSERT INTO stock_batch_moves (batch_id, movement_id, ingredient_id, qty)
        SELECT b.id, NEW.id, NEW.ingredient_id, -min(b.qty, (-NEW.qty_delta) - coalesce((SELECT sum(b2.qty) FROM stock_batches b2 WHERE b2.ingredient_id = NEW.ingredient_id AND b2.qty > 0 AND (CASE WHEN NEW.reason = 'Expired pull-out' AND b2.id = NEW.reference_id THEN '0' WHEN b2.expiry IS NOT NULL AND b2.expiry <> '' AND b2.expiry < date('now', 'localtime') THEN (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '1' ELSE '4' END) WHEN b2.expiry IS NULL OR b2.expiry = '' THEN '3' ELSE (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '2' ELSE '1' END) END || '|' || coalesce(nullif(b2.expiry, ''), '9999-12-31') || '|' || coalesce(b2.received_at, '') || '|' || printf('%012d', b2.id)) < (CASE WHEN NEW.reason = 'Expired pull-out' AND b.id = NEW.reference_id THEN '0' WHEN b.expiry IS NOT NULL AND b.expiry <> '' AND b.expiry < date('now', 'localtime') THEN (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '1' ELSE '4' END) WHEN b.expiry IS NULL OR b.expiry = '' THEN '3' ELSE (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '2' ELSE '1' END) END || '|' || coalesce(nullif(b.expiry, ''), '9999-12-31') || '|' || coalesce(b.received_at, '') || '|' || printf('%012d', b.id))), 0))
          FROM stock_batches b
         WHERE b.ingredient_id = NEW.ingredient_id AND b.qty > 0 AND (-NEW.qty_delta) - coalesce((SELECT sum(b2.qty) FROM stock_batches b2 WHERE b2.ingredient_id = NEW.ingredient_id AND b2.qty > 0 AND (CASE WHEN NEW.reason = 'Expired pull-out' AND b2.id = NEW.reference_id THEN '0' WHEN b2.expiry IS NOT NULL AND b2.expiry <> '' AND b2.expiry < date('now', 'localtime') THEN (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '1' ELSE '4' END) WHEN b2.expiry IS NULL OR b2.expiry = '' THEN '3' ELSE (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '2' ELSE '1' END) END || '|' || coalesce(nullif(b2.expiry, ''), '9999-12-31') || '|' || coalesce(b2.received_at, '') || '|' || printf('%012d', b2.id)) < (CASE WHEN NEW.reason = 'Expired pull-out' AND b.id = NEW.reference_id THEN '0' WHEN b.expiry IS NOT NULL AND b.expiry <> '' AND b.expiry < date('now', 'localtime') THEN (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '1' ELSE '4' END) WHEN b.expiry IS NULL OR b.expiry = '' THEN '3' ELSE (CASE WHEN lower(NEW.reason) LIKE '%expire%' THEN '2' ELSE '1' END) END || '|' || coalesce(nullif(b.expiry, ''), '9999-12-31') || '|' || coalesce(b.received_at, '') || '|' || printf('%012d', b.id))), 0) > 0;
      UPDATE stock_batches SET qty = qty + (SELECT sum(m.qty) FROM stock_batch_moves m WHERE m.movement_id = NEW.id AND m.batch_id = stock_batches.id)
       WHERE id IN (SELECT batch_id FROM stock_batch_moves WHERE movement_id = NEW.id);
    END;
    CREATE TRIGGER IF NOT EXISTS pharmacy_batches_back AFTER INSERT ON stock_movements
    WHEN NEW.qty_delta > 0 AND NEW.reference_id IS NOT NULL
      AND (lower(NEW.reason) LIKE 'refund%' OR lower(NEW.reason) LIKE 'void%')
      AND (SELECT value FROM settings WHERE key = 'business_kind') = 'pharmacy'
    BEGIN
      INSERT INTO stock_batch_moves (batch_id, movement_id, ingredient_id, qty)
        SELECT t.batch_id, NEW.id, NEW.ingredient_id,
               min(t.open, NEW.qty_delta - coalesce((SELECT sum(t2.open) FROM (SELECT m.batch_id AS batch_id, -sum(m.qty) AS open FROM stock_batch_moves m JOIN stock_movements sm ON sm.id = m.movement_id WHERE sm.reference_id = NEW.reference_id AND m.ingredient_id = NEW.ingredient_id AND (lower(sm.reason) LIKE 'sale%' OR lower(sm.reason) LIKE 'refund%' OR lower(sm.reason) LIKE 'void%') GROUP BY m.batch_id HAVING -sum(m.qty) > 0) t2 WHERE t2.batch_id < t.batch_id), 0))
          FROM (SELECT m.batch_id AS batch_id, -sum(m.qty) AS open FROM stock_batch_moves m JOIN stock_movements sm ON sm.id = m.movement_id WHERE sm.reference_id = NEW.reference_id AND m.ingredient_id = NEW.ingredient_id AND (lower(sm.reason) LIKE 'sale%' OR lower(sm.reason) LIKE 'refund%' OR lower(sm.reason) LIKE 'void%') GROUP BY m.batch_id HAVING -sum(m.qty) > 0) t
         WHERE NEW.qty_delta - coalesce((SELECT sum(t2.open) FROM (SELECT m.batch_id AS batch_id, -sum(m.qty) AS open FROM stock_batch_moves m JOIN stock_movements sm ON sm.id = m.movement_id WHERE sm.reference_id = NEW.reference_id AND m.ingredient_id = NEW.ingredient_id AND (lower(sm.reason) LIKE 'sale%' OR lower(sm.reason) LIKE 'refund%' OR lower(sm.reason) LIKE 'void%') GROUP BY m.batch_id HAVING -sum(m.qty) > 0) t2 WHERE t2.batch_id < t.batch_id), 0) > 0;
      UPDATE stock_batches SET qty = qty + (SELECT sum(m.qty) FROM stock_batch_moves m WHERE m.movement_id = NEW.id AND m.batch_id = stock_batches.id)
       WHERE id IN (SELECT batch_id FROM stock_batch_moves WHERE movement_id = NEW.id);
    END;
  `),o(`menu_items`,`directions`,`TEXT`),o(`menu_items`,`keep_cold`,`INTEGER NOT NULL DEFAULT 0`),o(`stock_batches`,`sale_pct`,`REAL`),o(`prescriptions`,`patient_phone`,`TEXT`),o(`prescription_lines`,`directions`,`TEXT`),o(`prescription_lines`,`doses_per_day`,`REAL`),o(`customers`,`allergies`,`TEXT`),e.exec(`
    CREATE TRIGGER IF NOT EXISTS pharmacy_counter_sale_handed_over AFTER UPDATE OF status ON orders
    WHEN NEW.status = 'paid' AND OLD.status IS NOT 'paid' AND NEW.source IS NULL
      AND coalesce(NEW.order_type, '') <> 'delivery' AND NEW.collected_at IS NULL
      AND (NEW.pickup_at IS NULL OR datetime(NEW.pickup_at) <= datetime('now'))
      AND (SELECT value FROM settings WHERE key = 'business_kind') = 'pharmacy'
    BEGIN
      UPDATE order_items SET kitchen_status = 'done' WHERE order_id = NEW.id;
      UPDATE orders SET ready_at = coalesce(ready_at, CURRENT_TIMESTAMP), collected_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;
  `);try{B(e)}catch(e){}try{z(e)}catch(e){}}function z(e){var t,n,r,i;let a=(t=(n=e.exec(`SELECT sql FROM sqlite_master WHERE type='table' AND name='reservations'`)[0])==null||(n=n.values[0])==null?void 0:n[0])==null?``:t;if(!a||a.includes(`'arrived'`))return;let o=a.replace(/CHECK\s*\(\s*status\s+IN\s*\([^)]*\)\s*\)/i,`CHECK (status IN ('booked', 'pending', 'arrived', 'seated', 'cancelled', 'no_show'))`);if(o===a)return;let s=o.replace(/^CREATE\s+TABLE\s+(IF\s+NOT\s+EXISTS\s+)?"?reservations"?/i,`CREATE TABLE reservations_rebuild_21sep`);if(s===o)return;let c=((r=(i=e.exec(`PRAGMA table_info(reservations)`)[0])==null?void 0:i.values)==null?[]:r).map(e=>`"${e[1]}"`).join(`, `);if(c){e.exec(`PRAGMA foreign_keys = OFF`);try{e.exec(`BEGIN`),e.exec(s),e.exec(`INSERT INTO reservations_rebuild_21sep (${c}) SELECT ${c} FROM reservations`),e.exec(`DROP TABLE reservations`),e.exec(`ALTER TABLE reservations_rebuild_21sep RENAME TO reservations`),e.exec(`COMMIT`)}catch(t){try{e.exec(`ROLLBACK`)}catch(e){}console.error(`[ember] reservations status check rebuild skipped:`,t)}finally{e.exec(`PRAGMA foreign_keys = ON`)}}}function B(e){var t,n,r,i;let a=(t=(n=e.exec(`SELECT sql FROM sqlite_master WHERE type='table' AND name='users'`)[0])==null||(n=n.values[0])==null?void 0:n[0])==null?``:t;if(!a||a.includes(`'accountant'`))return;let o=a.replace(/CHECK\s*\(\s*role\s+IN\s*\([^)]*\)\s*\)/i,`CHECK (role IN ('owner', 'manager', 'cashier', 'kitchen', 'accountant') OR role LIKE 'r\\_%' ESCAPE '\\')`);if(o===a)return;let s=o.replace(/^CREATE\s+TABLE\s+(IF\s+NOT\s+EXISTS\s+)?"?users"?/i,`CREATE TABLE users_rebuild_0171`);if(s===o)return;let c=((r=(i=e.exec(`PRAGMA table_info(users)`)[0])==null?void 0:i.values)==null?[]:r).map(e=>`"${e[1]}"`).join(`, `);if(c){e.exec(`PRAGMA foreign_keys = OFF`);try{e.exec(`BEGIN`),e.exec(s),e.exec(`INSERT INTO users_rebuild_0171 (${c}) SELECT ${c} FROM users`),e.exec(`DROP TABLE users`),e.exec(`ALTER TABLE users_rebuild_0171 RENAME TO users`),e.exec(`COMMIT`)}catch(t){try{e.exec(`ROLLBACK`)}catch(e){}console.error(`[ember] users role check rebuild skipped:`,t)}finally{e.exec(`PRAGMA foreign_keys = ON`)}}}function V(e){let t=c(16).toString(`hex`);return`${t}:${m(e,t,1e5,32,`sha256`).toString(`hex`)}`}var H=[`allergens`,`nutrition`,`wait_quote`,`email_receipt`,`recurring_bills`];function U(e){var t,n,r,o,s,c,l,u,d,f;let p=e.prepare(`INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)`);for(let[e,t]of[[`restaurant_name`,`My Restaurant`],[`tax_percent`,`0`],[`currency_symbol`,`₱`],[`receipt_footer`,`Thank you, come again!`],[`order_seq`,`0`],[`biz_address`,``],[`biz_tin`,``],[`biz_vat_status`,`non-vat`],[`biz_min`,``],[`biz_serial_no`,``],[`biz_accred_no`,``],[`biz_permit_no`,``],[`biz_receipt_prefix`,`OR-`],[`or_seq`,`0`],[`loyalty_stamps_required`,`10`],[`idle_logout_minutes`,`0`],[`daily_sales_goal_cents`,`0`],[`kds_sound`,`1`],[`kitchen_printer_name`,``],[`kitchen_auto_print`,`0`],[`happy_hour_enabled`,`0`],[`happy_hour_percent`,`10`],[`happy_hour_start`,`14:00`],[`happy_hour_end`,`17:00`],[`drawer_network`,``],[`drawer_auto_kick`,`1`],[`ui_zoom`,`1`],[`receipt_logo`,``],[`setup_done`,`0`],[`theme`,`dark`],[`quote_seq`,`0`],[`payroll_ot_threshold_hours`,`8`],[`payroll_ot_multiplier`,`1.25`]])p.run([e,t]);p.free();let m=e.exec(`SELECT (SELECT COUNT(*) FROM orders) + (SELECT COUNT(*) FROM menu_items) AS n`);if(Number((t=m==null||(n=m[0])==null||(n=n.values)==null||(n=n[0])==null?void 0:n[0])==null?1:t)===0){let t=e.prepare(`INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)`);for(let e of H)t.run([`feat_${e}`,`1`]);t.free()}if(((r=e.exec(`SELECT COUNT(*) as c FROM users`)[0])==null||(r=r.values[0])==null?void 0:r[0])===0){let t=V(`1234`),n=e.prepare(`INSERT INTO users (username, password_hash, full_name, role, pin, active, must_change_pin) VALUES (?, ?, ?, ?, ?, 1, 1)`);n.run([`admin`,t,`Owner`,`owner`,null]),n.free()}let h=e.prepare(`INSERT OR IGNORE INTO payment_types (name, code, sort_order, color, active) VALUES (?, ?, ?, ?, 1)`);if(h.run([`Cash`,`cash`,1,`#16a34a`]),h.run([`Card`,`card`,2,`#2563eb`]),h.run([`GCash`,`gcash`,3,`#0ea5e9`]),h.run([`Gift Card`,`giftcard`,4,`#a855f7`]),h.free(),((o=e.exec(`SELECT COUNT(*) as c FROM predefined_tickets`)[0])==null||(o=o.values[0])==null?void 0:o[0])===0){let t=e.prepare(`INSERT INTO predefined_tickets (label, kind, sort_order, active) VALUES (?, ?, ?, 1)`);for(let e=1;e<=5;e++)t.run([`Table ${e}`,`table`,e]);t.run([`Takeout`,`takeout`,10]),t.free()}if(((s=e.exec(`SELECT COUNT(*) as c FROM dining_tables`)[0])==null||(s=s.values[0])==null?void 0:s[0])===0){let t=e.prepare(`INSERT INTO dining_tables (label, seats, sort_order, active) VALUES (?, ?, ?, 1)`);for(let e=1;e<=8;e++)t.run([String(e),e<=4?2:4,e]);t.free()}if(((c=e.exec(`SELECT COUNT(*) as c FROM expense_categories`)[0])==null||(c=c.values[0])==null?void 0:c[0])===0){let t=e.prepare(`INSERT INTO expense_categories (name, kind, active, spread_basis, is_payroll) VALUES (?, ?, 1, ?, ?)`);for(let e of i)t.run([e.name,e.kind,e.basis,+!!a.includes(e.name.trim().toLowerCase())]);t.free()}if((l=e.exec(`SELECT value FROM settings WHERE key = 'fix_payroll_spread_done'`)[0])!=null&&(l=l.values)!=null&&l.length||(e.run(`UPDATE expense_categories SET spread_basis = 'open'
       WHERE spread_basis = 'calendar'
         AND lower(trim(name)) IN ('salaries & wages', 'salaries and wages', 'wages', 'payroll')`),e.run(`INSERT OR REPLACE INTO settings (key, value) VALUES ('fix_payroll_spread_done', '1')`)),!((u=e.exec(`SELECT value FROM settings WHERE key = 'flag_payroll_accounts_done'`)[0])!=null&&(u=u.values)!=null&&u.length)){let t=a.map(e=>`'${e.replace(/'/g,`''`)}'`).join(`, `);e.run(`UPDATE expense_categories SET is_payroll = 1
       WHERE is_payroll = 0 AND lower(trim(name)) IN (${t})`),e.run(`INSERT OR REPLACE INTO settings (key, value) VALUES ('flag_payroll_accounts_done', '1')`)}if(((d=e.exec(`SELECT COUNT(*) as c FROM locations`)[0])==null||(d=d.values[0])==null?void 0:d[0])===0){let t=e.prepare(`INSERT INTO locations (name, sort_order, active) VALUES (?, ?, 1)`);[`Main Store`,`Kitchen`,`Bar Station`,`Cold Storage`].forEach((e,n)=>t.run([e,n+1])),t.free()}if(K(e),((f=e.exec(`SELECT COUNT(*) as c FROM modifiers_library`)[0])==null||(f=f.values[0])==null?void 0:f[0])===0){let t=[[`Extra rice`,`addons`,1],[`Extra egg`,`addons`,2],[`Extra sauce`,`addons`,3],[`Extra ice`,`temp`,4],[`No ice`,`temp`,5],[`Hot`,`temp`,6],[`Iced`,`temp`,7],[`No sugar`,`sugar`,8],[`Less sugar (50%)`,`sugar`,9],[`Sugar 25%`,`sugar`,10],[`Extra sweet`,`sugar`,11],[`No onions`,`omit`,12],[`No garlic`,`omit`,13],[`No spicy`,`spice`,14],[`Extra spicy`,`spice`,15],[`To go`,`service`,16],[`For pick-up`,`service`,17],[`Rush order`,`service`,18]],n=e.prepare(`INSERT INTO modifiers_library (text, category, sort_order, active) VALUES (?, ?, ?, 1)`);for(let e of t)n.run(e);n.free()}}var W=[{capability:`pos.use`,roles:[`owner`,`manager`,`cashier`]},{capability:`kitchen.use`,roles:[`owner`,`manager`,`cashier`,`kitchen`]},{capability:`menu.read`,roles:[`owner`,`manager`,`cashier`,`kitchen`]},{capability:`menu.write`,roles:[`owner`,`manager`]},{capability:`inventory.read`,roles:[`owner`,`manager`]},{capability:`inventory.write`,roles:[`owner`,`manager`]},{capability:`inventory.adjust`,roles:[`owner`,`manager`]},{capability:`inventory.count`,roles:[`owner`,`manager`]},{capability:`reports.view`,roles:[`owner`,`manager`,`accountant`]},{capability:`admin.view`,roles:[`owner`,`manager`]},{capability:`admin.access`,roles:[`owner`]},{capability:`settings.read`,roles:[`owner`,`manager`,`cashier`,`kitchen`,`accountant`]},{capability:`settings.write`,roles:[`owner`,`manager`]},{capability:`users.manage`,roles:[`owner`,`manager`]},{capability:`orders.discount`,roles:[`owner`,`manager`]},{capability:`orders.void_paid`,roles:[`owner`,`manager`]},{capability:`csv.use`,roles:[`owner`,`manager`,`accountant`]},{capability:`backup.use`,roles:[`owner`]},{capability:`timeclock.use`,roles:[`owner`,`manager`,`cashier`,`kitchen`]},{capability:`timecards.view`,roles:[`owner`,`manager`]},{capability:`orders.refund`,roles:[`owner`,`manager`]},{capability:`shifts.manage`,roles:[`owner`,`manager`,`cashier`]},{capability:`shifts.cash`,roles:[`owner`,`manager`]},{capability:`payroll.run`,roles:[`owner`,`manager`]},{capability:`inventory.transfer`,roles:[`owner`,`manager`]},{capability:`branches.switch`,roles:[`owner`,`manager`]},{capability:`inventory.template_manage`,roles:[`owner`,`manager`]},{capability:`inventory.count_adjust`,roles:[`owner`,`manager`]},{capability:`shifts.see_expected`,roles:[`owner`,`manager`]},{capability:`inventory.receive`,roles:[`owner`,`manager`,`cashier`,`kitchen`]},{capability:`menu.availability`,roles:[`owner`,`manager`,`cashier`,`kitchen`]},{capability:`inventory.count_start`,roles:[`owner`,`manager`]},{capability:`custody.manage`,roles:[`owner`,`manager`,`cashier`]},{capability:`custody.verify`,roles:[`owner`]}],G=[`owner`,`manager`,`cashier`,`kitchen`,`accountant`];function K(e){let t=e.prepare(`INSERT OR IGNORE INTO role_permissions (role, capability, allowed) VALUES (?, ?, ?)`);e.run(`INSERT OR IGNORE INTO role_permissions (role, capability, allowed) SELECT role, 'custody.manage', allowed FROM role_permissions WHERE capability = 'shifts.manage'`),e.run(`INSERT OR IGNORE INTO role_permissions (role, capability, allowed) SELECT role, 'custody.verify', allowed FROM role_permissions WHERE capability = 'admin.access'`);for(let{capability:e,roles:n}of W)for(let r of G)t.run([r,e,+!!n.includes(r)]);t.free()}function q(e,t){let n=t.findIndex(e=>e===void 0);if(n!==-1)throw Error(`SQL bind #${n+1} is undefined in: ${e.replace(/\s+/g,` `).slice(0,160)}`)}function J(e,t=[]){q(e,t);let n=F().prepare(e);t.length&&n.bind(t);let r=[];for(;n.step();)r.push(n.getAsObject());return n.free(),r}function Y(e,t=[]){var n;return(n=J(e,t)[0])==null?null:n}function te(e,t=[]){var n,r;q(e,t);let i=F();i.run(e,t);let a=(n=(r=i.exec(`SELECT last_insert_rowid() as id, changes() as ch`)[0])==null?void 0:r.values[0])==null?[0,0]:n;return $(),{lastInsertRowid:a[0],changes:a[1]}}function ne(e){F().exec(e),$()}var X=0;function re(e){let t=F();if(X>0){let n=`sp_${X}`;t.exec(`SAVEPOINT ${n}`),X++;try{let r=e();return t.exec(`RELEASE ${n}`),r}catch(e){throw t.exec(`ROLLBACK TO ${n}`),t.exec(`RELEASE ${n}`),e}finally{X--}}t.exec(`BEGIN`),X=1;let n;try{n=e(),t.exec(`COMMIT`)}catch(e){try{t.exec(`ROLLBACK`)}catch(e){}throw e}finally{X=0}try{Z()}catch(e){console.error(`save to disk failed after commit:`,e)}return n}function Z(){M&&(globalThis.__EMBER_DEFER_SAVES__||Q||j(N,M.export()))}var Q=!1;function ie(){Q=!0,P&&(clearTimeout(P),P=null)}function $(e=500){Q||(P&&clearTimeout(P),P=setTimeout(Z,e))}export{G as ALL_ROLES,W as CAPABILITY_DEFAULTS,J as all,ne as exec,ie as freezeSavesForRestore,F as getDb,I as getDbFilePath,l as i,L as initDatabase,m as n,Y as one,c as r,te as run,$ as saveDebounced,Z as saveNow,K as seedDefaultPermissions,U as seedIfEmpty,h as t,re as transaction,z as widenReservationStatusCheck,B as widenUsersRoleCheck};