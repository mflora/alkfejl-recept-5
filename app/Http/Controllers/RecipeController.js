'use strict'

//const Database = use('Database')
const Category = use('App/Model/Category')


class RecipeController {

    * list(req, res) {

        const categories = yield Category.with('recipes').fetch();  //ide lett valami írva...


        yield res.sendView('main', {
            categories: categories.toJSON()
        });
    }

}

module.exports = RecipeController
