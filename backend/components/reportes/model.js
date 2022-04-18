const selectAd = filter => {
  return `SELECT *
          FROM anuncios
          WHERE ${filter || 'true'}
          `
}

module.exports = {
  selectAd,
}
