import { openDatabase, } from 'react-native-sqlite-storage'

var db = openDatabase({ name: 'database.db', createFromLocation: '~database.db' });

async function callApi(sql) {
    try {
        // await db.transaction(async (txn) => {
        //     await txn.executeSql(
        //         sql,
        //         [],
        //         async (tx, res) => {                    
        //             if (res.rows.length > 0) {

        //                 return res.rows
        //             }
        //         }
        //     );
        // });
        return new Promise((resolve, reject) => {
            db.transaction((txn) => {
                txn.executeSql(
                    sql,
                    [],
                    (tx, res) => {
                        if (res.rows.length > 0) {
                            let arr = []
                            for(let i = 0; i< res.rows.length; i++){
                                arr.push(res.rows.item(i))
                            }
                            resolve(arr)
                        } else {
                            resolve(undefined)
                        }
                    }
                );
            });
        })
    } catch (error) {
        return undefined
    }
}

export { callApi }