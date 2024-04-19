let db = require('../config/connection');

module.exports = {
    AddTasks: (data,callBack) => {
        db.query(`insert into tasks(user_id,title,description) values (?,?,?)`,[data.user_id,data.email,data.password],
        (error,result) =>{
            if (error) {
                return callBack(error);
            }else{
                return callBack(result);
            }
        });
    },
    GetTasks: callBack => {
        db.query(`select * from tasks`, [], (err, results) => {
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results);
            }
        });
    },
    GetTasksById: (id, callBack) => {
        db.query(
            `select * from tasks where id = ?`,
            [id],
            (err, resuls) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, resuls[0]);
                }
            }
        );
    },
    UpdateTasks: (data, callBack) => {
        db.query(
            `update tasks set title=?,description=? where id=?`,
            [
                data.title,
                data.description,
                data.id
            ],
            (err, results,) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    },
    DeleteTasks: (id, callBack) => {
        db.query(`select * from tasks where id=?`,
            [id],
            (err, result) => {
                if (err) {
                    callBack(err)
                } if (!result) {
                    callBack(result)
                } else {
                    db.query(`delete from tasks where id=?`,
                        [id])
                    return callBack(null, result[0])
                }
            })
    }
};