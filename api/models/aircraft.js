
function aircraft(id, data) {
    this.id = id;
    this.make = data.make || '';
    this.model = data.model || '';
    this.nnumber = data.nnumber || '';
}

module.exports = aircraft;