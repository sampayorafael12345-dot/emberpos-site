var Ee=Object.defineProperty;var te=(E,e,T)=>e in E?Ee(E,e,{enumerable:!0,configurable:!0,writable:!0,value:T}):E[e]=T;var A=(E,e,T)=>te(E,typeof e!="symbol"?e+"":e,T);import{S as Te,P as B}from"./expense-accounts-CFJ596_h.js";import{i as se}from"./sql-wasm-browser-mwzwnb94.js";class W extends Uint8Array{toString(e){if(e==="hex"||e===void 0){let T="";for(let t=0;t<this.length;t++)T+=this[t].toString(16).padStart(2,"0");return T}if(e==="utf8"||e==="utf-8")return new TextDecoder().decode(this);throw new Error("HexBytes.toString: unsupported encoding "+e)}}function re(E){const e=new W(E);return crypto.getRandomValues(e),e}function ge(E,e){if(E.length!==e.length)throw new Error("Input buffers must have the same length");let T=0;for(let t=0;t<E.length;t++)T|=E[t]^e[t];return T===0}const ne=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);class S{constructor(){A(this,"h",new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]));A(this,"block",new Uint8Array(64));A(this,"w",new Uint32Array(64));A(this,"fill",0);A(this,"len",0)}update(e){this.len+=e.length;let T=0;for(;T<e.length;){const t=Math.min(64-this.fill,e.length-T);this.block.set(e.subarray(T,T+t),this.fill),this.fill+=t,T+=t,this.fill===64&&(this.compress(),this.fill=0)}return this}compress(){const{block:e,w:T,h:t}=this;for(let n=0;n<16;n++)T[n]=e[n*4]<<24|e[n*4+1]<<16|e[n*4+2]<<8|e[n*4+3];for(let n=16;n<64;n++){const _=T[n-15],c=T[n-2],u=(_>>>7|_<<25)^(_>>>18|_<<14)^_>>>3,U=(c>>>17|c<<15)^(c>>>19|c<<13)^c>>>10;T[n]=T[n-16]+u+T[n-7]+U|0}let s=t[0],r=t[1],o=t[2],I=t[3],L=t[4],N=t[5],a=t[6],R=t[7];for(let n=0;n<64;n++){const _=(L>>>6|L<<26)^(L>>>11|L<<21)^(L>>>25|L<<7),c=L&N^~L&a,u=R+_+c+ne[n]+T[n]|0,U=(s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10),h=s&r^s&o^r&o,m=U+h|0;R=a,a=N,N=L,L=I+u|0,I=o,o=r,r=s,s=u+m|0}t[0]=t[0]+s|0,t[1]=t[1]+r|0,t[2]=t[2]+o|0,t[3]=t[3]+I|0,t[4]=t[4]+L|0,t[5]=t[5]+N|0,t[6]=t[6]+a|0,t[7]=t[7]+R|0}digest(){const e=this.len*8;for(this.update(new Uint8Array([128]));this.fill!==56;)this.update(new Uint8Array([0]));const T=new Uint8Array(8);T[0]=e/4294967296>>>24,T[1]=e/4294967296>>>16,T[2]=e/4294967296>>>8,T[3]=e/4294967296&255,T[4]=e>>>24&255,T[5]=e>>>16&255,T[6]=e>>>8&255,T[7]=e&255,this.update(T);const t=new Uint8Array(32);for(let s=0;s<8;s++)t[s*4]=this.h[s]>>>24,t[s*4+1]=this.h[s]>>>16&255,t[s*4+2]=this.h[s]>>>8&255,t[s*4+3]=this.h[s]&255;return t}}const ie=E=>new S().update(E).digest();function H(E,e){let T=E.length>64?ie(E):E;const t=new Uint8Array(64).fill(54),s=new Uint8Array(64).fill(92);for(let o=0;o<T.length;o++)t[o]^=T[o],s[o]^=T[o];const r=new S().update(t).update(e).digest();return new S().update(s).update(r).digest()}function Ne(E,e,T,t,s){if(s!=="sha256")throw new Error("pbkdf2Sync shim: only sha256");const r=typeof E=="string"?new TextEncoder().encode(E):E,o=typeof e=="string"?new TextEncoder().encode(e):e,I=new W(t),L=Math.ceil(t/32);for(let N=1;N<=L;N++){const a=new Uint8Array(o.length+4);a.set(o),a[o.length]=N>>>24,a[o.length+1]=N>>>16&255,a[o.length+2]=N>>>8&255,a[o.length+3]=N&255;let R=H(r,a);const n=new Uint8Array(R);for(let _=1;_<T;_++){R=H(r,R);for(let c=0;c<32;c++)n[c]^=R[c]}I.set(n.subarray(0,Math.min(32,t-(N-1)*32)),(N-1)*32)}return I}function Fe(E){if(E!=="sha256")throw new Error("createHash shim: only sha256");const e=new S,T={update(t){return e.update(typeof t=="string"?new TextEncoder().encode(t):t),T},digest(t){const s=e.digest();if(t==="hex")return Array.from(s).map(r=>r.toString(16).padStart(2,"0")).join("");if(t)throw new Error("createHash shim: only hex");return s}};return T}const oe="/demo/assets/sql-wasm-UFUCzYNW.wasm",ae="emberpos-demo",p="db",z="bytes";function Q(){return new Promise((E,e)=>{const T=indexedDB.open(ae,1);T.onupgradeneeded=()=>T.result.createObjectStore(p),T.onsuccess=()=>E(T.result),T.onerror=()=>e(T.error)})}async function de(){try{const E=await Q();return await new Promise(e=>{const t=E.transaction(p,"readonly").objectStore(p).get(z);t.onsuccess=()=>e(t.result instanceof Uint8Array?t.result:null),t.onerror=()=>e(null)})}catch{return null}}async function ce(E){try{const e=await Q();await new Promise(T=>{const t=e.transaction(p,"readwrite");t.objectStore(p).put(E,z),t.oncomplete=()=>T(),t.onerror=()=>T()})}catch{}}function Le(){return"browser:indexeddb/emberpos-demo"}async function Re(){return se({locateFile:()=>oe})}async function _e(E){const e=await de();if(e&&e.length>0)return e;const T=t=>{const s="SQLite format 3";for(let r=0;r<s.length;r++)if(t[r]!==s.charCodeAt(r))return null;return t};if(typeof DecompressionStream=="function")try{const t=await fetch("demo-shop.db.gz",{cache:"no-store"});if(t.ok&&t.body){const s=t.body.pipeThrough(new DecompressionStream("gzip")),r=T(new Uint8Array(await new Response(s).arrayBuffer()));if(r)return r}}catch{}try{const t=await fetch("demo-shop.db",{cache:"no-store"});return t.ok?T(new Uint8Array(await t.arrayBuffer())):null}catch{return null}}let q=Promise.resolve();function Ie(E,e){const T=new Uint8Array(e);q=q.then(()=>ce(T))}let l=null,F="",g=null;function O(){if(!l)throw new Error("Database not initialized. Call initDatabase() first.");return l}function ue(){return F}async function le(){F=Le();const E=await Re(),e=await _e();return l=e?new E.Database(e):new E.Database,l.exec(`
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
      role TEXT NOT NULL CHECK (role IN ('owner', 'manager', 'cashier', 'kitchen')),
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

    CREATE INDEX IF NOT EXISTS idx_ledger_seq ON ledger_entries(seq);
    CREATE INDEX IF NOT EXISTS idx_ledger_order ON ledger_entries(order_id);
    CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
    CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
    CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
    CREATE INDEX IF NOT EXISTS idx_activity_user ON activity_log(user_id);
    CREATE INDEX IF NOT EXISTS idx_activity_created ON activity_log(created_at);
    CREATE INDEX IF NOT EXISTS idx_timecards_user ON timecards(user_id);
    CREATE INDEX IF NOT EXISTS idx_timecards_in ON timecards(clock_in);
  `),Ue(l),Ae(l),C(),l}function Ue(E){var o,I,L;const e=(N,a,R)=>{var c;(((c=E.exec(`PRAGMA table_info(${N})`)[0])==null?void 0:c.values.map(u=>u[1]))??[]).includes(a)||E.exec(`ALTER TABLE ${N} ADD COLUMN ${a} ${R}`)};e("orders","discount_cents","INTEGER NOT NULL DEFAULT 0"),e("orders","discount_reason","TEXT"),e("orders","voided_at","TEXT"),e("orders","voided_by","INTEGER"),e("orders","void_reason","TEXT"),e("orders","source","TEXT"),e("menu_items","cost_cents","INTEGER"),e("menu_items","sold_by","TEXT NOT NULL DEFAULT 'each'"),e("menu_items","track_stock","INTEGER NOT NULL DEFAULT 0"),e("menu_items","is_composite","INTEGER NOT NULL DEFAULT 0"),e("menu_items","color","TEXT"),e("menu_items","shape","TEXT"),e("orders","shift_id","INTEGER"),e("order_items","variant_id","INTEGER"),e("order_items","variant_label","TEXT"),e("orders","cash_tendered_cents","INTEGER"),e("orders","change_cents","INTEGER"),e("orders","customer_id","INTEGER"),e("orders","refunded_cents","INTEGER NOT NULL DEFAULT 0"),e("users","wage_cents_per_hour","INTEGER NOT NULL DEFAULT 0"),e("orders","tip_cents","INTEGER NOT NULL DEFAULT 0"),e("menu_items","barcode","TEXT"),e("orders","or_number","INTEGER"),e("timecards","break_minutes","INTEGER NOT NULL DEFAULT 0"),e("customers","birthday","TEXT"),e("customers","no_message","INTEGER NOT NULL DEFAULT 0"),e("customers","last_messaged_at","TEXT"),e("ingredients","brand","TEXT"),e("ingredients","supplier","TEXT"),e("ingredients","pack_size","TEXT"),e("menu_items","tax_exempt","INTEGER NOT NULL DEFAULT 0"),e("menu_items","zero_rated","INTEGER NOT NULL DEFAULT 0"),e("menu_items","addon_max_picks","INTEGER"),e("menu_variants","addon_max_picks","INTEGER"),e("menu_items","no_addons","INTEGER NOT NULL DEFAULT 0"),e("order_items","modifier_ids","TEXT"),e("stock_movements","user_id","INTEGER"),e("expenses","category_name_snapshot","TEXT"),e("expenses","category_kind_snapshot","TEXT"),e("expenses","reviewed_at","TEXT"),e("expenses","reviewed_by","INTEGER"),e("menu_items","addon_min_picks","INTEGER"),e("menu_variants","addon_min_picks","INTEGER"),e("cash_custody","received_at","TEXT"),e("cash_custody","received_by","INTEGER"),e("cash_custody","verified_at","TEXT"),e("cash_custody","verified_by","INTEGER"),e("expenses","voided_at","TEXT"),e("expenses","voided_by","INTEGER"),e("expenses","void_reason","TEXT"),e("orders","ready_at","TEXT"),e("shifts","paused_at","TEXT"),e("shifts","covers_shift_id","INTEGER"),e("orders","business_date","TEXT"),e("orders","business_day_id","INTEGER"),e("purchase_orders","received_by","INTEGER"),e("purchase_orders","payment_terms","TEXT"),e("purchase_orders","paid_at","TEXT"),e("purchase_orders","paid_via","TEXT"),e("expense_categories","kind","TEXT NOT NULL DEFAULT 'operating'"),e("expense_categories","spread_basis","TEXT NOT NULL DEFAULT 'calendar'"),e("expense_categories","is_payroll","INTEGER NOT NULL DEFAULT 0"),e("users","must_change_pin","INTEGER NOT NULL DEFAULT 0"),e("users","def_allowance_cents","INTEGER NOT NULL DEFAULT 0"),e("users","def_sss_cents","INTEGER NOT NULL DEFAULT 0"),e("users","def_philhealth_cents","INTEGER NOT NULL DEFAULT 0"),e("users","def_pagibig_cents","INTEGER NOT NULL DEFAULT 0"),e("users","def_tax_cents","INTEGER NOT NULL DEFAULT 0"),e("users","def_other_cents","INTEGER NOT NULL DEFAULT 0"),e("modifiers_library","price_cents","INTEGER NOT NULL DEFAULT 0"),e("modifiers_library","cost_cents","INTEGER"),e("categories","station","TEXT"),e("payroll_lines","tip_cents","INTEGER NOT NULL DEFAULT 0"),e("recipes","entry_qty","REAL"),e("recipes","entry_unit","TEXT"),e("ingredients","pack_label","TEXT"),e("ingredients","pack_qty","REAL"),e("ingredients","image_path","TEXT"),e("ingredients","barcode","TEXT"),e("ingredients","made_in_house","INTEGER DEFAULT 0"),e("ingredients","prep_batch_qty","REAL"),e("ingredients","kind","TEXT NOT NULL DEFAULT 'food'"),e("orders","collected_at","TEXT"),e("orders","pickup_label","TEXT"),e("inventory_counts","audited_at","TEXT"),e("inventory_counts","audited_by","TEXT"),e("inventory_counts","snapshot_deferred","INTEGER NOT NULL DEFAULT 0"),e("order_payments","ref","TEXT"),e("cash_movements","source","TEXT"),e("cash_movements","ref_id","INTEGER");try{E.exec("UPDATE ingredients SET unit = 'piece' WHERE unit IN ('each','pc')"),E.exec("UPDATE recipes SET entry_unit = 'piece' WHERE entry_unit IN ('each','pc')")}catch{}try{const N=E.exec("SELECT id, unit FROM ingredients WHERE unit IN ('g','mL')"),a=N.length?N[0].values:[];for(const R of a){const n=R[0],_=R[1],c=_==="g"?"kg":"L";E.run(`UPDATE ingredients SET unit = ?,
           stock_qty = stock_qty / 1000.0,
           cost_per_unit_cents = CASE WHEN cost_per_unit_cents IS NULL THEN NULL ELSE ROUND(cost_per_unit_cents * 1000) END,
           low_stock_threshold = CASE WHEN low_stock_threshold IS NULL THEN NULL ELSE low_stock_threshold / 1000.0 END,
           pack_qty = CASE WHEN pack_qty IS NULL THEN NULL ELSE pack_qty / 1000.0 END
         WHERE id = ?`,[c,n]),E.run("UPDATE recipes SET qty = qty / 1000.0 WHERE ingredient_id = ?",[n]),E.run("UPDATE recipes SET entry_qty = entry_qty / 1000.0, entry_unit = ? WHERE ingredient_id = ? AND entry_unit = ?",[c,n,_])}}catch{}e("menu_items","extra_cost_cents","INTEGER NOT NULL DEFAULT 0"),e("menu_items","retired_at","TEXT"),e("purchase_order_items","received_packs","REAL"),e("shifts","left_in_drawer_cents","INTEGER"),e("cash_custody","split_from","INTEGER");try{E.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='order_payments'").length>0&&E.exec(`
        INSERT INTO order_payments (order_id, method, amount_cents, tendered_cents, change_cents, created_at)
        SELECT id, COALESCE(payment_method, 'unknown'), total_cents, cash_tendered_cents, change_cents, COALESCE(paid_at, created_at)
        FROM orders
        WHERE status = 'paid' AND id NOT IN (SELECT order_id FROM order_payments)
      `)}catch{}try{E.exec(`
      UPDATE orders SET business_date = date(COALESCE(
        (SELECT s.opened_at FROM shifts s WHERE s.id = orders.shift_id),
        orders.paid_at, orders.created_at), 'localtime')
      WHERE business_date IS NULL
    `)}catch{}((I=(o=E.exec("SELECT value FROM settings WHERE key = 'currency_symbol'")[0])==null?void 0:o.values[0])==null?void 0:I[0])==="$"&&E.exec("UPDATE settings SET value = '₱' WHERE key = 'currency_symbol'");const r=(((L=E.exec("SELECT id FROM users WHERE password_hash IS NULL OR password_hash = ''")[0])==null?void 0:L.values)??[]).map(N=>N[0]);if(r.length>0){const N=V("1234"),a=E.prepare("UPDATE users SET password_hash = ? WHERE id = ?");for(const R of r)a.run([N,R]);a.free()}E.exec(`
    DELETE FROM stock_movements WHERE rowid IN (
      SELECT a.rowid FROM stock_movements a
      JOIN stock_movements b
        ON a.reason = b.reason AND a.ingredient_id = b.ingredient_id AND a.rowid > b.rowid
      WHERE a.reason LIKE 'stocktake-%'
    );
    CREATE UNIQUE INDEX IF NOT EXISTS idx_stocktake_once
      ON stock_movements (ingredient_id, reason) WHERE reason LIKE 'stocktake-%';
  `)}function V(E){const e=re(16).toString("hex"),T=Ne(E,e,1e5,32,"sha256").toString("hex");return`${e}:${T}`}function Ae(E){var u,U,h,m,X,G,D,w,b,M,v,k,P,x,Y,K;const e=E.prepare("INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)"),T=[["restaurant_name","My Restaurant"],["tax_percent","0"],["currency_symbol","₱"],["receipt_footer","Thank you — come again!"],["order_seq","0"],["biz_address",""],["biz_tin",""],["biz_vat_status","non-vat"],["biz_min",""],["biz_serial_no",""],["biz_accred_no",""],["biz_permit_no",""],["biz_receipt_prefix","OR-"],["or_seq","0"],["loyalty_stamps_required","10"],["idle_logout_minutes","0"],["daily_sales_goal_cents","0"],["kds_sound","1"],["kitchen_printer_name",""],["kitchen_auto_print","0"],["happy_hour_enabled","0"],["happy_hour_percent","10"],["happy_hour_start","14:00"],["happy_hour_end","17:00"],["drawer_network",""],["drawer_auto_kick","1"],["ui_zoom","1"],["receipt_logo",""],["setup_done","0"],["theme","dark"],["quote_seq","0"],["payroll_ot_threshold_hours","8"],["payroll_ot_multiplier","1.25"]];for(const[d,i]of T)e.run([d,i]);if(e.free(),((U=(u=E.exec("SELECT COUNT(*) as c FROM users")[0])==null?void 0:u.values[0])==null?void 0:U[0])===0){const d=V("1234"),i=E.prepare("INSERT INTO users (username, password_hash, full_name, role, pin, active) VALUES (?, ?, ?, ?, ?, 1)");i.run(["admin",d,"Owner","owner",null]),i.free()}const r=E.prepare("INSERT OR IGNORE INTO payment_types (name, code, sort_order, color, active) VALUES (?, ?, ?, ?, 1)");if(r.run(["Cash","cash",1,"#16a34a"]),r.run(["Card","card",2,"#2563eb"]),r.run(["GCash","gcash",3,"#0ea5e9"]),r.run(["Gift Card","giftcard",4,"#a855f7"]),r.free(),((m=(h=E.exec("SELECT COUNT(*) as c FROM predefined_tickets")[0])==null?void 0:h.values[0])==null?void 0:m[0])===0){const d=E.prepare("INSERT INTO predefined_tickets (label, kind, sort_order, active) VALUES (?, ?, ?, 1)");for(let i=1;i<=5;i++)d.run([`Table ${i}`,"table",i]);d.run(["Takeout","takeout",10]),d.free()}if(((G=(X=E.exec("SELECT COUNT(*) as c FROM dining_tables")[0])==null?void 0:X.values[0])==null?void 0:G[0])===0){const d=E.prepare("INSERT INTO dining_tables (label, seats, sort_order, active) VALUES (?, ?, ?, 1)");for(let i=1;i<=8;i++)d.run([String(i),i<=4?2:4,i]);d.free()}if(((w=(D=E.exec("SELECT COUNT(*) as c FROM expense_categories")[0])==null?void 0:D.values[0])==null?void 0:w[0])===0){const d=E.prepare("INSERT INTO expense_categories (name, kind, active, spread_basis, is_payroll) VALUES (?, ?, 1, ?, ?)");for(const i of Te)d.run([i.name,i.kind,i.basis,B.includes(i.name.trim().toLowerCase())?1:0]);d.free()}if((M=(b=E.exec("SELECT value FROM settings WHERE key = 'fix_payroll_spread_done'")[0])==null?void 0:b.values)!=null&&M.length||(E.run(`UPDATE expense_categories SET spread_basis = 'open'
       WHERE spread_basis = 'calendar'
         AND lower(trim(name)) IN ('salaries & wages', 'salaries and wages', 'wages', 'payroll')`),E.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('fix_payroll_spread_done', '1')")),!((k=(v=E.exec("SELECT value FROM settings WHERE key = 'flag_payroll_accounts_done'")[0])==null?void 0:v.values)!=null&&k.length)){const d=B.map(i=>`'${i.replace(/'/g,"''")}'`).join(", ");E.run(`UPDATE expense_categories SET is_payroll = 1
       WHERE is_payroll = 0 AND lower(trim(name)) IN (${d})`),E.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('flag_payroll_accounts_done', '1')")}if(((x=(P=E.exec("SELECT COUNT(*) as c FROM locations")[0])==null?void 0:P.values[0])==null?void 0:x[0])===0){const d=E.prepare("INSERT INTO locations (name, sort_order, active) VALUES (?, ?, 1)");["Main Store","Kitchen","Bar Station","Cold Storage"].forEach((i,y)=>d.run([i,y+1])),d.free()}if(J(E),((K=(Y=E.exec("SELECT COUNT(*) as c FROM modifiers_library")[0])==null?void 0:Y.values[0])==null?void 0:K[0])===0){const d=[["Extra rice","addons",1],["Extra egg","addons",2],["Extra sauce","addons",3],["Extra ice","temp",4],["No ice","temp",5],["Hot","temp",6],["Iced","temp",7],["No sugar","sugar",8],["Less sugar (50%)","sugar",9],["Sugar 25%","sugar",10],["Extra sweet","sugar",11],["No onions","omit",12],["No garlic","omit",13],["No spicy","spice",14],["Extra spicy","spice",15],["To go","service",16],["For pick-up","service",17],["Rush order","service",18]],i=E.prepare("INSERT INTO modifiers_library (text, category, sort_order, active) VALUES (?, ?, ?, 1)");for(const y of d)i.run(y);i.free()}}const j=[{capability:"pos.use",roles:["owner","manager","cashier"]},{capability:"kitchen.use",roles:["owner","manager","cashier","kitchen"]},{capability:"menu.read",roles:["owner","manager","cashier","kitchen"]},{capability:"menu.write",roles:["owner","manager"]},{capability:"inventory.read",roles:["owner","manager"]},{capability:"inventory.write",roles:["owner","manager"]},{capability:"inventory.adjust",roles:["owner","manager"]},{capability:"inventory.count",roles:["owner","manager"]},{capability:"reports.view",roles:["owner","manager","accountant"]},{capability:"admin.view",roles:["owner","manager"]},{capability:"admin.access",roles:["owner"]},{capability:"settings.read",roles:["owner","manager","cashier","kitchen","accountant"]},{capability:"settings.write",roles:["owner","manager"]},{capability:"users.manage",roles:["owner","manager"]},{capability:"orders.discount",roles:["owner","manager"]},{capability:"orders.void_paid",roles:["owner","manager"]},{capability:"csv.use",roles:["owner","manager","accountant"]},{capability:"backup.use",roles:["owner"]},{capability:"timeclock.use",roles:["owner","manager","cashier","kitchen"]},{capability:"timecards.view",roles:["owner","manager"]},{capability:"orders.refund",roles:["owner","manager"]},{capability:"shifts.manage",roles:["owner","manager","cashier"]},{capability:"shifts.cash",roles:["owner","manager"]},{capability:"payroll.run",roles:["owner","manager"]},{capability:"inventory.transfer",roles:["owner","manager"]},{capability:"branches.switch",roles:["owner","manager"]},{capability:"inventory.template_manage",roles:["owner","manager"]},{capability:"inventory.count_adjust",roles:["owner","manager"]},{capability:"shifts.see_expected",roles:["owner","manager"]},{capability:"inventory.receive",roles:["owner","manager","cashier","kitchen"]},{capability:"menu.availability",roles:["owner","manager","cashier","kitchen"]},{capability:"inventory.count_start",roles:["owner","manager"]}],$=["owner","manager","cashier","kitchen","accountant"];function J(E){const e=E.prepare("INSERT OR IGNORE INTO role_permissions (role, capability, allowed) VALUES (?, ?, ?)");for(const{capability:T,roles:t}of j)for(const s of $)e.run([s,T,t.includes(s)?1:0]);e.free()}function Z(E,e){const T=e.findIndex(t=>t===void 0);if(T!==-1)throw new Error(`SQL bind #${T+1} is undefined in: ${E.replace(/\s+/g," ").slice(0,160)}`)}function ee(E,e=[]){Z(E,e);const T=O().prepare(E);e.length&&T.bind(e);const t=[];for(;T.step();)t.push(T.getAsObject());return T.free(),t}function pe(E,e=[]){return ee(E,e)[0]??null}function Oe(E,e=[]){var r;Z(E,e);const T=O();T.run(E,e);const s=((r=T.exec("SELECT last_insert_rowid() as id, changes() as ch")[0])==null?void 0:r.values[0])??[0,0];return f(),{lastInsertRowid:s[0],changes:s[1]}}function he(E){O().exec(E),f()}function me(E){const e=O();e.exec("BEGIN");try{const T=E();return e.exec("COMMIT"),C(),T}catch(T){throw e.exec("ROLLBACK"),T}}function C(){l&&(globalThis.__EMBER_DEFER_SAVES__||Ie(F,l.export()))}function f(E=500){g&&clearTimeout(g),g=setTimeout(C,E)}const fe=Object.freeze(Object.defineProperty({__proto__:null,ALL_ROLES:$,CAPABILITY_DEFAULTS:j,all:ee,exec:he,getDb:O,getDbFilePath:ue,initDatabase:le,one:pe,run:Oe,saveDebounced:f,saveNow:C,seedDefaultPermissions:J,transaction:me},Symbol.toStringTag,{value:"Module"}));export{ee as a,Oe as b,Fe as c,fe as d,me as e,ue as g,pe as o,Ne as p,re as r,C as s,ge as t};
