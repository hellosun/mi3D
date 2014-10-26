/* scarlet | LXU studio http://lxustudio.com */
var PointList = [
    {id: 0, x: 377, y: 389, r: 61.5, name: "B2B", nameX: 354, nameY: 361, information: "1999年马云怀抱“让天下没有难做的生意”的理想在杭州成立阿里巴巴，B2B是阿里巴巴起步的业务板块，它致力于提供一个在线的平台让生产厂商和采购商相互发现并达成交易，围绕这些中小企业又产生了第三方服务商、认证公司、银行的网商贷、小额贷款公司等一批新“物种”。目前阿里巴巴B2B平台上的中小企业会员达到1100万。"},
    {id: 1, x: 336, y: 292, r: 17, name: "认证公司", nameX: 358, nameY: 286, information: "认证公司帮助阿里巴巴跟工商部门对接，确定阿里巴巴平台上的中小企业的工商注册、法人代表身份等信息真实有效，或提供对企业的实地考察等服务。"},
    {id: 2, x: 295, y: 283, r: 14.5, name: "商圈", nameX: 313, nameY: 273, information: "全中国有300多个围绕阿里巴巴B2B平台形成的商圈，其中既有按行业、区域划分的，也 有80后商圈，女性创业者商圈这样的个性商圈，3万多人在其中以商会友，交流各种创业经验共享创业资源。除了网商，一些政府、金融机构等相关领域的人士也参与其中。"},
    {id: 3, x: 182, y: 335, r: 31.5, name: "生产厂商", nameX: 103, nameY: 370, information: "中小企业一直是阿里巴巴聚焦的目标，1100万中小企业会员依托阿里巴巴1688平台开展国内贸易，另外还有20万中小企业依托阿里巴巴国际站alibaba.com开展国际贸易。"},
    {id: 4, x: 166, y: 402, r: 14.5, name: "阿里小贷", nameX: 108, nameY: 430, information: "阿里小贷是应用阿里积累的数据基础，以及部署在阿里云上的大数据计算能力，进行的创新信贷业务，主要服务于阿里体系内的各种小微企业和个体经营者，截止2014年3月，累计放款金额已经超过1900亿。"},
    {id: 5, x: 266, y: 410, r: 11, name: "银行网商贷", nameX: 203, nameY: 439, information: "阿里小贷和银行联合，针对于阿里平台上外贸企业经营特征，基于大数据和O2O概念量身打造的快速信用贷款，最高授信可达到1000万元。"},
    {id: 6, x: 298, y: 461, r: 9, name: "渠道商", nameX: 255, nameY: 479, information: "阿里巴巴B2B平台有60多家渠道商，这些遍布全国的渠道商为阿里巴巴全国的诚信通会员提供更本地化的服务。"},
    {id: 7, x: 319, y: 524, r: 14.5, name: "第三方服务商", nameX: 240, nameY: 566, information: "为B2B的商户提供信息服务、店铺建设到品牌建设等一系列电子商务服务，目前1688平台上有提供各种电商服务经过认证，且具备一定实力的第三方服务商300多家，服务客户数超过100家的服务商超过40家，根据服务内容的不同向托管商收取基础服务费或者成交佣金。"},
    {id: 10, x: 526, y: 513, r: 61.5, name: "消费者", nameX: 499, nameY: 493, information: "截止2014年6月30日，阿里巴巴旗下的淘宝天猫等零售平台上有2.79亿的活跃消费者，占据整个中国网购人群的九成以上，其中，移动端月活跃用户1.88亿。"},
    {id: 11, x: 645, y: 463, r: 22.5, name: "余额宝", nameX: 674, nameY: 467, information: "由天弘基金为消费者提供的一款货币基金，用户可在支付宝平台上购买，享受资金增值，并且可用于网上购物及各类缴费和支付，就如同支付宝余额一样。推出一年，规模超过5700亿，迅速成为全国最大，世界第四大的货币基金。"},
    {id: 12, x: 665, y: 499, r: 8, name: "保险公司", nameX: 681, nameY: 499, information: "国内主流保险公司均在淘宝保险频道开设了官方旗舰店，在线销售保险产品。去年双十一，国华人寿官方旗舰店一天的销量就达到了5.3亿元；同时，保险公司还为消费者开发各类全新的互联网险种，比如退货运费险，2013年双十一，华泰保险一天就卖出了超过1亿笔退货运费险，一天保费就能收几千万。"},
    {id: 13, x: 666, y: 544, r: 6, name: "招财宝", nameX: 681, nameY: 544, information: "由招财宝公司提供的投融资平台，消费者可以在上面购买到定期理财产品，并享受可预约、可变现的服务。专业金融机构，如保险公司、基金公司、银行等为其提供风险控制，上线四个月，销售量超过100亿。"},
    {id: 14, x: 564, y: 612, r: 8.5, name: "基金公司", nameX: 511, nameY: 638, information: "目前在淘宝开设店铺的基金公司超过30家，为消费者提供各类基金产品销售，以帮助消费者实现资产增值。"},
    {id: 20, x: 1106, y: 372, r: 61.5, name: "零售", nameX: 1087, nameY: 349, information: "阿里巴巴旗下的淘宝、天猫、聚划算等线上零售平台，2013年创造零售交易总额1.542万亿，这个交易量约为亚马逊的两倍，几乎相当于芬兰的经济总量。2014年这一数据依然高速增长，上半年零售总额就达到9310亿。"},
    {id: 21, x: 1098, y: 248, r: 29.5, name: "商家", nameX: 1134, nameY: 236, information: "800万商家依托阿里巴巴提供的平台为消费者提供服务。他们雇佣了近1000万从业人员，2013年创造零售交易总额1.542万亿，这个交易量约为亚马逊的两倍，几乎相当于芬兰的经济总量。2014年这一数据依然高速增长，上半年零售总额就达到9310亿。"},
    {id: 22, x: 1025, y: 227, r: 14.5, name: "店铺装修设计机构", nameX: 1052, nameY: 217, information: "专门负责网络店铺的视觉美化和视觉营销， 现在已经有超过11万家机构职业为淘宝天猫的卖家提供网络店铺装修工作，每年产值超过10亿元。"},
    {id: 23, x: 958, y: 243, r: 10, name: "ISV", nameX: 968, nameY: 230, information: "独立软件提供商，英文简称ISV，为商家提供各类软件服务，比如店铺管理、营销推广、数据分析、客户关系管理等，目前在阿里巴巴平台上的此类ISV超过1.5万家，每年可创造数十亿产值。"},
    {id: 24, x: 929, y: 263, r: 17.5, name: "淘女郎", nameX: 879, nameY: 287, information: "全国有4万名专业淘宝模特，她们又被称为“淘女郎”。2013年，她们靠自己的努力创造了超过30亿元的产值，七成卖家在调查中表示使用真人模特拍摄的图片会对生意产生促进作用。"},
    {id: 25, x: 979, y: 466, r: 7, name: "电商招聘机构", nameX: 910, nameY: 496, information: "专业的电商人力资源服务机构，主要工作是帮助电商快速便捷招募到合适人才，以淘工作平台为例，目前平台已拥有150多万份简历，其中全职简历60多万，发布招聘全职岗位15万个。"},
    {id: 26, x: 1031, y: 275, r: 7, name: "电商培训机构", nameX: 962, nameY: 303, information: "因为电子商务的发展，全国已有50多家培训机构、300多所院校开设了专门的电商教育培训课程。2014年，电子商务在线点播课程达到2000门以上，在线电商教育覆盖超4726万人次。以派代网上随便一个淘宝店长培训课程为例，3天的费用需要7800元，这个领域的产值可见一斑。"},
    {id: 27, x: 897, y: 368, r: 9, name: "代运营商", nameX: 844, nameY: 388, information: "为电商卖家提供代运营服务，代运营费用一般采取服务费+佣金的模式，服务费在1万到几万每月不等，佣金的比例在销售额的10%左 右，甚至有的高达30%。目前淘宝天猫平台 上的代运营商超过4000家，预计到2015年，代运营领域的产值至少在1000亿-1500亿之间。"},
    {id: 28, x: 923, y: 430, r: 14.5, name: "客服外包商", nameX: 857, nameY: 459, information: "客服外包商为淘宝天猫聚划算等平台上的商家提供客服外包服务，商家可以无需自己招聘和培训全职客服，使用熟练的外包客服就能快速开展业务。对于初创商家来说，这会大大降低自己的开店门槛，对成熟的商家来说，客服外包商则会给予他们更高、更灵活的服务承载能力，可以根据业务的需求灵活调配客服资源。"},
    {id: 29, x: 944, y: 448, r: 7, name: "VC/PE", nameX: 904, nameY: 470, information: "VC和PE对于阿里平台上的各类卖家和服务商兴趣浓厚，提供了融资支持。2013年7月，淘宝牛仔类目销量第一品牌“爱肯”在东南卫视《爱拼才会赢》节目里，获得了来自璞玉资本2000万元的风险投资。2013年有统计的中国电子商务投融资事件共有165起，其中风险投资152起，总额逾26.3亿美元；并购10起，金额逾7亿美元；IPO2起，募资总额约1.4亿美元；上市后增股1起，募资金额为1.8亿美 元。"},
    {id: 30, x: 744, y: 223, r: 61.5, name: "O2O", nameX: 722, nameY: 199, information: "以手机淘宝为载体，各类线下卖家和消费者得以直接连通，开展电子商务服务。目前，已有大量餐饮娱乐企业、大型综合体、汽车厂商和4S店以及药店等入驻手机淘宝。"},
    {id: 31, x: 856, y: 177, r: 13.5, name: "商场", nameX: 875, nameY: 174, information: "智能手机的普及、移动互联网的发展让传统服务业也加入电商大潮，手机淘宝上不仅有实物商家还有餐厅、电影院、KTV，甚至线下商 场也通过手机淘宝发优惠券抢客流。2014年3.8节一天，800家餐厅、300多家电影院、230家KTV放出了3.5万个就餐位、200万张电影票和5.5万个KTV包厢。这股O2O的潮流才刚刚开始。"},
    {id: 32, x: 833, y: 125, r: 7.5, name: "汽车厂商", nameX: 846, nameY: 123, information: "汽车厂商将汽车信息放在淘宝天猫上展示，用户在网上对其产品了解后，到4S店试驾并与汽车经销商议价，再到淘宝天猫付定金、线下POS刷尾款，消费者通过这样的服务还可以获得一定的权益和折扣。十六大汽车厂家、91个车系、200余款车型、1730家经销商参与去年天猫“双11”购物狂欢节，共卖出1.07万辆车。"},
    {id: 33, x: 817, y: 106, r: 10.5, name: "药店", nameX: 834, nameY: 100, information: "健康是阿里巴巴最新关注的方向，目前有大批药店已经进驻天猫医药馆，手机淘宝、支付宝钱包等手机客户端还推出了扫二维码识别药品真伪的功能，O2O将是医药行业升级的重要方向。"},
    {id: 34, x: 738, y: 90, r: 16, name: "餐厅", nameX: 758, nameY: 82, information: "智能手机的普及、移动互联网的发展让传统服务业也加入电商大潮，手机淘宝上不仅有实物商家还有餐厅、电影院、KTV，甚至线下商 场也通过手机淘宝发优惠券抢客流。2014年3.8节一天，800家餐厅、300多家电影院、230家KTV放出了3.5万个就餐位、200万张电影票和5.5万个KTV包厢。这股O2O的潮流才刚刚开始。"},
    {id: 35, x: 705, y: 106, r: 10.5, name: "电影院", nameX: 656, nameY: 121, information: "智能手机的普及、移动互联网的发展让传统服务业也加入电商大潮，手机淘宝上不仅有实物商家还有餐厅、电影院、KTV，甚至线下商 场也通过手机淘宝发优惠券抢客流。2014年3.8节一天，800家餐厅、300多家电影院、230家KTV放出了3.5万个就餐位、200万张电影票和5.5万个KTV包厢。这股O2O的潮流才刚刚开始。"},
    {id: 36, x: 665, y: 166, r: 7.5, name: "KTV", nameX: 636, nameY: 180, information: "智能手机的普及、移动互联网的发展让传统服务业也加入电商大潮，手机淘宝上不仅有实物商家还有餐厅、电影院、KTV，甚至线下商 场也通过手机淘宝发优惠券抢客流。2014年3.8节一天，800家餐厅、300多家电影院、230家KTV放出了3.5万个就餐位、200万张电影票和5.5万个KTV包厢。这股O2O的潮流才刚刚开始。"},
    {id: 41, x: 454, y: 189, r: 15.5, name: "搜索评价体系", nameX: 481, nameY: 183, information: "消费者的需求通过他们的搜索、购买、评价等行为反馈给卖家和生产厂家从而促成了新的 C2B模式，使得淘宝上“多品种、小批量、快翻新”逐步成为主流，在消费者需求的驱动下将带来个性化营销、柔性化生产、社会化协作的供应链等一系列变化，消费者不再是被动的产品和服务的接受方，这也是互联网和信息技术改变社会生产模式的典型反映。"},
    {id: 42, x: 606, y: 296, r: 21, name: "银行支付系统", nameX: 506, nameY: 318, information: "包括四大行在内的国内外近200家银行和支付宝的合作为阿里巴巴旗下的电商平台提供网上支付服务。电子商务和网上支付也促进了银行电子银行业务的普及，2013年银行中期业绩报告显示上市银行的电子银行交易替代率普遍超过70%。"},
    {id: 43, x: 582, y: 316, r: 11, name: "支付宝", nameX: 530, nameY: 336, information: "第三方支付公司，和包括四大行在内的国内外近200家银行和支付宝的合作为阿里巴巴旗下的电商平台提供网上支付服务。2013年3月 31日至2014年3月31日的财年里，支付宝完成网上支付额3.8万亿。"},
    {id: 44, x: 755, y: 337, r: 20, name: "物流公司", nameX: 693, nameY: 374, information: "2013年，阿里巴巴合作的14家快递配送商在中国的31个省份超过600个城市建立了1700多个配送中心、10万多个配送站，通过95万快递人员，他们一共为阿里巴巴旗下的淘宝天猫等零售平台送出了50亿个包裹，占到全中国当年92亿包裹总量的54%。2013年，中国快递行业总营业收入达1442.2亿元，按54%的比例淘宝天猫平台上衍生的快递业收入超过700亿。"},
    {id: 45, x: 792, y: 420, r: 11, name: "支付宝", nameX: 742, nameY: 444, information: "第三方支付公司，和包括四大行在内的国内外近200家银行和支付宝的合作为阿里巴巴旗下的电商平台提供网上支付服务。2013年3月 31日至2014年3月31日的财年里，支付宝完成网上支付额3.8万亿。"},
    {id: 46, x: 824, y: 415, r: 21, name: "银行支付系统", nameX: 748, nameY: 466, information: "包括四大行在内的国内外近200家银行和支付宝的合作为阿里巴巴旗下的电商平台提供网上支付服务。电子商务和网上支付也促进了银行电子银行业务的普及，2013年银行中期业绩报告显示上市银行的电子银行交易替代率普遍超过70%。"},
    {id: 47, x: 720, y: 570, r: 7, name: "淘宝客", nameX: 736, nameY: 566, information: "62万家网站通过阿里巴巴组织的广告营销联盟为卖家提供广告展示服务，网站按照CPC或CPS收费。2013年度这些广告直接带来的交易额超过600亿元，这些网站获得的分成达到47亿元，同期，百度广告联盟的对外分成是40亿元。"},
    {id: 48, x: 853, y: 583, r: 7, name: "导购网站", nameX: 869, nameY: 595, information: "淘宝上拥有海量的商品，导购网站会筛选出其中部分商品推荐给消费者，在这个过程中他们同时也是在帮助卖家推广商品。按照成交效果获得佣金，是导购网站主要的盈利模式。"},
    {id: 49, x: 1016, y: 518, r: 11.5, name: "搜索评价体系", nameX: 1041, nameY: 526, information: "消费者的需求通过他们的搜索、购买、评价等行为反馈给卖家和生产厂家从而促成了新的 C2B模式，使得淘宝上“多品种、小批量、快翻新”逐步成为主流，在消费者需求的驱动下将带来个性化营销、柔性化生产、社会化协作的供应链等一系列变化，消费者不再是被动的产品和服务的接受方，这也是互联网和信息技术改变社会生产模式的典型反映。"}
],
    BgList = [
    {id: 1, x: 288, y: 406, r: 121.5},
    {id: 2, x: 577, y: 524, r: 90.5},
    {id: 3, x: 1016, y: 351, r: 121.5},
    {id: 4, x: 759, y: 185, r: 96}
],
    BezierList = [
    {point0Id: 0, anchor0X: 384, anchor0Y: 403, handle0X: 403, handle0Y: -85, to: "<", point1Id: 20, anchor1X: 1098, anchor1Y: 406, handle1X: 1078, handle1Y: -58, viaPointId: 41},
    {point0Id: 0, anchor0X: 405, anchor0Y: 390, handle0X: 703, handle0Y: 448, to: "<", point1Id: 20, anchor1X: 1092, anchor1Y: 376, handle1X: 962, handle1Y: 409, viaPointId: 46},
    {point0Id: 0, anchor0X: 392, anchor0Y: 391, handle0X: 392, handle0Y: 391, to: ">", point1Id: 20, anchor1X: 1113, anchor1Y: 387, handle1X: 680, handle1Y: 252, viaPointId: 44},
    {point0Id: 10, anchor0X: 521, anchor0Y: 474, handle0X: 521, handle0Y: 474, to: "<", point1Id: 20, anchor1X: 756, anchor1Y: 346, handle1X: 546, handle1Y: 360, viaPointId: 44},
    {point0Id: 10, anchor0X: 756, anchor0Y: 346, handle0X: 884, handle0Y: 337, to: "<", point1Id: 20, anchor1X: 1117, anchor1Y: 389, handle1X: 1060, handle1Y: 373, viaPointId: 44},
    {point0Id: 10, anchor0X: 519, anchor0Y: 476, handle0X: 519, handle0Y: 476, to: ">", point1Id: 30, anchor1X: 742, anchor1Y: 225, handle1X: 509, handle1Y: 276, viaPointId: 42},
    {point0Id: 10, anchor0X: 528, anchor0Y: 516, handle0X: 727, handle0Y: 622, to: "<", point1Id: 20, anchor1X: 1077, anchor1Y: 389, handle1X: 985, handle1Y: 579, viaPointId: 47},
    {point0Id: 10, anchor0X: 538, anchor0Y: 533, handle0X: 724, handle0Y: 654, to: "<", point1Id: 20, anchor1X: 1080, anchor1Y: 396, handle1X: 999, handle1Y: 594, viaPointId: 48},
    {point0Id: 10, anchor0X: 545, anchor0Y: 554, handle0X: 756, handle0Y: 685, to: ">", point1Id: 20, anchor1X: 1085, anchor1Y: 397, handle1X: 1015, handle1Y: 616, viaPointId: 49},
    {point0Id: 10, anchor0X: 521, anchor0Y: 463, handle0X: 521, handle0Y: 463, to: ">", point1Id: 20, anchor1X: 609, anchor1Y: 304, handle1X: 538, handle1Y: 334, viaPointId: 42},
    {point0Id: 10, anchor0X: 609, anchor0Y: 304, handle0X: 668, handle0Y: 279, to: ">", point1Id: 20, anchor1X: 1088, anchor1Y: 375, handle1X: 914, handle1Y: 305, viaPointId: 42}
],
    LineList = [
    {point0Id: 0, to: ">", point1Id: 1},
    {point0Id: 0, to: ">", point1Id: 2},
    {point0Id: 0, to: ">", point1Id: 3},
    {point0Id: 0, to: ">", point1Id: 4},
    {point0Id: 0, to: ">", point1Id: 5},
    {point0Id: 0, to: ">", point1Id: 6},
    {point0Id: 0, to: ">", point1Id: 7},
    {point0Id: 1, to: ">", point1Id: 3},
    {point0Id: 2, to: ">", point1Id: 3},
    {point0Id: 3, to: "<", point1Id: 1},
    {point0Id: 3, to: "<", point1Id: 2},
    {point0Id: 3, to: "<", point1Id: 4},
    {point0Id: 3, to: "<", point1Id: 5},
    {point0Id: 3, to: "<", point1Id: 6},
    {point0Id: 3, to: "<", point1Id: 7},
    {point0Id: 4, to: ">", point1Id: 3},
    {point0Id: 5, to: ">", point1Id: 3},
    {point0Id: 6, to: ">", point1Id: 3},
    {point0Id: 7, to: ">", point1Id: 3},
    {point0Id: 10, to: "<", point1Id: 11},
    {point0Id: 10, to: "<", point1Id: 12},
    {point0Id: 10, to: "<", point1Id: 13},
    {point0Id: 10, to: "<", point1Id: 14},
    {point0Id: 11, to: ">", point1Id: 10},
    {point0Id: 12, to: ">", point1Id: 10},
    {point0Id: 13, to: ">", point1Id: 10},
    {point0Id: 13, to: "<", point1Id: 12},
    {point0Id: 13, to: "<", point1Id: 14},
    {point0Id: 14, to: ">", point1Id: 10},
    {point0Id: 20, to: ">", point1Id: 21},
    {point0Id: 20, to: ">", point1Id: 22},
    {point0Id: 20, to: ">", point1Id: 23},
    {point0Id: 20, to: ">", point1Id: 24},
    {point0Id: 20, to: ">", point1Id: 25},
    {point0Id: 20, to: ">", point1Id: 26},
    {point0Id: 20, to: ">", point1Id: 27},
    {point0Id: 20, to: ">", point1Id: 28},
    {point0Id: 20, to: ">", point1Id: 29},
    {point0Id: 21, to: ">", point1Id: 20},
    {point0Id: 21, to: "<", point1Id: 22},
    {point0Id: 21, to: "<", point1Id: 23},
    {point0Id: 21, to: "<", point1Id: 24},
    {point0Id: 21, to: "<", point1Id: 25},
    {point0Id: 21, to: "<", point1Id: 26},
    {point0Id: 21, to: "<", point1Id: 27},
    {point0Id: 21, to: "<", point1Id: 28},
    {point0Id: 21, to: "<", point1Id: 29},
    {point0Id: 22, to: ">", point1Id: 21},
    {point0Id: 22, to: ">", point1Id: 24},
    {point0Id: 23, to: ">", point1Id: 21},
    {point0Id: 24, to: ">", point1Id: 21},
    {point0Id: 24, to: ">", point1Id: 22},
    {point0Id: 25, to: ">", point1Id: 20},
    {point0Id: 25, to: ">", point1Id: 21},
    {point0Id: 25, to: ">", point1Id: 22},
    {point0Id: 25, to: ">", point1Id: 23},
    {point0Id: 25, to: ">", point1Id: 24},
    {point0Id: 25, to: ">", point1Id: 26},
    {point0Id: 25, to: ">", point1Id: 27},
    {point0Id: 25, to: ">", point1Id: 28},
    {point0Id: 26, to: ">", point1Id: 20},
    {point0Id: 26, to: ">", point1Id: 21},
    {point0Id: 26, to: ">", point1Id: 22},
    {point0Id: 26, to: ">", point1Id: 23},
    {point0Id: 26, to: ">", point1Id: 24},
    {point0Id: 26, to: ">", point1Id: 25},
    {point0Id: 26, to: ">", point1Id: 27},
    {point0Id: 26, to: ">", point1Id: 28},
    {point0Id: 27, to: ">", point1Id: 21},
    {point0Id: 28, to: ">", point1Id: 21},
    {point0Id: 29, to: ">", point1Id: 21},
    {point0Id: 29, to: ">", point1Id: 27},
    {point0Id: 30, to: ">", point1Id: 31},
    {point0Id: 30, to: ">", point1Id: 32},
    {point0Id: 30, to: ">", point1Id: 33},
    {point0Id: 30, to: ">", point1Id: 34},
    {point0Id: 30, to: ">", point1Id: 35},
    {point0Id: 30, to: ">", point1Id: 36},
    {point0Id: 31, to: ">", point1Id: 30},
    {point0Id: 32, to: ">", point1Id: 30},
    {point0Id: 33, to: ">", point1Id: 30},
    {point0Id: 34, to: ">", point1Id: 30},
    {point0Id: 35, to: ">", point1Id: 30},
    {point0Id: 36, to: ">", point1Id: 30}
],
    WIDTH = $(window).width(),
    HEIGHT = 701,
    time = 0,
    mouseX = 0,
    mouseY = 0,
    mouseOverObject = null,
    timer = 0;
