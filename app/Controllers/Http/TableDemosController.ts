// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class TableDemosController {

    public async GetTableDemo({response}){
        const resTabledemo = await Database.from('tabledemo').select('*');
        return response.ok(resTabledemo);
    }

}
