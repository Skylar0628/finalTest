import axios from "axios"


// 登入
export const login = (async(data,navigate,MyContext)=>{
    await axios.post(`${process.env.REACT_APP_URL}/v2/admin/signin`,data)
    .then((res)=> {
        const { token,expired } = res.data;
        document.cookie = `myToken=${token}; expirse=${ new Date(expired) }`
        console.log(res.data.success)
        if(res.data.success){
            navigate('/admin/Product')
        }else{
            MyContext.setIsLogin(false);
        }
    })
    .catch((err)=>{
      console.log(err)
    })
})

// 取得客戶購物產品 => 全部
export const getProductAll = (async(MyContext)=>{
    await axios.get(`${process.env.REACT_APP_URL}/v2/api/${process.env.REACT_APP_API_PATH}/products/all`)
    .then((result)=>{
        console.log(result)
        const MapData = result.data.products.map((item, index)=>({
          ...item, id: index + 1, 
        }))
        MyContext.setData(MapData)
    })
    .catch((error)=>{
        console.log(error)
    })
})