$(document).ready(function () {
    function c(b) {
        mouseX = b.clientX + $(window).scrollLeft() - $(a).offset().left, mouseY = b.clientY + $(window).scrollTop() - $(a).offset().top
    }

    function e(a, c, d, e) {
        var h, i, f = 0, g = 12;
        for (h = 0; h < a.length; h++)i = a.charAt(h), b.fillText(i, c + f, d + g), f += b.measureText(i).width + 1, f > e && (f = 0, g += 18.27);
        return g
    }

    function z(a, b, c, d) {
        return Math.sqrt((c - a) * (c - a) + (d - b) * (d - b))
    }

    function A(a) {
        for (var b = 0; b < k.length; b++)if (k[b].id == a)return k[b]
    }

    var a, b, d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
    for ($("#mainCanvas").attr("width", WIDTH), $("#mainCanvas").attr("height", HEIGHT), a = document.getElementById("mainCanvas"), b = a.getContext("2d"), a.addEventListener("mousemove", c, !1), d = function () {
        var a;
        for (this.x = 73, this.y = 100, this.text = "", this.offsetY = 0, this.width = 250, this.top = 72, this.bottom = 137, this.startY = 0, this.h = 0, this.color = "#54e2ce", this.alpha = new Array, this.n = 20, a = 0; a < .5 * this.n; a++)this.alpha[a] = 2 * ((this.n - a) / this.n - .5);
        for (a = .5 * this.n; a < this.n; a++)this.alpha[a] = 2 * (a / this.n - .5)
    }, d.prototype.display = function () {
        null != mouseOverObject && (b.globalAlpha = timer < this.n ? this.alpha[timer] : 1), b.lineWidth = 1, b.strokeStyle = this.color, b.fillStyle = this.color, b.beginPath(), b.arc(this.x - 24, this.y + 15, 11.5, 0, 2 * Math.PI), b.stroke(), b.beginPath(), b.arc(this.x - 43, this.y + 13, 3, 0, 2 * Math.PI), b.fill(), b.beginPath(), b.arc(this.x - 13, this.y - 7, 1.5, 0, 2 * Math.PI), b.fill(), b.font = "18px Times", b.fillText("i", this.x - 26, this.y + 20), b.fillStyle = "#eaeaea", b.font = "12px 'Microsoft YaHei', 微软雅黑", this.h = e(this.text, this.x, this.y + this.offsetY + this.startY, this.width), b.beginPath(), b.moveTo(this.x, this.y - 18), b.lineTo(this.x + this.width, this.y - 18), b.stroke()
    }, f = function (a, b, c, d, e, f, g, h) {
        this.id = a, this.x = b, this.y = c, this.r = d, this.name = e, this.nameX = f, this.nameY = g, this.information = h, this.init()
    }, f.prototype.init = function () {
        this.color = this.id < 10 ? "#ef3c3c" : this.id < 20 ? "#f7b24f" : this.id < 30 ? "#49db6f" : this.id < 40 ? "#2ffee1" : "#a8987d", this.over = !1, this.highlight = !1, this.alpha = new Array, this.n = 20;
        for (var a = 0; a < this.n; a++)this.alpha[a] = (this.n - a) / this.n + .1;
        if (0 === this.id % 10)switch (this.id) {
            case 0:
                this.colorAlpha = "rgba(239, 60, 60, 0)";
                break;
            case 10:
                this.colorAlpha = "rgba(247, 178, 79, 0)";
                break;
            case 20:
                this.colorAlpha = "rgba(73, 219, 111, 0)";
                break;
            case 30:
                this.colorAlpha = "rgba(47, 254, 225, 0)"
        }
    }, f.prototype.display = function () {
        if (this.highlight || (b.globalAlpha = timer < this.n ? this.alpha[timer] : .1), b.beginPath(), this.over ? b.arc(this.x, this.y, 1.1 * this.r, 0, 2 * Math.PI) : b.arc(this.x, this.y, this.r, 0, 2 * Math.PI), 0 === this.id % 10)switch (b.beginPath(), this.over ? (this.grd = b.createRadialGradient(this.x, this.y, .5 * this.r, this.x, this.y, 1.4 * this.r), this.grd.addColorStop(0, this.color), this.grd.addColorStop(1, this.colorAlpha), b.arc(this.x, this.y, 1.4 * this.r, 0, 2 * Math.PI)) : (this.grd = b.createRadialGradient(this.x, this.y, .5 * this.r, this.x, this.y, 1.3 * this.r), this.grd.addColorStop(0, this.color), this.grd.addColorStop(1, this.colorAlpha), b.arc(this.x, this.y, 1.3 * this.r, 0, 2 * Math.PI)), b.fillStyle = this.grd, b.fill(), b.beginPath(), this.over ? b.arc(this.x, this.y, 1.1 * this.r, 0, 2 * Math.PI) : b.arc(this.x, this.y, this.r, 0, 2 * Math.PI), b.fillStyle = "#fff", b.fill(), b.lineWidth = 6.62, b.strokeStyle = this.color, b.stroke(), b.font = 0 === this.id || 30 === this.id ? "14px Arial" : "13px 'Microsoft YaHei', 微软雅黑", b.fillStyle = "#000", b.save(), b.translate(this.nameX, this.nameY), b.rotate(-20 * Math.PI / 180), b.fillText(this.name, 0, 0), b.restore(), this.id) {
            case 0:
                b.drawImage(v, 342, 363);
                break;
            case 10:
                b.drawImage(w, 494, 495);
                break;
            case 20:
                b.drawImage(x, 1068, 353);
                break;
            case 30:
                b.drawImage(y, 714, 200)
        } else b.fillStyle = this.color, b.fill(), this.id > 40 ? b.font = "11.34px 'Microsoft YaHei', 微软雅黑" : (b.globalAlpha = this.highlight ? null === mouseOverObject ? .8 : 1 : .1, b.font = "10.48px 'Microsoft YaHei', 微软雅黑"), b.fillStyle = "#fff", b.save(), b.translate(this.nameX, this.nameY), b.rotate(-20 * Math.PI / 180), b.fillText(this.name, 0, 0), b.restore();
        b.globalAlpha = 1
    }, f.prototype.checkMouse = function () {
        return z(mouseX, mouseY, this.x, this.y) < this.r
    }, f.prototype.checkMouseEvent = function () {
        this.checkMouse() ? (this.mouseOver(), this.over || (this.over = !0, mouseOverObject = this)) : this.over && (this.over = !1, mouseOverObject = null)
    }, f.prototype.mouseOver = function () {
        this.font = "18px 'Microsoft YaHei', 微软雅黑", this.lineHeight = 18, timer === .5 * this.n && (j.text = this.information), j.color = this.color
    }, g = function (a, b, c, d) {
        this.id = a, this.x = b, this.y = c, this.r = d, this.init()
    }, g.prototype.init = function () {
        this.id < 10 ? this.color = "#fff" : this.id < 20 || this.id < 30 || this.id < 40, this.highlight = !1, this.alpha = new Array, this.n = 20;
        for (var a = 0; a < this.n; a++)this.alpha[a] = .2 * ((this.n - a) / this.n)
    }, g.prototype.display = function () {
        b.globalAlpha = this.highlight ? .2 : timer < this.n ? this.alpha[timer] : 0, this.id < 10 && (b.beginPath(), b.arc(this.x, this.y, this.r, 0, 2 * Math.PI), b.fillStyle = this.color, b.globalAlpha = this.alpha[timer], b.fill()), b.globalAlpha = 1
    }, h = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        this.point0 = A(a), this.anchor0X = b, this.anchor0Y = c, this.handle0X = d, this.handle0Y = e, this.to = f, this.point1 = A(g), this.anchor1X = h, this.anchor1Y = i, this.handle1X = j, this.handle1Y = k, this.viaPoint0 = A(l), this.viaPoint1 = this.viaPoint0, 42 === l ? this.viaPoint1 = A(43) : 46 === l && (this.viaPoint1 = A(45)), this.init()
    }, h.prototype.init = function () {
        var a;
        for (this.xpath = new Array, this.ypath = new Array, this.n = 400, a = 0; a < this.n; a++)this.xpath[a] = this.PointOnCubicBezier(a / this.n)[0], this.ypath[a] = this.PointOnCubicBezier(a / this.n)[1];
        if (44 === this.viaPoint0.id) {
            if (10 === this.point0.id && 521 === this.anchor0X) {
                for (a = 0; a < .5 * this.n; a++)this.xpath[a] = this.PointOnCubicBezier(2 * (a / this.n))[0], this.ypath[a] = this.PointOnCubicBezier(2 * (a / this.n))[1];
                for (a = .5 * this.n; a < this.n; a++)this.xpath[a] = -2, this.ypath[a] = -2
            } else if (10 === this.point0.id) {
                for (a = 0; a < .5 * this.n; a++)this.xpath[a] = -2, this.ypath[a] = -2;
                for (a = .5 * this.n; a < this.n; a++)this.xpath[a] = this.PointOnCubicBezier(2 * ((a - .5 * this.n) / this.n))[0], this.ypath[a] = this.PointOnCubicBezier(2 * ((a - .5 * this.n) / this.n))[1]
            }
        } else if (42 === this.viaPoint0.id)if (521 === this.anchor0X) {
            for (a = 0; a < .5 * this.n; a++)this.xpath[a] = this.PointOnCubicBezier(2 * (a / this.n))[0], this.ypath[a] = this.PointOnCubicBezier(2 * (a / this.n))[1];
            for (a = .5 * this.n; a < this.n; a++)this.xpath[a] = -2, this.ypath[a] = -2
        } else if (609 === this.anchor0X) {
            for (a = 0; a < .5 * this.n; a++)this.xpath[a] = -2, this.ypath[a] = -2;
            for (a = .5 * this.n; a < this.n; a++)this.xpath[a] = this.PointOnCubicBezier(2 * ((a - .5 * this.n) / this.n))[0], this.ypath[a] = this.PointOnCubicBezier(2 * ((a - .5 * this.n) / this.n))[1]
        }
    }, h.prototype.display = function () {
        var a;
        b.beginPath(), b.moveTo(this.anchor0X, this.anchor0Y), b.bezierCurveTo(this.handle0X, this.handle0Y, this.handle1X, this.handle1Y, this.anchor1X, this.anchor1Y), b.lineWidth = 1, b.strokeStyle = "#a5a5a5", b.stroke(), a = ">" === this.to ? time % this.n : this.n - time % this.n, b.drawImage(p, this.xpath[a] - 12, this.ypath[a] - 12)
    }, h.prototype.PointOnCubicBezier = function (a) {
        var b = new Array;
        return b.push((this.anchor1X - this.anchor0X - 3 * (this.handle0X - this.anchor0X) - (3 * (this.handle1X - this.handle0X) - 3 * (this.handle0X - this.anchor0X))) * a * a * a + (3 * (this.handle1X - this.handle0X) - 3 * (this.handle0X - this.anchor0X)) * a * a + 3 * (this.handle0X - this.anchor0X) * a + this.anchor0X), b.push((this.anchor1Y - this.anchor0Y - 3 * (this.handle0Y - this.anchor0Y) - (3 * (this.handle1Y - this.handle0Y) - 3 * (this.handle0Y - this.anchor0Y))) * a * a * a + (3 * (this.handle1Y - this.handle0Y) - 3 * (this.handle0Y - this.anchor0Y)) * a * a + 3 * (this.handle0Y - this.anchor0Y) * a + this.anchor0Y), b
    }, i = function (a, b, c) {
        this.point0 = A(a), this.point1 = A(c), this.to = b, this.init()
    }, i.prototype.init = function () {
        this.xpath = new Array, this.ypath = new Array, this.n = 200;
        for (var a = 0; a < this.n; a++)this.xpath[a] = this.point0.x + (this.point1.x - this.point0.x) * a / this.n, this.ypath[a] = this.point0.y + (this.point1.y - this.point0.y) * a / this.n
    }, i.prototype.display = function () {
        var a;
        b.beginPath(), b.moveTo(this.point0.x, this.point0.y), b.lineTo(this.point1.x, this.point1.y), b.closePath(), b.lineWidth = .6, b.strokeStyle = "#878787", b.stroke(), b.beginPath(), a = ">" === this.to ? time % this.n : this.n - time % this.n, b.drawImage(p, this.xpath[a] - 12, this.ypath[a] - 12)
    }, j = new d, k = new Array, l = new Array, m = new Array, n = new Array, o = 0; o < PointList.length; o++)p = new f(PointList[o].id, PointList[o].x, PointList[o].y, PointList[o].r, PointList[o].name, PointList[o].nameX, PointList[o].nameY, PointList[o].information), k.push(p);
    for (o = 0; o < BgList.length; o++)q = new g(BgList[o].id, BgList[o].x, BgList[o].y, BgList[o].r), l.push(q);
    for (o = 0; o < BezierList.length; o++)r = new h(BezierList[o].point0Id, BezierList[o].anchor0X, BezierList[o].anchor0Y, BezierList[o].handle0X, BezierList[o].handle0Y, BezierList[o].to, BezierList[o].point1Id, BezierList[o].anchor1X, BezierList[o].anchor1Y, BezierList[o].handle1X, BezierList[o].handle1Y, BezierList[o].viaPointId), m.push(r);
    for (o = 0; o < LineList.length; o++)s = new i(LineList[o].point0Id, LineList[o].to, LineList[o].point1Id), n.push(s);
    t = new Image, u = new Image, v = new Image, w = new Image, x = new Image, y = new Image, p = new Image, t.src = "images/bgImg.jpg", u.src = "images/bgPoints.png", v.src = "images/icon0.png", w.src = "images/icon10.png", x.src = "images/icon20.png", y.src = "images/icon30.png", p.src = "images/point.png", window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 683 / 33)
        }
    }(), function B() {
        var c, d;
        for (requestAnimFrame(B), b.clearRect(0, 0, a.width, a.height), b.drawImage(t, 0, 0), null != mouseOverObject && (b.globalAlpha = .1), b.drawImage(u, 0, 0), b.globalAlpha = 1, j.display(), c = 0; c < l.length; c++)l[c].highlight = null === mouseOverObject ? !0 : !1, l[c].display();
        for (c = 0; c < k.length; c++)k[c].highlight = null === mouseOverObject || mouseOverObject === k[c] ? !0 : !1, k[c].checkMouseEvent();
        for (c = 0; c < m.length; c++)(null === mouseOverObject || mouseOverObject === m[c].point0 || mouseOverObject === m[c].point1 || mouseOverObject === m[c].viaPoint0 || mouseOverObject === m[c].viaPoint1) && (m[c].point0.highlight = !0, m[c].point1.highlight = !0, m[c].viaPoint0.highlight = !0, m[c].viaPoint1.highlight = !0, m[c].display());
        for (c = 0; c < n.length; c++)mouseOverObject === n[c].point0 && (n[c].point0.highlight = !0, n[c].point1.highlight = !0, n[c].display());
        if (null != mouseOverObject) {
            switch (mouseOverObject.id) {
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                    for (d = 0; d < m.length; d++)30 === m[d].point1.id && (m[d].point0.highlight = !0, m[d].viaPoint0.highlight = !0, m[d].viaPoint1.highlight = !0, m[d].to = "<", m[d].display(), m[d].to = ">");
                    break;
                case 21:
                    for (d = 0; d < m.length; d++)10 === m[d].point0.id && 20 === m[d].point1.id && (m[d].point0.highlight = !0, m[d].viaPoint0.highlight = !0, ">" === m[d].to ? (m[d].to = "<", m[d].display(), m[d].to = ">") : m[d].display());
                    break;
                case 41:
                case 49:
                    for (d = 0; d < m.length; d++)(41 === m[d].viaPoint0.id || 49 === m[d].viaPoint0.id) && (m[d].point0.highlight = !0, m[d].viaPoint0.highlight = !0, m[d].display());
                    break;
                case 42:
                case 43:
                case 45:
                case 46:
                    for (d = 0; d < m.length; d++)(42 === m[d].viaPoint0.id || 46 === m[d].viaPoint0.id) && (m[d].point0.highlight = !0, m[d].point1.highlight = !0, m[d].viaPoint0.highlight = !0, m[d].viaPoint1.highlight = !0, m[d].display())
            }
            timer++
        } else timer = 0, j.text = "身披史上最大IPO的光环，阿里巴巴登陆美国资本市场。是什么支撑起千亿市值，答案并非一座名叫阿里巴巴的商业帝国，而是一套由阿里巴巴搭建的商业生态系统。在这里，我们试图寻找庞杂物种之间的因果关联，挖掘系统自运转的动力所在，最终，我们发现，这个商业生态呈现出星系一般迷人的复杂图景。";
        for (c = 0; c < k.length; c++)k[c].display();
        time++
    }()
});