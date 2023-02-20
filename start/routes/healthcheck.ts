import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/v1/demo/healthcheck','HealthChecksController.GetHealthCheck');