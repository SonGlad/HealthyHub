"use strict";(self.webpackChunkhealthy_hub=self.webpackChunkhealthy_hub||[]).push([[332],{9677:function(n,t,a){a.d(t,{$:function(){return d}});var i,e=a(168),r=a(5867).zo.section(i||(i=(0,e.Z)(["\n\t/* min-height: 100vh;\n    display: flex;\n    align-items: center;\n\tflex-direction: column;\n    font-size: 40px;\n\tfont-family: 'Open Sans', sans-serif;\n    color: #fff; */\n"]))),o=a(184),d=function(n){var t=n.children;return(0,o.jsx)(r,{children:t})}},5562:function(n,t,a){a.d(t,{e:function(){return I}});var i=a(4420),e=function(n){return n.data.isLoading},r=function(n){return n.data.dailyCaloriesLimit},o=function(n){return n.data.dailyWaterLimit},d=function(n){return n.data.forSound},l=function(n){return n.data.dailyNutritionLimit.carbonohidrates},s=function(n){return n.data.dailyNutritionLimit.protein},c=function(n){return n.data.dailyNutritionLimit.fat},u=function(n){return n.data.userCurrentWater},h=function(n){return n.data.recommendedFood},f=function(n){return n.data.dailyTotalCalories},p=function(n){return n.data.dailyTotalFat},x=function(n){return n.data.dailyTotalCarbonohidretes},m=function(n){return n.data.dailyTotalProtein},g=function(n){return n.data.breakfast.breakfastMeals},b=function(n){return n.data.breakfast.breakfastTotalCalories},v=function(n){return n.data.breakfast.breakfastTotalFat},T=function(n){return n.data.breakfast.breakfastTotalCarbonohidretes},k=function(n){return n.data.breakfast.breakfastTotalProtein},w=function(n){return n.data.lunch.lunchMeals},y=function(n){return n.data.lunch.lunchTotalCalories},C=function(n){return n.data.lunch.lunchTotalFat},P=function(n){return n.data.lunch.lunchTotalCarbonohidretes},j=function(n){return n.data.lunch.lunchTotalProtein},F=function(n){return n.data.dinner.dinnerMeals},L=function(n){return n.data.dinner.dinnerTotalCalories},Z=function(n){return n.data.dinner.dinnerTotalFat},W=function(n){return n.data.dinner.dinnerTotalCarbonohidretes},M=function(n){return n.data.dinner.dinnerTotalProtein},_=function(n){return n.data.snack.snackMeals},z=function(n){return n.data.snack.snackTotalCalories},D=function(n){return n.data.snack.snackTotalFat},S=function(n){return n.data.snack.snackTotalCarbonohidretes},N=function(n){return n.data.snack.snackTotalProtein},$=function(n){return n.data.statisticPerDate.statisticsWater},E=function(n){return n.data.statisticPerDate.statisticsWeight},R=function(n){return n.data.statisticPerDate.statisticsCalories},I=function(){return{isLoadingData:(0,i.v9)(e),dailyCaloriesLimit:(0,i.v9)(r),userDailyWaterLimit:(0,i.v9)(o),dailyCarbonohidratesLimit:(0,i.v9)(l),dailyProteinLimit:(0,i.v9)(s),dailyFatLimit:(0,i.v9)(c),currentWater:(0,i.v9)(u),recommendedFood:(0,i.v9)(h),dailyTotalCalories:(0,i.v9)(f),dailyTotalFat:(0,i.v9)(p),dailyTotalCarbonohidretes:(0,i.v9)(x),dailyTotalProtein:(0,i.v9)(m),breakfastMeals:(0,i.v9)(g),breakfastTotalCalories:(0,i.v9)(b),breakfastTotalFat:(0,i.v9)(v),breakfastTotalCarbonohidretes:(0,i.v9)(T),breakfasthTotalProtein:(0,i.v9)(k),lunchMeals:(0,i.v9)(w),lunchTotalCalories:(0,i.v9)(y),lunchTotalFat:(0,i.v9)(C),lunchTotalCarbonohidretes:(0,i.v9)(P),lunchTotalProtein:(0,i.v9)(j),dinnerMeals:(0,i.v9)(F),dinnerTotalCalories:(0,i.v9)(L),dinnerTotalFat:(0,i.v9)(Z),dinnerTotalCarbonohidretes:(0,i.v9)(W),dinnerTotalProtein:(0,i.v9)(M),snackMeals:(0,i.v9)(_),snackTotalCalories:(0,i.v9)(z),snackTotalFat:(0,i.v9)(D),snackTotalCarbonohidretes:(0,i.v9)(S),snackTotalProtein:(0,i.v9)(N),statisticsWater:(0,i.v9)($),statisticsWeight:(0,i.v9)(E),statisticsCalories:(0,i.v9)(R),isForSound:(0,i.v9)(d)}}},191:function(n,t,a){a.r(t),a.d(t,{default:function(){return P}});var i,e,r,o,d,l=a(9677),s=a(3623),c=a(168),u=a(5867),h=u.ZP.div(i||(i=(0,c.Z)(["\n\n\n  h2 {\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.3;\n    margin-bottom: 16px;\n    padding-top: 20px;\n\n    @media screen and (min-width: 834px) {\n      font-size: 22px;\n      line-height: 1.5;\n      padding-top: 20px;\n    }\n\n    @media (min-width: 1440px) {\n      padding-top: 20px;\n    }\n  }\n\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-bottom: 16px;\n    height: 1040px; \n    overflow-y: auto;\n    scrollbar-width: thin; \n    scrollbar-color: transparent transparent; \n    &::-webkit-scrollbar {\n      width: 1px; \n    }\n    &::-webkit-scrollbar-thumb {\n      border-radius: 20px;\n      background-color: ",";\n    }\n    \n\n    & > :nth-last-child(-n + 2) {\n      display: none;\n    }\n\n    @media screen and (min-width: 834px) {\n      flex-direction: row;\n      flex-wrap: wrap;\n      height: 510px; \n      gap: 20px;\n      & > :nth-last-child(-n + 2) {\n        display: flex;\n      }\n    }\n\n    @media screen and (min-width: 1440px) {\n      font-size: 22px;\n      line-height: 1.5;\n      width: 676px;\n      display: flex;\n    }\n  }\n\n  li {\n    border-radius: 12px;\n    background: ",";\n    display: flex;\n    align-items: center;\n    padding: 20px 24px;\n    gap: 20px;\n\n    @media screen and (min-width: 834px) {\n      width: calc((100% - 20px) / 2);\n    }\n\n    img {\n      width: 46px;\n      height: 46px;\n    }\n  }\n"])),(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_black_2})),f=u.ZP.div(e||(e=(0,c.Z)(["\n  h3 {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.3;\n    margin-bottom: 2px;\n  }\n\n  p {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.4;\n  }\n\n  span {\n    color: ",";\n    font-weight: 500;\n    margin-left: 6px;\n  }\n"])),(function(n){return n.theme.color.primary_grey})),p=u.ZP.div(r||(r=(0,c.Z)(["\n  padding-top: 16px;\n  padding-bottom: 60px;\n\n  @media (min-width: 834px) {\n    padding-top: 20px;\n    padding-bottom: 60px;\n  }\n  @media (min-width: 1440px) {\n    padding-top: 0;\n    display: flex;\n    gap: 44px;\n    padding-bottom: 60px;\n  }\n"]))),x=u.ZP.img(o||(o=(0,c.Z)(["\n  height: 312px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 834px) {\n    height: 396px;\n    width: 380px;\n  }\n  @media (min-width: 1440px) {\n    height: 560px;\n    width: 536px;\n    margin-right: 0;\n    margin-left: 110px;\n  }\n"]))),m=u.ZP.div(d||(d=(0,c.Z)(["\n  @media (min-width: 320px) {\n    padding-top: 24px;\n    display: flex;\n    gap: 20px;\n    flex-direction: column;\n    align-items: center;\n  }\n  @media (min-width: 834px) {\n    width: 780px;\n    flex-wrap: wrap;\n    justify-content: center;\n    flex-direction: row;\n    \n  }\n  @media (min-width: 1440px) {\n    width: 680px;\n    padding: 0;\n    display: flex;\n    align-items: flex-start;\n  }\n"]))),g=a(3760),b=a.p+"static/media/Ketogenic-diet.4d015df21b58bf7bc690.png",v=a(4420),T=a(2791),k=a(5562),w=a(2072),y=a(184),C=function(){var n=(0,k.e)().recommendedFood,t=(0,v.I0)();return(0,T.useEffect)((function(){t((0,w.eX)())}),[t]),(0,y.jsx)(l.$,{children:(0,y.jsxs)(h,{children:[(0,y.jsx)("h2",{children:"Recommended food"}),(0,y.jsxs)(p,{children:[(0,y.jsx)(x,{src:b,alt:"Profile Setting Photo"}),(0,y.jsx)(m,{children:(0,y.jsx)("ul",{children:n.map((function(n){var t=n._id,a=n.amount,i=n.calories,e=n.img,r=n.name;return(0,y.jsxs)("li",{children:[(0,y.jsx)("img",{src:e,alt:"Recommended food",onError:function(n){n.target.onerror=null,n.target.src=g.Z}}),(0,y.jsxs)(f,{children:[(0,y.jsx)("h3",{children:r}),(0,y.jsxs)("p",{children:[a,(0,y.jsxs)("span",{children:[i," calories"]})]})]})]},t)}))})})]})]})})},P=function(){return(0,y.jsx)(l.$,{children:(0,y.jsx)(s.W,{children:(0,y.jsx)(C,{})})})}}}]);
//# sourceMappingURL=332.b484212f.chunk.js.map