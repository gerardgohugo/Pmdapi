import { ClientService } from './client.service'
import { request } from 'http';
import { Response } from 'express';
import { Get, Query, Header, Controller, Post, Body, Res,Req, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';


@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService){}

    @Post()
    getClient(@Res() response:Response, @Body() body: []): Response {
        console.log(body)
        if ( body['pName'] && body['pType']) {
            const clientSaved= this.clientService.saveClient(body)    
            return response.status(HttpStatus.OK).send(JSON.stringify(clientSaved))
        } else {
            response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
        }
    }

    @Get('/allClient')
    getAllClient() : string[] {
        return this.clientService.getAllClient()
    }

    @Get('/product/name/:name')
    getClientById(@Param('name') pName:string) : string {
        return 'Hello ' + pName
    }
}

