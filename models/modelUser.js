let db = require('../config/connection');

module.exports = {
    AddUser: (data,callBack) => {
        db.query(`insert into user(email,password) values (?,?)`,[data.email,data.password],
        (error,result) =>{
            if (error) {
                return callBack(error);
            }else{
                return callBack(result);
            }
        });
    },
    GetUser: callBack => {
        db.query(`select * from user`, [], (err, results) => {
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results);
            }
        });
    },
    GetUserById: (id, callBack) => {
        db.query(
            `select * from user where id = ?`,
            [id],
            (err, result) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, result);
                }
            }
        );
    },
    UpdateUser: (data, callBack) => {
        db.query(
            `update user set email=?,password=? where id=?`,
            [
                data.email,
                data.password,
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
    getUserByEmail: (email,callBack) => {
        db.query(`select email,password from user where email = ?`,
        [email],
        (err, result) => {
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, result[0]);
            }
        })
    },
    DeleteUser: (id, callBack) => {
        db.query(`select * from user where id=?`,
            [id],
            (err, result) => {
                if (err) {
                    callBack(err)
                } if (!result) {
                    callBack(result)
                } else {
                    db.query(`delete from user where id=?`,
                        [id])
                    return callBack(null, result[0])
                }
            })
    }
};