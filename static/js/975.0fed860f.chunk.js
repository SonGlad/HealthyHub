"use strict";(self.webpackChunkhealthy_hub=self.webpackChunkhealthy_hub||[]).push([[975],{8088:function(n,e,t){t(2791);e.Z=t.p+"static/media/eye-off.3eeefa01255069975a3030e4adf6f59a.svg"},804:function(n,e,t){t(2791);e.Z=t.p+"static/media/eye.8c80d662bba4fd9d7b96345f55e44dfe.svg"},9677:function(n,e,t){t.d(e,{$:function(){return l}});var r,i=t(168),a=t(5867).zo.section(r||(r=(0,i.Z)(["\n\t/* min-height: 100vh;\n    display: flex;\n    align-items: center;\n\tflex-direction: column;\n    font-size: 40px;\n\tfont-family: 'Open Sans', sans-serif;\n    color: #fff; */\n"]))),o=t(184),l=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},4396:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,a,o,l,s,d,c,p,h=t(1413),u=t(9439),m=t(9677),g=t(3623),x=t(2791),f=t(168),w=t(5867),b=w.ZP.span(r||(r=(0,f.Z)(['\n  min-width: 12px;\n  min-height: 12px;\n  border: 1px solid rgba(182, 182, 182, 1);\n  border-radius: 50%;\n  position: relative;\n\n  &:after {\n    content: "";\n    min-width: 6px;\n    min-height: 6px;\n    background-color: ',";\n    border-radius: 50%;\n    position: absolute;\n    opacity: 0;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])),(function(n){return n.theme.color.primary_green_lite})),y=w.ZP.input(i||(i=(0,f.Z)(["\n  display: none;\n  margin-right: 8px;\n\n  &:checked + "," {\n    &:after {\n      opacity: 1;\n    }\n  }\n"])),b),v=w.ZP.label(a||(a=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  cursor: pointer;\n"]))),j=t(184),k=function(n){var e=n.name,t=n.value,r=n.selectedValue,i=n.text,a=n.onPush,o=n.onBlure,l=n.id;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(v,{children:[(0,j.jsx)(y,{id:l,type:"radio",name:e,value:t,checked:r===t,onChange:a,onBlur:o}),(0,j.jsx)(b,{}),i]})})},P=t(804),L=t(8088),C=t(6844),N=t(6273),_=w.ZP.div(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n\n  @media screen and (min-width: 834px) {\n    margin-top: 20px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    flex-direction: row;\n    align-items: start;\n    justify-content: center;\n    gap: 160px;\n    margin-top: 24px;\n  }\n\n  .BannerThumb {\n    width: 300px;\n    margin-bottom: 24px;\n\n    @media screen and (min-width: 834px) {\n      width: 380px;\n      margin: auto;\n      margin-bottom: 24px;\n    }\n\n    @media screen and (min-width: 1440px) {\n      width: 536px;\n      margin: 0;\n    }\n  }\n\n  .FormFormik {\n    display: flex;\n    flex-direction: column;\n    row-gap: 40px;\n    width: 100%;\n\n    @media screen and (min-width: 834px) {\n      flex-direction: row;\n      flex-wrap: wrap;\n      column-gap: 60px;\n      width: 491px;\n\n      -webkit-box-pack: justify;\n      -webkit-box-align: start;\n      -ms-flex-pack: justify;\n      -ms-flex-align: start;\n    }\n  }\n\n  .Label {\n    position: relative;\n    color: ",';\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 12px;\n\n    &[for="photo"] {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      cursor: pointer;\n    }\n  }\n\n  input {\n    position: relative;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    background-color: ',";\n    color: ",";\n\n    padding: 8px 10px;\n    border-radius: 12px;\n    border: 1px solid ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus,\n    &:active {\n      border-color: ",";\n      border: 1px solid ",';\n      outline: none;\n      box-shadow: none;\n    }\n\n    &[type="file"] {\n      visibility: hidden;\n      pointer-events: none;\n      display: none;\n    }\n    &[type="number"]::-webkit-outer-spin-button,\n    &[type="number"]::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n\n    &::placeholder {\n      color: ',";\n    }\n\n    @media screen and (min-width: 834px) {\n      width: 212px;\n    }\n  }\n\n  .ErrorInput {\n    border: 1px solid #e74a3b;\n  }\n\n  .SuccessInput {\n    border: 1px solid #3cbc81;\n  }\n\n  .ImgError {\n    position: absolute;\n    right: 14px;\n    top: 50px;\n    transform: translateY(-50%);\n    width: 16px;\n    height: 16px;\n    background-image: url(",");\n  }\n\n  .ImgCorrect {\n    position: absolute;\n    right: 14px;\n    top: 50px;\n    transform: translateY(-50%);\n    width: 16px;\n    height: 16px;\n    background-image: url(",");\n  }\n\n  .ErrorText {\n    margin-top: -10px;\n    margin-bottom: -16px;\n    margin-left: 10px;\n    color: #e74a3b;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 14px;\n\n    @media only screen and (min-width: 1440px) {\n      max-width: 200px;\n    }\n  }\n\n  .SuccessText {\n    margin-top: -10px;\n    margin-bottom: -16px;\n    margin-left: 10px;\n    color: #3cbc81;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 14px;\n\n    @media only screen and (min-width: 1440px) {\n      max-width: 200px;\n    }\n  }\n\n  .ShowPassword {\n    display: none;\n    position: absolute;\n    right: 10px;\n    top: 50px;\n    transform: translateY(-50%);\n    width: 16px;\n    height: 16px;\n    background-image: url(",");\n  }\n\n  .HidePassword {\n    display: none;\n    position: absolute;\n    right: 10px;\n    top: 50px;\n    transform: translateY(-50%);\n    width: 16px;\n    height: 16px;\n    background-image: url(",');\n  }\n\n  .Label:hover .ShowPassword,\n  .Label:hover .HidePassword {\n    display: block;\n  }\n\n  .Label:hover input[name="confirmPassword"],\n  .Label:hover input[name="newPassword"] {\n    border: 1px solid ',';\n  }\n\n  .Label[id="password"]:hover .ImgError,\n  .Label[id="password"]:hover .ImgCorrect,\n  .Label[id="password"]:hover .ErrorText,\n  .Label[id="password"]:hover .SuccessText {\n    display: none;\n  }\n\n  .FileContainer {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n\n    display: flex;\n    flex-direction: column;\n    row-gap: 12px;\n  }\n\n  .Thumb {\n    height: 36px;\n    width: 36px;\n    border-radius: 50%;\n    margin-right: 12px;\n    overflow: hidden;\n  }\n\n  .AvaImg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .DownloadPhoto {\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 20px;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n\n    & > .download-svg {\n      width: 16px;\n      height: 16px;\n      stroke:  ',";\n    }\n  }\n\n  .label-for-avatar{\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .label-for-avatar:hover .DownloadPhoto,\n  .label-for-avatar:focus .DownloadPhoto{\n    color: ",";\n  }\n\n  .label-for-avatar:hover .DownloadPhoto > .download-svg,\n  .label-for-avatar:focus .DownloadPhoto > .download-svg {\n    stroke: ",";\n  }\n  \n\n  .FormGroup {\n    display: flex;\n    flex-direction: column;\n\n    & > label {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 20px;\n\n      &:not(:last-child) {\n        margin-bottom: 24px;\n      }\n    }\n  }\n\n  .FormGroupLabel {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    margin-bottom: 12px;\n  }\n\n  .WrapperRadioButton {\n    display: flex;\n    gap: 16px;\n    height: 100%;\n  }\n\n  .ButtonContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    margin-bottom: 40px;\n\n    @media screen and (min-width: 834px) {\n      flex-direction: row;\n      margin-bottom: 174px;\n    }\n\n    @media screen and (min-width: 1440px) {\n      margin-bottom: 72px;\n    }\n  }\n\n  .SaveButton {\n    background-color: ",";\n    font-family: Poppins;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    width: 212px;\n    border: 1px solid ",";\n    border-radius: 12px;\n    padding: 8px;\n    cursor: pointer;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      color: ",";\n    }\n\n    @media screen and (max-width: 834px) {\n      width: 100%;\n    }\n  }\n\n  .CancelButton {\n    background-color: ",";\n    color: ",";\n    font-family: Poppins;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    width: 100%;\n    padding: 8px 12px;\n    border: 1px solid transparent;\n    border-radius: 12px;\n    cursor: pointer;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      color: ",";\n    }\n\n    @media screen and (min-width: 834px) {\n      width: 212px;\n    }\n  }\n"])),(function(n){return n.theme.color.primary_white}),(function(n){return n.theme.color.primary_black}),(function(n){return n.theme.color.primary_white}),(function(n){return n.theme.color.primary_grey}),(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_grey}),C.Z,N.Z,L.Z,P.Z,(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_white}),(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_green_lite}),(function(n){return n.theme.color.primary_grey}),(function(n){return n.theme.color.primary_black}),(function(n){return n.theme.color.primary_grey}),(function(n){return n.theme.color.primary_green_lite})),B=w.ZP.h1(l||(l=(0,f.Z)(["\n  color: ",";\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 30px;\n  padding-top: 16px;\n\n  @media screen and (min-width: 834px) {\n    font-size: 30px;\n    line-height: 36px;\n    padding-top: 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 20px;\n  }\n"])),(function(n){return n.theme.color.primary_white})),S=t.p+"static/media/setings-page-png.f1d82cc7595a1839568b.png",Z=["title","titleId"];function z(){return z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},z.apply(this,arguments)}function E(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function F(n,e){var t=n.title,r=n.titleId,i=E(n,Z);return x.createElement("svg",z({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?x.createElement("title",{id:r},t):null,s||(s=x.createElement("path",{d:"M8 1.3335V6.00016L9.33333 4.66683",stroke:"",strokeLinecap:"round",strokeLinejoin:"round"})),d||(d=x.createElement("path",{d:"M8.00033 5.99984L6.66699 4.6665",stroke:"",strokeLinecap:"round",strokeLinejoin:"round"})),c||(c=x.createElement("path",{d:"M1.32031 8.6665H4.26031C4.51365 8.6665 4.74031 8.8065 4.85365 9.03317L5.63365 10.5932C5.86031 11.0465 6.32031 11.3332 6.82698 11.3332H9.18031C9.68698 11.3332 10.147 11.0465 10.3736 10.5932L11.1536 9.03317C11.267 8.8065 11.5003 8.6665 11.747 8.6665H14.6536",stroke:"",strokeLinecap:"round",strokeLinejoin:"round"})),p||(p=x.createElement("path",{d:"M4.66634 2.75342C2.30634 3.10008 1.33301 4.48675 1.33301 7.33342V10.0001C1.33301 13.3334 2.66634 14.6668 5.99967 14.6668H9.99967C13.333 14.6668 14.6663 13.3334 14.6663 10.0001V7.33342C14.6663 4.48675 13.693 3.10008 11.333 2.75342",stroke:"",strokeLinecap:"round",strokeLinejoin:"round"})))}var I=x.forwardRef(F),V=(t.p,t(5705)),O=t(7589),T=t(1199),A=t(7039),H=t(4420),D=t(1971),G=function(){var n=(0,x.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,x.useState)(!1),a=(0,u.Z)(i,2),o=a[0],l=a[1],s=(0,H.I0)(),d=(0,A.a)(),c=d.userName,p=d.userAvatarURL,f=d.userAge,w=d.userGender,b=d.userHeight,y=d.userWeight,v=d.userActivity,P=(0,V.TA)({initialValues:{name:c||"",age:f||"",gender:w||"",height:b||"",weight:y||"",activity:v||"",newPassword:"",confirmPassword:"",photo:void 0},validationSchema:O.Ti,onSubmit:function(n){if(o){var e,i=!n.newPassword.trim();e=n.weight!==y?{name:n.name,age:n.age,gender:n.gender,height:n.height,weight:n.weight,activity:n.activity}:{name:n.name,age:n.age,gender:n.gender,height:n.height,activity:n.activity},i||(e.newPassword=n.newPassword),s((0,D.gS)(e)),setTimeout((function(){l(!1)}),500)}if(null!==t){var a=new FormData,d=n.photo;a.append("avatarURL",d),s((0,D.BA)(a)),r(null),l(!1)}}}),L=P.values,C=P.errors,N=P.touched,Z=P.isValid,z=P.handleBlur,E=P.handleChange,F=P.handleSubmit,G=P.resetForm,Y=P.setValues;(0,x.useEffect)((function(){L.name===c&&L.age===f&&L.gender===w&&L.height===b&&L.weight===y&&L.activity===v&&""===L.newPassword&&""===L.confirmPassword||l(!0)}),[v,f,w,b,c,y,L.activity,L.age,L.confirmPassword,L.gender,L.height,L.name,L.newPassword,L.weight]);var R=(0,T.n)(L,N,C),M=R.showPassword,W=R.getInputClass,q=R.getInputAlert,U=R.getHidePassword;return(0,j.jsx)(m.$,{children:(0,j.jsxs)(g.W,{children:[(0,j.jsx)(B,{children:"Profile setting"}),(0,j.jsxs)(_,{children:[(0,j.jsx)("div",{className:"BannerThumb",children:(0,j.jsx)("img",{src:S,alt:"setings-page"})}),(0,j.jsxs)("form",{className:"FormFormik",onSubmit:F,children:[(0,j.jsxs)("label",{className:"Label",children:["Your name",(0,j.jsx)("input",{className:W("name"),id:"name",name:"name",placeholder:"Enter your name",type:"text",onChange:E,value:L.name,onBlur:z,required:!0}),q("name")]}),(0,j.jsxs)("div",{className:"FileContainer",children:["Your photo",(0,j.jsx)("input",{className:"Input ",name:"photo",type:"file",id:"photo",accept:"image/jpeg,image/png,image/jpg",onChange:function(n){E(n);var e=n.currentTarget.files[0];Y((function(n){return(0,h.Z)((0,h.Z)({},n),{},{photo:e})})),r(URL.createObjectURL(e))},onBlur:z}),(0,j.jsxs)("label",{className:"Label label-for-avatar",htmlFor:"photo",children:[(0,j.jsx)("div",{className:"Thumb",children:(0,j.jsx)("img",{className:"AvaImg",src:t||p,alt:"userAvatar"})}),(0,j.jsxs)("div",{className:"DownloadPhoto",children:[(0,j.jsx)(I,{className:"download-svg"}),"Download new photo"]})]})]}),(0,j.jsxs)("label",{className:"Label",children:["Your age",(0,j.jsx)("input",{className:W("age"),name:"age",type:"number",placeholder:"Enter your age",onChange:E,value:L.age,onBlur:z,required:!0}),q("age")]}),(0,j.jsxs)("div",{className:"FormGroup",role:"group","aria-labelledby":"gender-head",children:[(0,j.jsx)("p",{className:"FormGroupLabel",id:"gender-head",children:"Gender"}),(0,j.jsxs)("div",{className:"WrapperRadioButton",children:[(0,j.jsx)(k,{id:"Male",text:"Male",name:"gender",type:"radio",value:"male",selectedValue:L.gender,onPush:E,onBlure:z,checked:"male"===L.gender}),(0,j.jsx)(k,{id:"Female",text:"Female",name:"gender",type:"radio",value:"female",selectedValue:L.gender,onPush:E,onBlure:z,checked:"female"===L.gender})]})]}),(0,j.jsxs)("label",{className:"Label",children:["Height",(0,j.jsx)("input",{className:W("height"),name:"height",type:"number",placeholder:"Enter your height",onChange:E,value:L.height,onBlur:z,required:!0}),q("height")]}),(0,j.jsxs)("label",{className:"Label",children:["Weight",(0,j.jsx)("input",{className:W("weight"),name:"weight",type:"number",placeholder:"Enter your weight",onChange:E,value:L.weight,onBlur:z,required:!0}),q("weight")]}),(0,j.jsxs)("label",{className:"Label",id:"password",children:["New password",(0,j.jsx)("input",{className:W("newPassword"),name:"newPassword",type:M?"text":"password",placeholder:"Enter new password",value:L.newPassword,onChange:E,onBlur:z}),L.newPassword&&U(),q("newPassword")]}),(0,j.jsxs)("label",{className:"Label",id:"password",children:["Confirm password",(0,j.jsx)("input",{className:W("confirmPassword"),name:"confirmPassword",type:M?"text":"password",placeholder:"Confirm new password",value:L.confirmPassword,onChange:E,onBlur:z}),L.confirmPassword&&U(),q("confirmPassword")]}),(0,j.jsxs)("div",{className:"FormGroup",role:"group","aria-labelledby":"activity-head",children:[(0,j.jsx)("p",{className:"FormGroupLabel",id:"activity-head",children:"Your activity"}),(0,j.jsx)(k,{id:"1.2",text:"1.2 - if you do not have physical activity and sedentary work",name:"activity",type:"radio",value:"1.2",selectedValue:String(L.activity),onPush:E,onBlure:z,checked:"1.2"===L.activity}),(0,j.jsx)(k,{id:"1.375",text:"1.375 - if you do short runs or light gymnastics 1-3 times a week",name:"activity",type:"radio",value:"1.375",selectedValue:String(L.activity),onPush:E,onBlure:z,checked:"1.375"===L.activity}),(0,j.jsx)(k,{id:"1.55",text:"1.55 - if you play sports with average loads 3-5 times a week",name:"activity",type:"radio",value:"1.55",selectedValue:String(L.activity),onPush:E,onBlure:z,checked:"1.55"===L.activity}),(0,j.jsx)(k,{id:"1.725",text:"1.725 - if you train fully 6-7 times a week",name:"activity",type:"radio",value:"1.725",selectedValue:String(L.activity),onPush:E,onBlure:z,checked:"1.725"===L.activity}),(0,j.jsx)(k,{id:"1.9",text:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program",name:"activity",type:"radio",value:"1.9",selectedValue:String(L.activity),onPush:E,onBlure:z,checked:"1.9"===L.activity})]}),(0,j.jsxs)("div",{className:"ButtonContainer",children:[(0,j.jsx)("button",{className:"SaveButton",type:"submit",disabled:!Z||!o&&null===t,children:"Save"}),(0,j.jsx)("button",{className:"CancelButton",type:"button",onClick:function(){G(),l(!1)},children:"Cancel"})]})]})]})]})})}}}]);
//# sourceMappingURL=975.0fed860f.chunk.js.map