// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HealthCheck from "@ioc:Adonis/Core/HealthCheck";

export default class HealthChecksController {

    public async GetHealthCheck({response}){
        const rptHealchCheck = await HealthCheck.getReport()
        return await rptHealchCheck.healthy
            ? response.ok(rptHealchCheck) 
            : response.badRequest(rptHealchCheck)
    }


}
