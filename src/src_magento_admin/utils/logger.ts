import { transports, format } from "winston";

export function options(scenarioName: string) {
    return {
        transports: [
            
            new transports.File({
                filename: `test-results/logs/${scenarioName}/log.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            }),
           
            new transports.Console({
                level: 'info', 
                format: format.combine(
                    format.colorize(), 
                    format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            })
        ]
    };
}
