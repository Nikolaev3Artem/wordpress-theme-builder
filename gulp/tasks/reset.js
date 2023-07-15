import {deleteAsync}  from "del";

export const reset = () => {
    return deleteAsync([app.path.build.files],{force:true})
}