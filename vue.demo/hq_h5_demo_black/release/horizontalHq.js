webpackJsonp([1],{196:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(101),s=o.n(i),a=o(3),n=o(102),l=o(47),r=o.n(l),p=o(103),h=(o.n(p),o(104)),c=o.n(h),u=o(204),C=o.n(u),m=o(210),x=o.n(m);window.Promise||(window.Promise=s.a),a.default.use(r.a,{locale:c.a}),a.default.use(n.a);var T=[{path:"/",redirect:"/HorizontalHq"},{path:"/HorizontalHq",component:x.a}],d=new n.a({routes:T});new a.default({el:"#app",router:d,render:function(t){return t(C.a)}})},204:function(t,e,o){o(205);var i=o(17)(o(208),o(209),null,null);t.exports=i.exports},205:function(t,e,o){var i=o(206);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(16)("03072d37",i,!0)},206:function(t,e,o){e=t.exports=o(8)(void 0),e.push([t.i,"#app,body{height:100%;width:100%}body,html{font:62.5% PingFang-SC-Regular,Microsoft Yahei}",""])},208:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){document.title="横屏行情"}}},209:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]}},210:function(t,e,o){o(211);var i=o(17)(o(213),o(269),null,null);t.exports=i.exports},211:function(t,e,o){var i=o(212);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(16)("18793779",i,!0)},212:function(t,e,o){e=t.exports=o(8)(void 0),e.push([t.i,"#app,body{color:#fff;background-color:#1a1c30}#app,.container,body{height:100%;width:100%}.container{position:absolute;top:0;left:0}.PriceUp,.PriceUp>span{color:#ee1515!important}.PriceDown,.PriceDown>span{color:#199e00!important}.PriceNull{color:#fff!important}.topSwiper{width:30px;height:100%;position:absolute;top:0;z-index:100;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;font-size:1.4rem}.oneItem,.topSwiper{display:-ms-flexbox;display:flex}.oneItem{width:100%;-ms-flex:1;flex:1;text-align:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.oneItem>span{display:block;white-space:nowrap;transform:rotate(90deg)}.activeTopSwiper{box-sizing:border-box;color:#217cd9}.symbolInfo{width:50px;height:100%;position:absolute;top:0;right:0}.symbolContent{height:calc(100% - 44px);width:100%;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.symbol_left{height:40%}.symbol_right{height:60%}.symbol_right_minute{height:76%}.symbol_left{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.symbol_left_0{-ms-flex:1;flex:1;padding-left:13px;box-sizing:border-box;font-size:20px}.symbol_left_0 .backIconWrap{display:inline-block;height:40px;width:20px;line-height:40px;font-size:20px;transform:rotate(90deg)}.symbol_left_1{-ms-flex:2;flex:2;flex-direction:row;margin-left:-6px;margin-right:8px}.symbol_left_1,.symbol_left_Kline{-ms-flex-direction:row;transform:rotate(90deg)}.symbol_left_Kline{margin:35px -6px 0 10px;flex-direction:row;font-size:16px;display:-ms-flexbox;display:flex}.symbol_left_Kline>div{display:inline-block;white-space:nowrap}.nameCss{font-size:15px;margin-top:-3px}.nameCss,.nameCss-kline{font-weight:600;box-sizing:border-box;width:80px}.nameCss-kline{font-size:16px}.symbolCss{font-size:12px;padding-top:20px}.symbolCss,.symbolCss-kline{color:#f5f5f5;box-sizing:border-box}.symbolCss-kline{font-size:16px;margin-left:10px}.symbol_left_1>.increaseCss,.symbol_left_1>.increaseCss_1{-ms-flex-pack:start;justify-content:flex-start;font-size:12px;font-weight:600}.topCss{padding-top:20px}.bottomCss,.topCss{box-sizing:border-box}.bottomCss{margin-top:-3px}.symbol_left_2{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;transform:rotate(90deg);font-size:19px;margin:15px 0 0}.redCss{color:red}.greenCss{color:green}.symbol_right{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.symbol_right>div{height:24%}.symbol_right_1{display:-ms-flexbox;display:flex;white-space:nowrap;-ms-flex-direction:row;flex-direction:row}.symbol_right_1>div{width:50%;transform:rotate(90deg);transform-origin:25% 20%;font-size:14px}.titleCss{padding-right:7px;color:#f5f5f5}.topCss1{padding-top:1px}.bottomCss1,.topCss1{box-sizing:border-box}.bottomCss1{padding-top:9px}.closeCss{height:44px;width:100%;line-height:54px;text-align:center}",""])},213:function(t,e,o){"use strict";function i(){}Object.defineProperty(e,"__esModule",{value:!0});var s=o(34),a=o.n(s),n=o(113),l=o(46),r=o.n(l),p=o(76),h=(o.n(p),o(77)),c=o.n(h),u=o(79),C=(o.n(u),o(80)),m=(o.n(C),o(122)),x=o.n(m),T=c.a.Chart;i.GetStockData=function(){return{Name:{Text:"浦发银行"},Price:{Text:"7.04",Color:"PriceNull"},RiseFallPrice:{Text:"-0.05",Color:"PriceNull"},Increase:{Text:"-0.71%",Color:"PriceNull"},High:{Text:"7.10",Color:"PriceNull"},Low:{Text:"7.02",Color:"PriceNull"},Open:{Text:"7.09",Color:"PriceNull"},MaxPrice:{Text:"7.15",Color:"PriceNull"},MinPrice:{Text:"7.00",Color:"PriceNull"},YClose:{Text:"7.09"},Excahngerate:{Text:"0.07%",Color:"PriceNull"},Amount:{Text:"1.43亿"},Vol:{Text:"20.27万"},Pe:{Text:"4.47"},Roe:{Text:"3.73%"},MarketV:{Text:"2300亿"},FlowMarketV:{Text:"2010亿"},Eps:{Text:"3.3"},ScrollEPS:{Text:"1.4"},Pb:{Text:"2.3"},Amplitude:{Text:"3.4"},BookRate:{Text:"0.5%"},BookDiffer:{Text:"2.4"},Volratio:{Text:"0.3%"},CapitalTatol:{Text:"20.1亿"},CapitalA:{Text:"20.3亿"},Down:{Text:""},Up:{Text:""},Unchanged:{Text:""},Stop:{Text:""},HK:{Symbol:"",Name:""},IsMargin:!1,IsSHHK:!1,IsHK:!1,SellerFive:[],BuyerFive:[],Dealer:[]}},i.GetMinuteOption=function(t){return{Type:"分钟走势图横屏",Symbol:t,IsAutoUpate:!0,IsShowRightMenu:!1,IsShowCorssCursorInfo:!1,DayCount:1,CorssCursorTouchEnd:!0,CorssCursorInfo:{Left:2,Right:2,Bottom:1,IsShowCorss:!0},Border:{Left:20,Right:1,Top:1,Bottom:1},KLineTitle:{IsShowName:!1,IsShowSettingInfo:!1},Frame:[{SplitCount:5,StringFormat:0},{SplitCount:3,StringFormat:0}]}},i.GetKlineOption=function(t){return{Type:"历史K线图横屏",Windows:[{Index:"均线",Modify:!1,Change:!1},{Index:"VOL",Modify:!1,Change:!1,IsDrawTitleBG:!1},{Index:"MACD",Modify:!1,Change:!1,IsDrawTitleBG:!1}],Symbol:t,IsAutoUpate:!0,CorssCursorTouchEnd:!0,IsShowRightMenu:!1,CorssCursorInfo:{Left:2,Right:0,Bottom:1,IsShowCorss:!0},KLine:{DragMode:1,Right:1,Period:0,MaxReqeustDataCount:1e3,MaxRequestMinuteDayCount:15,PageSize:50,IsShowTooltip:!1},KLineTitle:{IsShowName:!1,IsShowSettingInfo:!1},Border:{Left:20,Right:1,Top:1,Bottom:1},Frame:[{SplitCount:4,IsShowLeftText:!1,IsShowRightText:!0,Custom:[{Type:0,Position:"left"}]},{SplitCount:3,StringFormat:0,IsShowLeftText:!1,IsShowRightText:!0},{SplitCount:3,StringFormat:0,IsShowLeftText:!1,IsShowRightText:!0}]}},i.GetPeriodData=function(t){var e=new a.a([["分时",{Value:1,KLineShow:!1,MinuteShow:!0}],["五日",{Value:5,KLineShow:!1,MinuteShow:!0}],["日线",{Value:0,KLineShow:!0,MinuteShow:!1}],["周线",{Value:1,KLineShow:!0,MinuteShow:!1}],["月线",{Value:2,KLineShow:!0,MinuteShow:!1}],["年线",{Value:3,KLineShow:!0,MinuteShow:!1}],["1分钟",{Value:4,KLineShow:!0,MinuteShow:!1}],["5分钟",{Value:5,KLineShow:!0,MinuteShow:!1}],["15分钟",{Value:6,KLineShow:!0,MinuteShow:!1}],["30分钟",{Value:7,KLineShow:!0,MinuteShow:!1}],["60分钟",{Value:8,KLineShow:!0,MinuteShow:!1}]]);return e.has(t)?e.get(t):null},e.default={name:"TabList",data:function(){return{PeriodList:[{Name:"分时",Value:1},{Name:"五日",Value:5},{Name:"日线",Value:0},{Name:"周线",Value:1},{Name:"月线",Value:2},{Name:"5分钟",Value:5}],Minute:{JSChart:null,IsShow:!0,Option:i.GetMinuteOption(this.Symbol)},Kline:{JSChart:null,IsShow:!1,Option:i.GetKlineOption(this.Symbol)},Symbol:"600000.sh",TabTextIndex:0,Name:"",StockData:i.GetStockData(),Tooltip:{IsshowTooltip:!1,Data:{Date:{Text:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},YClose:{Text:""},Vol:{Text:""},Amount:{Text:""}}},MinuteTooltip:{IsshowTooltip:!1,Data:{Time:{Text:""},AvPrice:{Text:"",Color:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},Increase:{Text:"",Color:""},Risefall:{Text:"",Color:""},Vol:{Text:""},Amount:{Text:""}}}}},created:function(){if(n.a.getURLParams("symbol")&&(console.log("Tools.getURLParams::::::",n.a.getURLParams("symbol")),this.Symbol=n.a.getURLParams("symbol")),n.a.getURLParams("index")){this.TabTextIndex=n.a.getURLParams("index");var t=n.a.getURLParams("index");this.Name=this.PeriodList[t].Name}},mounted:function(){this.OnSize();var t=this;window.onresize=function(){t.OnSize()},this.ChangeChartTab(this.Name,this.TabTextIndex)},watch:{},methods:{OnSize:function(){var t=window.innerWidth-76,e=window.innerHeight;r()("#minuteChart").width(t),r()("#minuteChart").height(e),r()("#kline").width(t),r()("#kline").height(e)},ChangeChartTab:function(t,e){this.TabTextIndex=e;var o=i.GetPeriodData(t);o&&(o.KLineShow&&this.ChangeKLinePeriod(o.Value),this.Kline.IsShow=o.KLineShow,o.MinuteShow&&this.ChangeMinutePeriod(o.Value),this.Minute.IsShow=o.MinuteShow)},ChangeKLinePeriod:function(t){this.Kline.JSChart?this.Kline.JSChart.ChangePeriod(t):(this.Kline.Option.KLine.Period=t,this.CreateKLineChart())},CreateKLineChart:function(){var t=this;if(!this.Kline.JSChart){this.Kline.Option.Symbol=this.Symbol;var e=T.JSChart.Init(this.$refs.kline);this.Kline.JSChart=e;var o=T.HQChartStyle.GetStyleConfig(T.STYLE_TYPE_ID.BLACK_ID);T.JSChart.SetStyle(o),this.$refs.kline.style.backgroundColor="#1a1c30",this.Kline.Option.NetworkFilter=function(e,o){t.NetworkFilter(e,o)},this.Kline.Option.EventCallback=[{event:T.JSCHART_EVENT_ID.ON_CLICK_INDEXTITLE,callback:this.OnClickIndexTitle},{event:T.JSCHART_EVENT_ID.ON_TITLE_DRAW,callback:function(e,o,i){t.UpdateTitle(e,o,i)}}],e.SetOption(this.Kline.Option)}},UpdateTitle:function(t,e,o){var i={Date:{Text:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},YClose:{Text:""},Vol:{Text:""},Amount:{Text:""}},e=e.Draw;null!=e&&(i.Date=e.Date.toString().substring(0,4)+"-"+e.Date.toString().substring(4,6)+"-"+e.Date.toString().substring(6,8),i.High.Text=T.IFrameSplitOperator.FormatValueString(e.High,2),i.High.Color=T.IFrameSplitOperator.FormatValueColor(e.High,e.YClose),i.Low.Text=T.IFrameSplitOperator.FormatValueString(e.Low,2),i.Low.Color=T.IFrameSplitOperator.FormatValueColor(e.Low,e.YClose),i.Open.Text=T.IFrameSplitOperator.FormatValueString(e.Open,2),i.Open.Color=T.IFrameSplitOperator.FormatValueColor(e.Open,e.YClose),i.Close.Text=T.IFrameSplitOperator.FormatValueString(e.Close,2),i.Close.Color=T.IFrameSplitOperator.FormatValueColor(e.Close,e.YClose),i.YClose.Text=T.IFrameSplitOperator.FormatValueString(e.YClose,2),i.Vol.Text=T.IFrameSplitOperator.FormatValueString(e.Vol,2),i.Amount.Text=T.IFrameSplitOperator.FormatValueString(e.Amount,2),this.Tooltip.Data=i,this.Tooltip.IsshowTooltip=!1,this.Kline.JSChart.JSChartContainer&&1==this.Kline.JSChart.JSChartContainer.IsOnTouch&&"DrawDynamicInfo"==t.FunctionName&&(this.Tooltip.IsshowTooltip=!0))},CreateMinuteChart:function(){var t=this;if(!this.Minute.JSChart){this.Minute.Option.Symbol=this.Symbol;var e=T.JSChart.Init(this.$refs.minute);this.Minute.JSChart=e;var o=T.HQChartStyle.GetStyleConfig(T.STYLE_TYPE_ID.BLACK_ID);o.FrameTitleBGColor="#1a1c30",T.JSChart.SetStyle(o),this.$refs.minute.style.backgroundColor="#1a1c30",this.Minute.Option.NetworkFilter=function(e,o){t.NetworkFilter(e,o)},this.Minute.Option.EventCallback=[{event:T.JSCHART_EVENT_ID.ON_TITLE_DRAW,callback:function(e,o,i){t.UpdateMinuteTitle(e,o,i)}}],e.SetOption(this.Minute.Option)}},UpdateMinuteTitle:function(t,e,o){console.log("[UpdateMinuteTitle]  data",e);var i={Time:{Text:""},AvPrice:{Text:"",Color:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},Increase:{Text:"",Color:""},Risefall:{Text:"",Color:""},Vol:{Text:""},Amount:{Text:""}},e=e.Draw;null!=e&&(e.Time>=1e3?i.Time=e.Time.toString().substring(0,2)+":"+e.Time.toString().substring(2,4):i.Time=e.Time.toString().substring(0,1)+":"+e.Time.toString().substring(1,3),i.AvPrice.Text=T.IFrameSplitOperator.FormatValueString(e.AvPrice,2),i.High.Text=T.IFrameSplitOperator.FormatValueString(e.High,2),i.Low.Text=T.IFrameSplitOperator.FormatValueString(e.Low,2),i.Open.Text=T.IFrameSplitOperator.FormatValueString(e.Open,2),i.Close.Text=T.IFrameSplitOperator.FormatValueString(e.Close,2),i.Increase.Text=T.IFrameSplitOperator.FormatValueString(e.Increase,2)+"%",i.Increase.Color=T.IFrameSplitOperator.FormatValueColor(e.Increase),i.Risefall.Text=T.IFrameSplitOperator.FormatValueString(e.Risefall,2),i.Risefall.Color=T.IFrameSplitOperator.FormatValueColor(e.Risefall),i.Vol.Text=T.IFrameSplitOperator.FormatValueString(e.Vol,2),i.Amount.Text=T.IFrameSplitOperator.FormatValueString(e.Amount,2),this.MinuteTooltip.Data=i,this.MinuteTooltip.IsshowTooltip=!1,this.Minute.JSChart.JSChartContainer&&1==this.Minute.JSChart.JSChartContainer.IsOnTouch&&"DrawDynamicInfo"==t.FunctionName&&(this.MinuteTooltip.IsshowTooltip=!0))},NetworkFilter:function(t,e){x.a.HQData.NetworkFilter(t,e)},ChangeMinutePeriod:function(t){this.Minute.JSChart?(1==t?this.IsFiveminute=!1:5==t&&(this.IsFiveminute=!0),this.OnSize(),this.Minute.JSChart.OnSize(),this.Minute.JSChart.ChangeDayCount(t)):(this.Minute.Option.DayCount=t,this.CreateMinuteChart())},GoBack:function(){window.history.back(-1)},FormatBackColor:function(t,e){return null!=t&&null==e?0==t?"BackNull":t>0?"BackUp":"BackDown":null==t||null==e?"BackNull":t==e?"BackNull":t>e?"BackUp":"BackDown"},IsSHSZIndex:function(){return T.MARKET_SUFFIX_NAME.IsSHSZIndex(this.Symbol)},IsShowChangeSymbol:function(){this.IsChangeSymbol=!0}}}},269:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],ref:"minute",staticStyle:{"margin-left":"28px"},attrs:{id:"minuteChart"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.Kline.IsShow,expression:"Kline.IsShow"}],ref:"kline",staticStyle:{"margin-left":"28px"},attrs:{id:"kline"}}),t._v(" "),o("div",{staticClass:"topSwiper"},t._l(t.PeriodList,function(e,i){return o("div",{key:i,staticClass:"oneItem",class:{activeTopSwiper:t.TabTextIndex==i},on:{click:function(o){return t.ChangeChartTab(e.Name,i)}}},[o("span",[t._v(t._s(e.Name))])])}),0),t._v(" "),o("div",{staticClass:"symbolInfo"},[o("div",{staticClass:"symbolContent"},[o("div",{staticClass:"symbol_left"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.Kline.IsShow,expression:"Kline.IsShow"}],staticClass:"symbol_left_Kline"},[o("div",{staticClass:"nameCss-kline"},[t._v(t._s(t.StockData.Name.Text))]),t._v(" "),o("div",{staticClass:"symbolCss-kline"},[t._v(t._s(t.Symbol))])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],staticClass:"symbol_left_1"},[o("div",{staticClass:"symbolCss"},[t._v(t._s(t.Symbol))]),t._v(" "),o("div",{staticClass:"nameCss"},[t._v(t._s(t.StockData.Name.Text))])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],staticClass:"symbol_left_2",class:t.MinuteTooltip.Data.Increase.Color},[t._v("\n            "+t._s(t.MinuteTooltip.Data.AvPrice.Text)+"\n          ")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.Kline.IsShow,expression:"Kline.IsShow"}],staticClass:"symbol_right"},[o("div",{staticClass:"symbol_right_1"},[o("div",{staticClass:"topCss1"},[o("span",{staticClass:"titleCss"},[t._v("低")]),t._v(" "),o("span",{class:t.Tooltip.Data.Low.Color},[t._v(t._s(t.Tooltip.Data.Low.Text))])]),t._v(" "),o("div",{staticClass:"bottomCss1"},[o("span",{staticClass:"titleCss"},[t._v("高")]),t._v(" "),o("span",{class:t.Tooltip.Data.High.Color},[t._v(t._s(t.Tooltip.Data.High.Text))])])]),t._v(" "),o("div",{staticClass:"symbol_right_1"},[o("div",{staticClass:"topCss1"},[o("span",{staticClass:"titleCss"},[t._v("收")]),t._v(" "),o("span",[t._v(t._s(t.Tooltip.Data.Close.Text))])]),t._v(" "),o("div",{staticClass:"bottomCss1"},[o("span",{staticClass:"titleCss"},[t._v("开")]),t._v(" "),o("span",{class:t.Tooltip.Data.Open.Color},[t._v(t._s(t.Tooltip.Data.Open.Text))])])]),t._v(" "),o("div",{staticClass:"symbol_right_1 symbol_right_3"},[o("div",{staticClass:"topCss1"},[o("span",{staticClass:"titleCss"},[t._v("成交额")]),t._v(" "),o("span",[t._v(t._s(t.Tooltip.Data.Amount.Text))])]),t._v(" "),o("div",{staticClass:"bottomCss1"},[o("span",{staticClass:"titleCss"},[t._v("成交量")]),t._v(" "),o("span",[t._v(t._s(t.Tooltip.Data.Vol.Text))])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],staticClass:"symbol_right symbol_right_minute"},[o("div",{staticClass:"symbol_right_1",staticStyle:{height:"24%"}},[o("div",{staticClass:"topCss1"},[o("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Increase.Text))])]),t._v(" "),o("div",{staticClass:"bottomCss1"},[o("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Risefall.Text))])])]),t._v(" "),o("div",{staticClass:"symbol_right_1"},[o("div",{staticClass:"topCss1"},[o("span",{staticClass:"titleCss"},[t._v("低")]),t._v(" "),o("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Low.Text))])]),t._v(" "),o("div",{staticClass:"bottomCss1"},[o("span",{staticClass:"titleCss"},[t._v("高")]),t._v(" "),o("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.High.Text))])])]),t._v(" "),o("div",{staticClass:"symbol_right_1"},[o("div",{staticClass:"topCss1"},[o("span",{staticClass:"titleCss"},[t._v("收")]),t._v(" "),o("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Close.Text))])]),t._v(" "),o("div",{staticClass:"bottomCss1"},[o("span",{staticClass:"titleCss"},[t._v("开")]),t._v(" "),o("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Open.Text))])])]),t._v(" "),o("div",{staticClass:"symbol_right_1 symbol_right_3"},[o("div",{staticClass:"topCss1"},[o("span",{staticClass:"titleCss"},[t._v("成交额")]),t._v(" "),o("span",[t._v(t._s(t.MinuteTooltip.Data.Amount.Text))])]),t._v(" "),o("div",{staticClass:"bottomCss1"},[o("span",{staticClass:"titleCss"},[t._v("成交量")]),t._v(" "),o("span",[t._v(t._s(t.MinuteTooltip.Data.Vol.Text))])])])])]),t._v(" "),o("div",{staticClass:"closeCss",on:{click:t.GoBack}},[o("span",{staticClass:"hq_iconfont icon-suoxiao",staticStyle:{"font-size":"22px"}})])])])])},staticRenderFns:[]}}},[196]);
//# sourceMappingURL=horizontalHq.js.map?cb51f65d6b6f5516eacd