import React from "react";

const Circle1 = ({ color = "#5E5E5E" }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9891 1.11631C17.68 1.12269 17.4341 1.37517 17.4376 1.68433V5.06042C17.4376 5.81062 18.5626 5.81062 18.5626 5.06042V1.68433C18.5671 1.36705 18.3064 1.1104 17.9891 1.11631ZM9.81751 3.30036C9.39036 3.31737 9.13753 3.78514 9.35719 4.15185L11.0425 7.07423C11.4162 7.72487 12.3918 7.16459 12.0181 6.51393L10.3284 3.59044C10.2263 3.40527 10.0289 3.29358 9.81751 3.30036ZM26.1652 3.30036C25.9583 3.29824 25.7675 3.40924 25.6675 3.59044L23.9811 6.51393C23.523 7.18255 24.6038 7.80548 24.9534 7.07423L26.6431 4.15185C26.8661 3.77888 26.5998 3.30447 26.1652 3.30036ZM12.9365 28.6876V31.499C12.9377 31.8098 13.1905 32.0605 13.5012 32.0593H13.7155L14.6614 34.5126C14.7449 34.7298 14.9538 34.873 15.1865 34.8729H20.8115C21.0414 34.8727 21.248 34.7326 21.3334 34.5191L21.5586 33.9566C21.8396 33.2589 20.791 32.8399 20.5138 33.5391L20.4303 33.7479H15.5722L14.9218 32.0593H22.499C22.8082 32.0582 23.0583 31.8081 23.0593 31.499V26.7584C26.2284 24.9116 28.123 21.594 28.1251 17.999C28.1251 12.4138 23.5831 7.87178 17.9979 7.8718C12.4127 7.8718 7.87403 12.4138 7.87403 17.999C7.87629 21.7351 9.93877 25.1683 13.2354 26.9265C13.9119 27.3289 14.4748 26.2699 13.7627 25.9344C10.8307 24.3707 9.00213 21.3221 9.00013 17.999C9.00013 13.0218 13.0207 8.99679 17.9979 8.99682C22.9752 8.99679 27.0001 13.0218 27.0001 17.999C26.9978 21.322 25.1652 24.3707 22.2332 25.9344C22.0518 26.0326 21.939 26.2225 21.9387 26.4288V28.1229L13.5012 28.124C13.2192 28.1241 12.9365 28.3115 12.9365 28.6876ZM3.82997 9.27476C3.26499 9.30516 3.09359 10.0568 3.58936 10.3294L6.51283 12.0159C7.16336 12.3923 7.72805 11.4167 7.07752 11.0403L4.15406 9.35385C4.05648 9.29539 3.94337 9.26775 3.82997 9.27476ZM32.0945 9.27476C32.0065 9.28114 31.9219 9.30835 31.8462 9.35385L28.9227 11.0403C28.2722 11.414 28.8325 12.3896 29.483 12.0159L32.4065 10.3294C32.9377 10.0393 32.6981 9.22988 32.0945 9.27476ZM16.8729 11.2479C16.1228 11.2479 16.1228 12.3729 16.8729 12.3729H18.6626L18.9658 13.8758C19.0043 14.0693 19.1405 14.2287 19.3262 14.2955C19.7719 14.4537 20.1862 14.6929 20.5479 14.9976C20.6984 15.1251 20.9047 15.164 21.0917 15.1008L22.5364 14.6109L23.2011 15.7611L22.0552 16.7708C21.9066 16.9011 21.8365 17.0994 21.8717 17.2937C21.9576 17.7523 21.9425 18.2792 21.8717 18.7011C21.8356 18.8948 21.9037 19.0929 22.0508 19.224L23.2011 20.2337L22.5364 21.3839L21.0873 20.894C20.9002 20.8308 20.694 20.8695 20.5435 20.9973C20.1833 21.3029 19.7719 21.544 19.3273 21.7037C19.1417 21.7704 19.0044 21.9288 18.9658 22.1223L18.6626 23.6219H17.3333L17.0344 22.1189C16.9951 21.9244 16.8569 21.7648 16.6697 21.6992C16.224 21.5412 15.8097 21.3019 15.448 20.9972C15.2975 20.8724 15.0936 20.8346 14.9086 20.8973L13.4595 21.3873L12.7948 20.2369L13.9451 19.224C14.0937 19.0937 14.1637 18.8955 14.1285 18.7011C14.0242 18.2187 14.0565 17.7195 14.1285 17.2981C14.1653 17.1023 14.095 16.9019 13.9451 16.7708L12.7948 15.7611L13.4595 14.6109L14.913 15.1008C15.1001 15.164 15.3062 15.1251 15.4568 14.9976C15.6988 14.7922 15.9626 14.619 16.2456 14.4779C16.9183 14.1429 16.4162 13.1344 15.7435 13.4693C15.4827 13.5994 15.2203 13.7664 14.9855 13.9396L13.3848 13.399C13.131 13.3121 12.8518 13.4161 12.7168 13.6473L11.5907 15.5996C11.4578 15.8314 11.5067 16.1239 11.7072 16.3005L12.975 17.4145C12.9012 17.891 12.9309 18.2042 12.9727 18.5813L11.7071 19.6931C11.5045 19.8702 11.4555 20.1667 11.5907 20.3995L12.7168 22.3474C12.8505 22.5808 13.13 22.6863 13.3847 22.6L14.9821 22.0573C15.2775 22.2881 15.6556 22.4905 15.9874 22.6363L16.3203 24.2942C16.3728 24.5575 16.6044 24.7471 16.8729 24.7468H19.1229C19.3914 24.7471 19.623 24.5576 19.6755 24.2942L20.0051 22.6407C20.3355 22.4942 20.702 22.297 21.0092 22.0573L22.6154 22.6C22.8689 22.684 23.1468 22.5788 23.2801 22.3474L24.4051 20.3995C24.5412 20.1677 24.4942 19.8714 24.293 19.6931L23.0241 18.578C23.0854 18.1154 23.0647 17.7594 23.0218 17.42L24.2929 16.3005C24.4919 16.1228 24.5388 15.8305 24.405 15.5996L23.2833 13.6473C23.1483 13.4155 22.869 13.3121 22.6153 13.399L21.0157 13.9374C20.7212 13.7236 20.3737 13.5042 20.0116 13.3606L19.6754 11.7006C19.6229 11.4372 19.3913 11.2476 19.1228 11.2479H16.8729ZM17.9979 15.749C16.7619 15.749 15.7468 16.7631 15.7468 17.999C15.7468 19.235 16.7619 20.2501 17.9979 20.2501C19.2339 20.2501 20.249 19.235 20.249 17.999C20.249 16.7631 19.2339 15.749 17.9979 15.749ZM17.9979 16.874C18.6259 16.874 19.1229 17.3711 19.1229 17.999C19.1229 18.627 18.6259 19.1251 17.9979 19.1251C17.3699 19.1251 16.8729 18.627 16.8729 17.999C16.8729 17.3711 17.3699 16.874 17.9979 16.874ZM1.68763 17.4343C0.937457 17.4343 0.937457 18.5593 1.68763 18.5593H5.06373C5.8139 18.5593 5.8139 17.4343 5.06373 17.4343H1.68763ZM30.9365 17.4343C30.1864 17.4343 30.1864 18.5593 30.9365 18.5593H34.3126C35.0628 18.5593 35.0628 17.4343 34.3126 17.4343H30.9365ZM6.76222 23.8997C6.6742 23.9061 6.58849 23.9333 6.51283 23.9788L3.58936 25.6685C2.89091 26.0309 3.49347 27.0672 4.15406 26.6397L7.07752 24.9544C7.61181 24.6635 7.36848 23.8494 6.76222 23.8997ZM29.1589 23.8997C28.5959 23.9337 28.4283 24.6831 28.9227 24.9545L31.8462 26.6397C32.5148 27.0977 33.1376 26.0181 32.4065 25.6685L29.483 23.9789C29.3855 23.9204 29.2724 23.8927 29.1589 23.8997ZM14.0615 29.2479H21.9387V30.9332H14.0615V29.2479Z"
        fill={color}
      />
    </svg>
  );
};

export default Circle1;