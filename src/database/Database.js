const mysql = require('mysql');

/**
 * Establishes Database connection
 * @param options {object} the Data needed to connect to the database
 * @param cb {function} callback Function
 */
const start = (options, cb) => {

    const con = mysql.createConnection(options);
    con.connect((error) => {
        if (error) {
            cb(false, error);
            return;
        }
        cb(true, {
            connection: con, easyExecute: (statement, inserts, callback) => {
                const toExec = mysql.format(statement, inserts);
                con.query(toExec, (error, results, fields) => {
                    callback(error, results, fields);

                });
            }
        });

    });
};
exports.start = start;