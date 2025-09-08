// for add to-let functionality 
document.getElementById('toLetForm').onsubmit = function(e) { e.preventDefault(); const newProperty = { title: document.getElementById('propertyTitle').value, location: document.getElementById('propertyLocation').value, rent: document.getElementById('propertyRent').value, bedrooms: document.getElementById('propertyBedrooms').value, bathrooms: document.getElementById('propertyBathrooms').value, image: document.getElementById('propertyImage').value }; 
// লোকাল স্টোরেজে সেভ করা 
let toLetList = JSON.parse(localStorage.getItem('toLetList')) || []; toLetList.push(newProperty); localStorage.setItem('toLetList', JSON.stringify(toLetList));
 // মডাল বন্ধ করা 
 bootstrap.Modal.getInstance(document.getElementById('addToLetModal')).hide(); this.reset(); alert('Property added successfully!'); };