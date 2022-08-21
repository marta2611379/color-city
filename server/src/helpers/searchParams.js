class SearchParams {
    async searchData(reqSearchParams) {
        let search = new Object();
        (reqSearchParams).split('&').forEach(element => {
            if (element.length) {
                search[(element).split('=')[0]] = (element).split('=')[1]
            }
        });
        return search;
    }

}

module.exports = new SearchParams();