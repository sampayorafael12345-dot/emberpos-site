(function() {
  "use strict";
  var KEY = "ember.lang";
  var TL = {
    "Search the menu": "Hanapin sa menu",
    "Menu sections": "Mga bahagi ng menu",
    "View basket": "Tingnan ang basket",
    "Sold out": "Ubos na",
    "Nothing matches": "Walang tugma",
    "Try a different word, or browse the categories above.": "Subukan ang ibang salita, o tingnan ang mga kategorya sa itaas.",
    "Not serving right now": "Walang serving ngayon",
    "Your favourites": "Mga paborito mo",
    "Rate your visit": "I-rate ang pagbisita mo",
    "My stamps": "Mga stamp ko",
    "Shop info": "Tungkol sa shop",
    Pickup: "Pickup",
    Delivery: "Delivery",
    "Order ahead": "Umorder nang maaga",
    "Closed right now": "Sarado ngayon",
    "Call the shop": "Tawagan ang shop",
    "Open in Maps": "Buksan sa Maps",
    "The shop has not added its details yet.": "Wala pang detalye ang shop.",
    Filter: "I-filter",
    "Food filters": "Filter sa pagkain",
    "Show only": "Ipakita lang ang",
    "Leave out anything with": "Huwag isama ang may",
    "Clear filters": "Alisin ang filter",
    "Show the menu": "Ipakita ang menu",
    "Nothing fits those filters": "Walang tugma sa filter",
    Vegetarian: "Vegetarian",
    Vegan: "Vegan",
    Halal: "Halal",
    "No pork": "Walang baboy",
    "Gluten free": "Walang gluten",
    Spicy: "Maanghang",
    "Dishes the shop has not listed allergens for still show. If an allergy is serious, ask the shop.": "Lumalabas pa rin ang mga pagkaing walang nakalistang allergen. Kung seryoso ang allergy, magtanong sa shop.",
    Size: "Laki",
    "How many?": "Ilan?",
    "Note for the kitchen": "Bilin sa kusina",
    "Anything to tell the kitchen?": "May bilin ka ba sa kusina?",
    "Allergies, no onions, extra napkins": "Allergy, walang sibuyas, dagdag na tissue",
    "Make it a meal?": "Gawing meal?",
    "Make it a meal": "Gawing meal",
    "No thanks": "Hindi na, salamat",
    "Add it": "Idagdag",
    "You might also like": "Baka magustuhan mo rin",
    "One less": "Bawasan ng isa",
    "One more": "Dagdagan ng isa",
    "Your order": "Ang order mo",
    "Add more": "Magdagdag pa",
    Subtotal: "Subtotal",
    "Delivery fee": "Bayad sa delivery",
    Tax: "Tax",
    Total: "Kabuuan",
    "Total before offers": "Kabuuan bago ang alok",
    "The shop’s offer is taken off when you place the order.": "Ibabawas ang alok ng shop pag-order mo.",
    "Your code or the shop’s offer comes off, whichever saves you more. If the offer wins, your code is not used up.": "Ibabawas ang code mo o ang alok ng shop, kung alin ang mas makakatipid sa iyo. Kung ang alok ang mas malaki, hindi mababawasan ang code mo at magagamit mo pa ito.",
    "How do you want it?": "Paano mo gustong kunin?",
    "When do you want it?": "Kailan mo kukunin?",
    "When should it arrive?": "Kailan ito dapat dumating?",
    "As soon as possible": "Ngayon na",
    "At a time": "Pumili ng oras",
    "Pickup time": "Oras ng pickup",
    "Pickup day": "Araw ng pickup",
    Today: "Ngayon",
    Tomorrow: "Bukas",
    "The shop is closed right now. You can order for a later day.": "Sarado ang shop ngayon. Puwede kang umorder para sa ibang araw.",
    "Please choose a day for your order.": "Pakipili ang araw ng order mo.",
    "Paused right now": "Naka-pause ngayon",
    "The shop is closed right now. You can order for later.": "Sarado ang shop ngayon. Puwede kang umorder para mamaya.",
    "The shop has paused online orders for a short while. You can order for later.": "Naka-pause muna ang online order ng shop. Puwede kang umorder para mamaya.",
    "Please choose a time for your order.": "Pakipili ang oras ng order mo.",
    "Please come back later!": "Bumalik ka na lang mamaya!",
    "Please come back another day!": "Bumalik ka na lang sa ibang araw!",
    "Ordering opens again when the counter does. Please come back later!": "Bukas ulit ang order pagbukas ng counter. Bumalik ka na lang mamaya!",
    "The shop is closed today.": "Sarado ang shop ngayong araw.",
    "The shop is closed on that day. Please choose another day.": "Sarado ang shop sa araw na iyon. Pumili ng ibang araw.",
    "The shop is closed at that time. Please choose a time when it is open.": "Sarado ang shop sa oras na iyon. Pumili ng oras na bukas ito.",
    "The shop has not opened your order yet": "Hindi pa nabubuksan ng shop ang order mo",
    "Nobody at the shop has seen it for 10 minutes. Please call the shop, or cancel it.": "Wala pang nakakita nito sa shop sa loob ng 10 minuto. Pakitawagan ang shop, o kanselahin ito.",
    "Nobody at the shop has seen it for 10 minutes. Please call the shop.": "Wala pang nakakita nito sa shop sa loob ng 10 minuto. Pakitawagan ang shop.",
    "Nobody at the shop has seen it for 10 minutes. Please ask a staff member.": "Wala pang nakakita nito sa shop sa loob ng 10 minuto. Magtanong sa staff.",
    "Your mobile number": "Mobile number mo",
    "Give the number you use at the counter, so this order counts as your visit.": "Ibigay ang number na gamit mo sa counter, para mabilang ang order na ito bilang visit mo.",
    "Mobile number": "Mobile number",
    "Your location": "Lokasyon mo",
    "Use my location": "Gamitin ang lokasyon ko",
    "Update my location": "I-update ang lokasyon ko",
    "Finding you…": "Hinahanap ka…",
    "The delivery fee is worked out from how far you are.": "Ang bayad sa delivery ay depende sa layo mo.",
    "Delivery area": "Lugar ng delivery",
    "Choose your area": "Piliin ang lugar mo",
    "Delivery address": "Delivery address",
    "Saved addresses": "Mga naka-save na address",
    "A new address": "Bagong address",
    "Save this address to my account": "I-save ang address na ito sa account ko",
    "Your name": "Pangalan mo",
    "Who is this order for?": "Para kanino ang order?",
    "So the staff can call you": "Para matawag ka ng staff",
    "Coupon code": "Coupon code",
    "Coupon code (optional)": "Coupon code (kung meron)",
    "From your voucher or flyer": "Mula sa voucher o flyer mo",
    "Add a tip?": "Magbigay ng tip?",
    Tip: "Tip",
    "No tip": "Walang tip",
    Other: "Iba",
    "Tip amount": "Halaga ng tip",
    Payment: "Bayad",
    "Pay now": "Magbayad ngayon",
    "Pay now (GCash/Maya)": "Magbayad ngayon (GCash/Maya)",
    "Pay when you pick it up": "Magbayad pagkuha",
    "Cash on delivery": "Cash on delivery",
    "Pays online (GCash / Maya / bank app), the shop sees it instantly.": "Online na bayad (GCash / Maya / bank app), makikita agad ng shop.",
    "Place pickup order": "I-order (pickup)",
    "Place delivery order": "I-order (delivery)",
    "Place order & pay": "I-order at bayaran",
    "Send to the cashier for payment": "Ipadala sa cashier para magbayad",
    "Sending…": "Ipinapadala…",
    "Your order goes to the counter first. Pay there, then it is made.": "Sa counter muna pupunta ang order mo. Magbayad doon, saka gagawin.",
    "Dine in or take out?": "Dine in o take out?",
    "Dine in": "Dine in",
    "Take out": "Take out",
    "Save your details for next time": "I-save ang detalye mo para sa susunod",
    "Scan to pay": "I-scan para magbayad",
    "Getting your payment code…": "Kinukuha ang payment code mo…",
    "Waiting for the payment…": "Hinihintay ang bayad…",
    "Waiting for your payment": "Hinihintay ang bayad mo",
    "This screen confirms by itself the moment the money lands.": "Kusang magko-confirm ang screen na ito pagpasok ng bayad.",
    "Not now": "Mamaya na",
    "Paid!": "Bayad na!",
    "Already paid!": "Bayad na!",
    "Paid, the shop sees it instantly!": "Bayad na, makikita agad ng shop!",
    "Please pay at the counter": "Magbayad po sa counter",
    "The shop starts this order once it is paid, tap Pay now below.": "Sisimulan ng shop ang order kapag bayad na, pindutin ang Magbayad ngayon sa ibaba.",
    "Your orders": "Mga order mo",
    "What you ordered": "Mga inorder mo",
    "Order more": "Umorder pa",
    "Order again": "Umorder ulit",
    "Show this number at the counter:": "Ipakita ang number na ito sa counter:",
    "Show this number:": "Ipakita ang number na ito:",
    "Watch for this number": "Abangan ang number na ito",
    "Keep this page open": "Huwag isara ang page na ito",
    Received: "Natanggap",
    "Being made": "Ginagawa",
    Ready: "Ready na",
    Collected: "Nakuha na",
    "Staff are confirming it": "Kinukumpirma ng staff",
    "The shop is confirming it": "Kinukumpirma ng shop",
    "Being prepared": "Ginagawa na",
    "Ready, please collect": "Ready na, pakikuha",
    "Ready, come get it!": "Ready na, kunin mo na!",
    "Collected, enjoy!": "Nakuha na, enjoy!",
    "Picked up, enjoy!": "Nakuha na, enjoy!",
    "Packed, waiting for the rider": "Naka-pack na, hinihintay ang rider",
    "On the way to you!": "Papunta na sa iyo!",
    "On the way, enjoy!": "Papunta na, enjoy!",
    "Cancelled, ask a staff member": "Na-cancel, magtanong sa staff",
    "Cancelled, please contact the shop": "Na-cancel, kontakin ang shop",
    "I’m here": "Nandito na ako",
    "Your rider": "Ang rider mo",
    "Your rider is getting ready.": "Naghahanda na ang rider mo.",
    "On the way. The rider’s location shows here once it comes in.": "Papunta na. Lalabas dito ang lokasyon ng rider pagdating nito.",
    "Delivered, enjoy!": "Na-deliver na, enjoy!",
    ": your phone rings and vibrates here when your order is ready. The screen is kept awake for you while you wait.": ": tutunog at magva-vibrate ang phone mo dito pag ready na ang order. Hindi mamamatay ang screen habang naghihintay ka.",
    "The shop knows you are here.": "Alam na ng shop na nandito ka.",
    "Cancel this order": "Kanselahin ang order",
    "Your order is cancelled.": "Na-cancel na ang order mo.",
    "Cancel this order? The shop has not started on it yet.": "Kanselahin ang order? Hindi pa ito sinisimulan ng shop.",
    "Order sent to the shop!": "Naipadala na ang order sa shop!",
    "Order sent to the cashier!": "Naipadala na ang order sa cashier!",
    "Please give your name.": "Pakilagay ang pangalan mo.",
    "Please give a mobile number the shop can reach you on.": "Pakilagay ang mobile number na matatawagan ng shop.",
    "Please give the delivery address.": "Pakilagay ang delivery address.",
    "Please choose your delivery area.": "Pakipili ang lugar ng delivery mo.",
    "Dine in or take out? Tap one, then send your order.": "Dine in o take out? Pumili ng isa, saka ipadala ang order.",
    "Your last order is in the basket. Change anything before you send.": "Nasa basket na ang huling order mo. Baguhin muna kung may papalitan bago ipadala.",
    "No connection": "Walang connection",
    "Check your signal and try again.": "I-check ang signal mo at subukan ulit.",
    "No connection. Try again.": "Walang connection. Subukan ulit.",
    "No connection. Try again in a moment.": "Walang connection. Subukan ulit maya-maya.",
    "No connection. Try again in a moment, your order was NOT sent twice.": "Walang connection. Subukan ulit maya-maya, HINDI nadoble ang order mo.",
    "Your order is in, but the tip could not be added. You can tip at the counter.": "Pasok na ang order mo, pero hindi naidagdag ang tip. Puwede kang mag-tip sa counter.",
    "How was it?": "Kumusta?",
    Overall: "Sa kabuuan",
    "The service": "Ang serbisyo",
    "Thank you!": "Salamat!",
    "Thank you for telling us.": "Salamat sa pagsabi sa amin.",
    "Thank you! Would you tell others too?": "Salamat! Ikukuwento mo rin ba sa iba?",
    "Leave us a Google review": "Mag-iwan ng Google review",
    "Sorry about that. What went wrong?": "Pasensya na. Ano ang nangyari?",
    "Send to the owner": "Ipadala sa may-ari",
    "Only the owner reads this": "May-ari lang ang makakabasa nito",
    Close: "Isara",
    Done: "Tapos na",
    Back: "Bumalik",
    Remove: "Alisin",
    Skip: "Laktawan",
    Send: "Ipadala",
    "Try again": "Subukan ulit",
    Cancel: "Kanselahin",
    Check: "I-check",
    "PAID online, show this screen if asked": "BAYAD NA online, ipakita ang screen na ito kung tanungin",
    "Got it, stop ringing": "Sige, itigil ang tunog",
    "Could not cancel. Please call the shop.": "Hindi ma-cancel. Pakitawagan ang shop.",
    "No connection. Try again, or call the shop.": "Walang connection. Subukan ulit, o tawagan ang shop.",
    "Could not reach the shop. Please tell the counter you are here.": "Hindi maabot ang shop. Pakisabi sa counter na nandito ka na.",
    "No connection. Please tell the counter you are here.": "Walang connection. Pakisabi sa counter na nandito ka na.",
    "The shop has already started on this order. Please call them to change it.": "Sinimulan na ng shop ang order na ito. Pakitawagan sila para baguhin.",
    "A payment is on its way for this order. Please call the shop to cancel.": "May bayad nang papasok para sa order na ito. Pakitawagan ang shop para i-cancel.",
    "The rider is on the way soon.": "Papunta na ang rider maya-maya.",
    "Please collect it at the counter.": "Pakikuha sa counter.",
    "Have the cash ready for the rider.": "Ihanda ang cash para sa rider.",
    "This code has expired.": "Expired na ang code na ito.",
    "Get a new code": "Kumuha ng bagong code",
    "The shop cancelled this order. If you already paid, the shop will refund you.": "Kinansela ng shop ang order na ito. Kung nakabayad ka na, ibabalik ng shop ang bayad mo.",
    "Paid. The shop cancelled this order and will refund you.": "Bayad na. Kinansela ng shop ang order na ito at ibabalik ang bayad mo.",
    "This order is too old to pay online now. Please pay at the shop.": "Masyado nang luma ang order para magbayad online. Pakibayaran sa shop.",
    "Your payment needs the shop to check it, please show this screen at the counter.": "Kailangang i-check ng shop ang bayad mo, pakipakita ang screen na ito sa counter.",
    "Your order is saved, tap Pay now under Your orders to try again in a moment.": "Naka-save ang order mo, pindutin ang Magbayad ngayon sa Mga order mo para subukan ulit maya-maya.",
    "This order was paid at the counter.": "Nabayaran na sa counter ang order na ito.",
    "That payment code is no longer open. Tap Pay now to start again.": "Sarado na ang payment code na iyon. Pindutin ang Magbayad ngayon para magsimula ulit.",
    "You cancelled this order": "Kinansela mo ang order na ito",
    "The shop did not confirm it in time, please contact the shop": "Hindi ito nakumpirma ng shop sa oras, kontakin ang shop",
    "Not available right now": "Wala muna ngayon",
    "None left right now.": "Ubos na muna ngayon.",
    "Not available right now, please remove it.": "Wala muna ngayon, pakialis ito.",
    "The shop starts this order once it is paid. Please call the shop to pay.": "Sisimulan ng shop ang order na ito kapag bayad na. Pakitawagan ang shop para magbayad.",
    "Pickup times are over for today. Your order will be made as soon as possible.": "Tapos na ang mga oras ng pickup ngayong araw. Gagawin ang order mo sa lalong madaling panahon.",
    "Save a link to this order": "I-save ang link ng order na ito",
    "Ordering for another day? Save this link to follow it from any phone.": "Para sa ibang araw ang order? I-save ang link na ito para masundan mo ito sa kahit anong phone.",
    "Link copied. Open it on any phone to follow this order.": "Nakopya ang link. Buksan ito sa kahit anong phone para masundan ang order.",
    "That order could not be found. It may be more than a day old.": "Hindi makita ang order na iyon. Baka lampas na ito ng isang araw.",
    "Your basket is back.": "Bumalik na ang basket mo.",
    "Your basket is back. Some items are no longer available and were taken out.": "Bumalik na ang basket mo. May mga item na wala na at inalis na.",
    "Some items are no longer available and were taken out.": "May mga item na wala na at inalis na.",
    "Order note (optional)": "Bilin sa order (kung meron)",
    "Order note": "Bilin sa order",
    "For the shop or rider: call at the gate, the doorbell is broken": "Para sa shop o rider: tumawag pagdating sa gate, sira ang doorbell",
    "For the shop: anything they should know": "Para sa shop: anumang dapat nilang malaman",
    "Paying with": "Pambayad mo",
    "Exact amount": "Eksaktong halaga",
    "The bill you will pay with": "Ang perang ipambabayad mo",
    "Type the bill you will pay with, or choose Exact amount.": "Ilagay ang perang ipambabayad mo, o piliin ang Eksaktong halaga.",
    "That is less than the total. Choose a bigger bill, or Exact amount.": "Kulang iyan sa kabuuan. Pumili ng mas malaking pera, o Eksaktong halaga.",
    "Your location (optional)": "Lokasyon mo (kung gusto)",
    "Share my location for the rider": "Ibahagi ang lokasyon ko sa rider",
    "Your location is shared with the rider.": "Naibahagi na ang lokasyon mo sa rider.",
    "Helps the rider find you. The delivery fee does not change.": "Para madali kang mahanap ng rider. Hindi magbabago ang bayad sa delivery.",
    "This phone cannot share its location. The address and a landmark will do.": "Hindi maibahagi ng phone na ito ang lokasyon. Puwede na ang address at isang landmark.",
    "Set it on the map": "Itakda sa mapa",
    "Not right? Drag the pin to your door.": "Mali? I-drag ang pin papunta sa pinto mo.",
    "You moved the pin. The shop checks it against your address.": "Inilipat mo ang pin. Titingnan ito ng shop kasama ang address mo.",
    "You moved the pin. The rider checks it against your address.": "Inilipat mo ang pin. Titingnan ito ng rider kasama ang address mo.",
    "The pin starts at the shop. Drag it to your door, or tap the map where it should go.": "Nasa shop muna ang pin. I-drag ito papunta sa pinto mo, o i-tap ang mapa kung saan ito dapat.",
    "Drag the pin to where your order is going.": "I-drag ang pin kung saan dadalhin ang order mo.",
    'Please tap "Use my location" or set the pin on the map, so we can work out the delivery fee.': 'Pindutin ang "Gamitin ang lokasyon ko" o itakda ang pin sa mapa, para makuwenta ang bayad sa delivery.',
    "Could not get your location. Allow location for this page, or set the pin on the map.": "Hindi makuha ang lokasyon mo. Payagan ang lokasyon para sa page na ito, o itakda ang pin sa mapa.",
    "This phone cannot share its location. Set the pin on the map instead.": "Hindi maibahagi ng phone na ito ang lokasyon. Itakda na lang ang pin sa mapa.",
    'The map could not load. Tap "Use my location", or order by phone.': 'Hindi lumabas ang mapa. Pindutin ang "Gamitin ang lokasyon ko", o umorder sa telepono.',
    "Delivery time": "Oras ng delivery",
    "Delivery day": "Araw ng delivery",
    "Delivery times are over for today. Your order will be delivered as soon as possible.": "Tapos na ang mga oras ng delivery ngayong araw. Ide-deliver ang order mo sa lalong madaling panahon."
  };
  var DAYS_TL = {
    Sunday: "Linggo",
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miyerkoles",
    Thursday: "Huwebes",
    Friday: "Biyernes",
    Saturday: "Sabado"
  };
  function whenTl(w) {
    var m;
    if (w === "soon") return "maya-maya";
    if (m = /^tomorrow at (.+)$/.exec(w)) return "bukas nang " + m[1];
    if (m = /^on (\S+) at (.+)$/.exec(w)) return "sa " + (DAYS_TL[m[1]] || m[1]) + " nang " + m[2];
    if (m = /^at (.+)$/.exec(w)) return "nang " + m[1];
    return w;
  }
  var RX = [ [ /^(.+) has paused online orders$/, "Naka-pause muna ang online order ng $1" ], [ /^(.+) is closed today$/, "Sarado ngayong araw ang $1" ], [ /^The shop is closed right now\. Online orders open (.+)\.$/, function(_, w) {
    return "Sarado ang shop ngayon. Bukas ang online order " + whenTl(w) + ".";
  } ], [ /^The shop is closed today\. Online orders open again (.+)\.$/, function(_, w) {
    return "Sarado ang shop ngayong araw. Bukas ulit ang online order " + whenTl(w) + ".";
  } ], [ /^The shop has paused online orders for a short while\. Please try again (.+)\.$/, function(_, w) {
    return "Naka-pause muna ang online order ng shop. Subukan ulit " + whenTl(w) + ".";
  } ], [ /^The shop has paused online orders until (.+)\. Please choose a later time\.$/, "Naka-pause ang online order ng shop hanggang $1. Pumili ng mas huling oras." ], [ /^Online orders open again (.+)\.$/, function(_, w) {
    return "Bukas ulit ang online order " + whenTl(w) + ".";
  } ], [ /^Online orders open (.+)\.$/, function(_, w) {
    return "Bukas ang online order " + whenTl(w) + ".";
  } ], [ /^(\d+) items?$/, "$1 item" ], [ /^(.+) each$/, "$1 bawat isa" ], [ /^Add (\S+[0-9].*)$/, "Idagdag $1" ], [ /^Pay now, (.+)$/, "Magbayad ngayon, $1" ], [ /^Place order & pay (.+)$/, "I-order at bayaran $1" ], [ /^Your orders \((\d+)\)$/, "Mga order mo ($1)" ], [ /^Order again: (.+)$/, "Umorder ulit: $1" ], [ /^Open (.+) to (.+)$/, "Bukas $1 hanggang $2" ], [ /^Delivery orders start at (.+)$/, "Ang delivery ay mula $1" ], [ /^Delivery orders start at$/, "Ang delivery ay mula" ], [ /^\. Add (.+) more, or choose pickup\.$/, ". Magdagdag ng $1 pa, o piliin ang pickup." ], [ /^About (.+) km away\. Delivery fee (.+)\.$/, "Mga $1 km ang layo. Bayad sa delivery $2." ], [ /^(.+) is closed right now$/, "Sarado ngayon ang $1" ], [ /^Filter \((\d+)\)$/, "I-filter ($1)" ], [ /^Show (\d+) items?$/, "Ipakita ang $1 item" ], [ /^(\d+ )?(.+) added$/, "$1$2, naidagdag" ], [ /^Collect at (.+)$/, "Kunin sa $1" ], [ /^Deliver at (.+)$/, "Ihahatid sa $1" ], [ /^(.+) is bringing your order$/, "Dinadala ni $1 ang order mo" ], [ /^Delivered at (.+), enjoy!$/, "Na-deliver na ($1), enjoy!" ], [ /^On the way · about (.+) km from you · updated (.+)$/, "Papunta na · mga $1 km mula sa iyo · $2" ], [ /^On the way · updated (.+)$/, "Papunta na · $1" ], [ /^On the way · last seen (.+)$/, "Papunta na · huling nakita $1" ], [ /^Booked for (.+), the shop starts it nearer the time$/, "Naka-book para sa $1, sisimulan ito ng shop malapit sa oras" ], [ /^(.*)· pay at pickup$/, "$1· magbayad pagkuha" ], [ /^(.*)· pay at the counter$/, "$1· magbayad sa counter" ], [ /^(.*)· cash on delivery$/, "$1· cash on delivery" ], [ /^(.*)· paid online$/, "$1· bayad na online" ], [ /^(.*)· paid$/, "$1· bayad na" ], [ /^(.*)· waiting for payment$/, "$1· hinihintay ang bayad" ], [ /^Have (.+) ready for the rider\.$/, "Ihanda ang $1 para sa rider." ], [ /^Pick up at: (.+)$/, "Kunin sa: $1" ], [ /^Order (.+) is packed, the rider is on the way soon!$/, "Naka-pack na ang order $1, papunta na ang rider maya-maya!" ], [ /^Order (.+) is ready, please collect it at the counter!$/, "Handa na ang order $1, pakikuha sa counter!" ], [ /^Order (.+) is packed$/, "Naka-pack na ang order $1" ], [ /^Order (.+) is ready$/, "Handa na ang order $1" ], [ /^Added to ticket (.+)$/, "Idinagdag sa ticket $1" ], [ /^That pickup time has passed\. The next one is (.+), check it and place your order again\.$/, "Lumipas na ang oras ng pickup na iyon. Ang susunod ay $1, i-check ito at i-order ulit." ], [ /^That delivery time has passed\. The next one is (.+), check it and place your order again\.$/, "Lumipas na ang oras ng delivery na iyon. Ang susunod ay $1, i-check ito at i-order ulit." ], [ /^(.+) saved you more: (.+) off\. Your code was not used\. Order sent to the shop!$/, "Mas nakatipid ka sa $1: $2 off. Hindi nagamit ang code mo. Naipadala na ang order sa shop!" ], [ /^(.+) saved you more: (.+) off\. Your code was not used\. Order sent to the cashier!$/, "Mas nakatipid ka sa $1: $2 off. Hindi nagamit ang code mo. Naipadala na ang order sa cashier!" ] ];
  function tr(s) {
    var t = String(s == null ? "" : s).trim();
    if (!t || t.length > 200) return null;
    var hit = Object.prototype.hasOwnProperty.call(TL, t) ? TL[t] : null;
    if (hit == null) {
      for (var i = 0; i < RX.length; i++) if (RX[i][0].test(t)) {
        hit = t.replace(RX[i][0], RX[i][1]);
        break;
      }
    }
    if (hit == null || hit === t) return null;
    return String(s).replace(t, hit);
  }
  var saved = false;
  try {
    saved = localStorage.getItem(KEY) === "tl";
  } catch (e) {}
  var on = false;
  var SKIP = {
    SCRIPT: 1,
    STYLE: 1,
    TEXTAREA: 1,
    NOSCRIPT: 1,
    SVG: 1
  };
  var ATTRS = [ "placeholder", "aria-label", "title" ];
  function skipNode(n) {
    for (var p = n.parentNode; p && p.nodeType === 1; p = p.parentNode) {
      if (SKIP[p.nodeName.toUpperCase()] || p.hasAttribute && p.hasAttribute("data-notl")) return true;
    }
    return false;
  }
  function doText(n) {
    if (n.__tl !== undefined && n.data === n.__tl) return;
    n.__en = n.data;
    n.__tl = undefined;
    if (!on || skipNode(n)) return;
    var v = tr(n.data);
    if (v != null) {
      n.__tl = v;
      n.data = v;
    }
  }
  function doAttrs(e) {
    if (e.hasAttribute("data-notl")) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!e.hasAttribute(a)) continue;
      var cur = e.getAttribute(a), k = "__tl_" + a;
      if (e[k] !== undefined && cur === e[k]) continue;
      e["__en_" + a] = cur;
      e[k] = undefined;
      if (!on) continue;
      var v = tr(cur);
      if (v != null) {
        e[k] = v;
        e.setAttribute(a, v);
      }
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      doText(root);
      return;
    }
    if (root.nodeType !== 1 || SKIP[root.nodeName.toUpperCase()]) return;
    doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while (n = w.nextNode()) {
      if (n.nodeType === 3) doText(n); else doAttrs(n);
    }
  }
  function restore(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while (n = w.nextNode()) {
      if (n.nodeType === 3) {
        if (n.__tl !== undefined && n.data === n.__tl) n.data = n.__en;
        n.__tl = undefined;
      } else ATTRS.forEach(function(a) {
        if (n["__tl_" + a] !== undefined && n.getAttribute(a) === n["__tl_" + a]) n.setAttribute(a, n["__en_" + a]);
        n["__tl_" + a] = undefined;
      });
    }
  }
  var mo = new MutationObserver(function(list) {
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      if (m.type === "characterData") doText(m.target); else if (m.type === "attributes") {
        if (m.target.nodeType === 1) doAttrs(m.target);
      } else for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
    }
  });
  function start() {
    walk(document.body);
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRS
    });
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
  var ask = window.confirm;
  window.confirm = function(msg) {
    return ask.call(window, on ? tr(msg) || msg : msg);
  };
  var allowedHere = false;
  window.EmberLang = {
    allow: function(ok) {
      allowedHere = !!ok;
      if (allowedHere && saved && !on) {
        on = true;
        document.documentElement.lang = "tl";
        walk(document.body);
      } else if (!allowedHere && on) {
        on = false;
        document.documentElement.lang = "en";
        restore(document.body);
      }
    },
    allowed: function() {
      return allowedHere;
    },
    isTagalog: function() {
      return on;
    },
    set: function(tl) {
      on = !!tl;
      saved = on;
      try {
        localStorage.setItem(KEY, on ? "tl" : "en");
      } catch (e) {}
      document.documentElement.lang = on ? "tl" : "en";
      if (on) walk(document.body); else restore(document.body);
    },
    t: function(s) {
      return on ? tr(s) || s : s;
    }
  };
})();