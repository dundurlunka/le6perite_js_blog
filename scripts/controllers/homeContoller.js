class HomeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    listTopPosts() {
        let _self = this;

        this.model.getTopPosts()
            .then(function (successData) {
                let topPosts = [];
                successData.sort((a,b) => b.views - a.views);
                for(let i = 0; i < Math.min(successData.length,3); i ++)
                    topPosts.push(successData[i]);
                _self.view.listTopPosts(topPosts);
            })
            .catch(ajaxError)
    }
}