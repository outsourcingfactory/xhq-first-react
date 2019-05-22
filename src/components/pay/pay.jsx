import React,{Component} from 'react';
import Loading from '../../common/components/loading/index';
import api from '../../common/api/api';
import axios from '../../common/utils/Axios'; //导入axios
import style from './pay.scss';
class Pay extends Component{
    constructor(props){
        super(props); //继承
        this.state={
            isShowDiscount:true,
            paymentInfo:[
                {
                    paymenImg:"",
                    paymentName:'请选择银行卡',
                    isSelected:false,
                    payModelCode:'fastpay',
                    support:false
                },{
                    paymenImg:require('../../image/pay/weixinzhifu@2x.png'),
                    paymentName:'微信支付',
                    isSelected:true,
                    payModelCode:'wechatpay',
                    support:true
                },{
                    paymenImg: require('../../image/pay/zhifubao@2x.png'),
                    paymentName: '支付宝支付',
                    isSelected: false,
                    payModelCode: 'alipay',
                    support:false
                }
            ], //列表渲染方式
        }; //初始化一些数据
    }
    //在组件初始化的时候调用
    componentDidMount(){
         // this.reqQueryAdvanceOrder()
    }
    //在组件销毁的时候调用
    componentWillUnmount(){

    }
    selectedPayment(index) {
        if (!this.state.paymentInfo) {
            console.log('paymentInfo is null')
            return;
        }
        ;
        console.log('selectedPayment run',index);
        //这里其实可以优化 记录上一个选中的下标的
        this.state.paymentInfo.forEach((item, index) => {
            item.isSelected = false;

        });
        let selectedPayMentInfo = this.state.paymentInfo[index];
        selectedPayMentInfo.isSelected = true;
        // this.setState({
        //     paymentInfo:this.state.paymentInfo
        // })
        // this.paymentType = selectedPayMentInfo.payModelCode;
        this.setState((state,props)=>({
            paymentInfo: state.paymentInfo
        }))

    }
    //请求查询预付单接口
    reqQueryAdvanceOrder() {
        axios.post(api.QUERY_ADVANCE_ORDER,//path 路径
            {
                payToken: 'b9932193f6a44c96a67a502ddc5f4f1e'
            },
            {
                //成功回调
                success: (oData) => {
                    console.log(JSON.stringify(oData));
                    // this.isLoading=false;
                    // this.commodityPrice = '￥' + oData.amount;
                    // this.commodityName = oData.product;
                    // this.showPayUIWithRes(oData);
                },
                //失败回调
                error: (err) => {
                    // console.log(err);
                    // this.$toast(err || '系统出错');

                }
            }
        );

    }
    //return 返回的是虚拟dom结构
    render(){
        // let isShowMoudle;
        // if(true){
        //     isShowMoudle=(
        //         <div></div>
        //
        //     )
        // }else{
        //     isShowMoudle=(<Loading></Loading>)
        // }

        return (
            <div className={style.payContainer}>
                {/*{isShowMoudle}*/}
                <div className={style['pay-module1']}>
                    <div className={`${style.commodityContainer} flex flex-item flex-justify column` }>
                        <p className={style.commodityName}>测试商品</p>
                        <p className={style.commodityPrice}>￥2.0</p>
                    </div>
                    {
                        this.state.isShowDiscount&&<div className={style['discount-container']}>
                            <div className={`${style.discount} flex flex-item flex-justify-between ${style.hairlines}`}>
                                <span>折扣</span>
                                <span>已优惠￥ 1.5</span>
                            </div>
                        </div>
                    }
                </div>
                <div className={`${style.PaymentContainer} flex flex-item flex-justify column`}>
                    {this.state.paymentInfo.map((item,index)=>
                        <div className={`${style.paymentItem} flex flex-item flex-justify ${style.hairlines}`} key={index} onClick={(e)=>this.selectedPayment(index,e)}>
                            {
                                !(!item.support&&item.payModelCode=='fastpay')? (<img className={style.paymentItemImage} src={item.paymenImg} alt=""/>):false
                            }
                            {
                                !item.support&&item.payModelCode=='fastpay'?(<img className={style.paymentItemImage} src={require('../../image/pay/nofastpay.png')} alt=""/>):false
                            }
                            <span className={style.paymentName}>{item.paymentName}</span>
                            {
                                !item.support&&item.payModelCode!='fastpay'?(<span className={style.weianzhaung}>未安装</span>):false
                            }
                            {
                                !item.isSelected&&item.support?(<img src={require('../../image/pay/weixuanzhong@2x.png')} alt="" className={style.commonSelectedImage} />):false
                            }
                            {
                                item.isSelected&&item.support?(<img src={require('../../image/pay/xuanzhong@2x.png')} alt="" className={style.commonSelectedImage} />):false
                            }
                            {
                                !item.support&&item.payModelCode!='fastpay'?(<img src={require('../../image/pay/weianzhuang.png')} alt="" className={style.commonSelectedImage} />):false
                            }
                            {
                                !item.support&&item.payModelCode=='fastpay'?(<img src={require('../../image/pay/weianzhuang2.png')} alt="" className={style.commonSelectedImage} />):false
                            }
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default Pay;

