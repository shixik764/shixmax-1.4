// app.js - minimal chat wiring for GitHub Pages (compat SDK)
// Depends on firebase.js (auth/db available globally)
// Use index_main.html and chat.html existing structure in your repo
(function(){
  // very small helper used in index_main.html and chat.html if needed
  window.shix = window.shix || {};
  window.shix.escape = function(s){ return (s||'').toString().replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); };
  // Example: simple test function to push a message (for debug)
  window.shix.testPush = async function(text){
    if(!auth.currentUser) throw new Error('not logged in');
    const payload = { userId: auth.currentUser.uid, name: auth.currentUser.displayName||auth.currentUser.email, text: text, time: Date.now() };
    await db.ref('rooms/general/messages').push(payload);
  };
  console.log('shix app helper loaded');
})();
