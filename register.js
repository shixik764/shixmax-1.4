// register.js - handles registration form on register.html
// Requires: firebase.js loaded (compat), and that auth/db are available as globals
document.addEventListener('DOMContentLoaded', () => {
  const regBtn = document.getElementById('regBtn');
  const emailEl = document.getElementById('r_email');
  const passEl = document.getElementById('r_pass');
  const nameEl = document.getElementById('r_name');
  const avatarInput = document.getElementById('r_avatar');

  if (!regBtn) return;
  regBtn.addEventListener('click', async () => {
    const email = (emailEl.value || '').trim();
    const pass = passEl.value || '';
    const name = (nameEl.value || '').trim() || email.split('@')[0];

    if (!email || !pass) { alert('Введите email и пароль'); return; }
    try {
      const cred = await auth.createUserWithEmailAndPassword(email, pass);
      const user = cred.user;
      await user.updateProfile({ displayName: name }).catch(()=>{});
      // upload avatar if present using Uploadcare if loaded, otherwise skip
      let avatarUrl = null;
      const f = avatarInput && avatarInput.files && avatarInput.files[0];
      if (f && window.uploadcare) {
        const ucFile = uploadcare.fileFrom('object', f);
        const uploaded = await ucFile.upload();
        avatarUrl = uploaded.cdnUrl;
      }
      await db.ref('profiles/'+user.uid).set({ name, avatar: avatarUrl, created: Date.now() });
      alert('Регистрация успешна — вы будете перенаправлены');
      window.location.href = 'index_main.html';
    } catch (err) {
      alert('Ошибка регистрации: ' + (err.message || err));
    }
  });
});
