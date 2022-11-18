import multer from 'multer'

function loadAvatar(){
    
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          
            cb(null, 'avatars')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
    const upload = multer({ storage })
    return upload
}
function loadImgProduct(){
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'productsImg')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
    const upload = multer({ storage })
    return upload
}

export const multerConfig = {loadAvatar, loadImgProduct}