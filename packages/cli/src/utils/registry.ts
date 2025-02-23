export const ALL_COMPONENTS = [
  'Alert',
  'Banner',
  'BiometricSignIn',
  'Button',
  'ButtonGroup',
  'Card',
  'Checkbox',
  'CheckboxTile',
  'Icon',
  'Link',
  'Pagination',
  'RadioButton',
  'RadioTile',
  'Snackbar',
  'StepIndicator',
  'Tag',
  'Text',
  'TextInput',
  'Textarea',
  'Toggle'
];

interface ComponentMetadata {
  name: string;
  dependencies?: string[];
}

export const ICON_PATHS = {
  'accessibility-new':
    'M20.5 6C17.89 6.7 14.83 7 12 7C9.17 7 6.11 6.7 3.5 6L3 8C4.86 8.5 7 8.83 9 9V22H11V16H13V22H15V9C17 8.83 19.14 8.5 21 8L20.5 6ZM12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6Z',
  autorenew:
    'M65 32V34C63.35 34 62 35.35 62 37C62 38.65 63.35 40 65 40C66.65 40 68 38.65 68 37H70C70 39.76 67.76 42 65 42C62.24 42 60 39.76 60 37C60 34.24 62.24 32 65 32ZM70.96 27C72.44 27 73.42 28.5 72.81 29.83L71.14 33.5H73C74.1 33.5 75 34.4 75 35.5V41H73V36H68.02C66.56 36 65.57 34.43 66.17 33.1L68 29H65.79L65.14 30.53L63.22 30L63.89 28.2C64.22 27.47 64.95 27 65.76 27H70.96ZM73 22.54C74.1046 22.54 75 23.4354 75 24.54C75 25.6445 74.1046 26.54 73 26.54C71.8954 26.54 71 25.6445 71 24.54C71 23.4354 71.8954 22.54 73 22.54Z',
  attach_money: 'M114 39V42H94V39H114ZM99 30V37H96V30H99ZM105.5 30V37H102.5V30H105.5ZM112 30V37H109V30H112ZM104 21L114 26V28H94V26L104 21Z',
  attach_file:
    'M131 25V39C131 40.1 131.89 41 133 41H147C148.1 41 149 40.1 149 39V25C149 23.9 148.1 23 147 23H133C131.89 23 131 23.9 131 25ZM143 29C143 30.66 141.66 32 140 32C138.34 32 137 30.66 137 29C137 27.34 138.34 26 140 26C141.66 26 143 27.34 143 29ZM134 37C134 35 138 33.9 140 33.9C142 33.9 146 35 146 37V38H134V37Z',
  assessment:
    'M176 22C170.48 22 166 26.48 166 32C166 37.52 170.48 42 176 42C181.52 42 186 37.52 186 32C186 26.48 181.52 22 176 22ZM176 25C177.66 25 179 26.34 179 28C179 29.66 177.66 31 176 31C174.34 31 173 29.66 173 28C173 26.34 174.34 25 176 25ZM176 39.2C173.5 39.2 171.29 37.92 170 35.98C170.03 33.99 174 32.9 176 32.9C177.99 32.9 181.97 33.99 182 35.98C180.71 37.92 178.5 39.2 176 39.2Z',
  arrow_upward: 'M217 33H213V37H211V33H207V31H211V27H213V31H217V33Z',
  arrow_forward:
    'M248 22C242.48 22 238 26.48 238 32C238 37.52 242.48 42 248 42C253.52 42 258 37.52 258 32C258 26.48 253.52 22 248 22ZM253 33H249V37H247V33H243V31H247V27H249V31H253V33Z',
  arrow_drop_up: 'M291 33H285V39H283V33H277V31H283V25H285V31H291V33Z',
  arrow_drop_down:
    'M284 888C278.48 888 274 892.48 274 898C274 903.52 278.48 908 284 908C289.52 908 294 903.52 294 898C294 892.48 289.52 888 284 888ZM289 899H279V897H289V899Z',
  arrow_downward:
    'M330 25.72L325.4 21.86L324.11 23.39L328.71 27.25L330 25.72ZM315.88 23.39L314.6 21.86L310 25.71L311.29 27.24L315.88 23.39ZM320.5 28H319V34L323.75 36.85L324.5 35.62L320.5 33.25V28ZM320 24C315.03 24 311 28.03 311 33C311 37.97 315.02 42 320 42C324.97 42 329 37.97 329 33C329 28.03 324.97 24 320 24ZM320 40C316.13 40 313 36.87 313 33C313 29.13 316.13 26 320 26C323.87 26 327 29.13 327 33C327 36.87 323.87 40 320 40Z',
  arrow_back:
    'M356 22C350.48 22 346 26.48 346 32C346 37.52 350.48 42 356 42H361V40H356C351.66 40 348 36.34 348 32C348 27.66 351.66 24 356 24C360.34 24 364 27.66 364 32V33.43C364 34.22 363.29 35 362.5 35C361.71 35 361 34.22 361 33.43V32C361 29.24 358.76 27 356 27C353.24 27 351 29.24 351 32C351 34.76 353.24 37 356 37C357.38 37 358.64 36.44 359.54 35.53C360.19 36.42 361.31 37 362.5 37C364.47 37 366 35.4 366 33.43V32C366 26.48 361.52 22 356 22ZM356 35C354.34 35 353 33.66 353 32C353 30.34 354.34 29 356 29C357.66 29 359 30.34 359 32C359 33.66 357.66 35 356 35Z',
  api: 'M40 60H24C22.9 60 22.01 60.9 22.01 62L22 80L26 76H40C41.1 76 42 75.1 42 74V62C42 60.9 41.1 60 40 60ZM33 69H31V63H33V69ZM33 73H31V71H33V73Z',
  announcement:
    'M70 70L68 72L66 70L68 68L70 70ZM68 64L70.12 66.12L72.62 63.62L68 59L63.38 63.62L65.88 66.12L68 64ZM62 70L64.12 67.88L61.62 65.38L57 70L61.62 74.62L64.12 72.12L62 70ZM74 70L71.88 72.12L74.38 74.62L79 70L74.38 65.38L71.88 67.88L74 70ZM68 76L65.88 73.88L63.38 76.38L68 81L72.62 76.38L70.12 73.88L68 76Z',
  alternate_email: 'M112 69H99.83L105.42 63.41L104 62L96 70L104 78L105.41 76.59L99.83 71H112V69Z',
  alarm: 'M148 70L146.59 68.59L141 74.17V62H139V74.17L133.42 68.58L132 70L140 78L148 70Z',
  remove_circle: 'M171 67L176 72L181 67H171Z',
  add: 'M207 72L212 67L217 72H207Z',
  add_circle: 'M248 62L246.59 63.41L252.17 69H240V71H252.17L246.59 76.59L248 78L256 70L248 62Z',
  add_circle_outline: 'M276 70L277.41 71.41L283 65.83V78H285V65.83L290.58 71.42L292 70L284 62L276 70Z',
  account_circle:
    'M327 61H313C311.9 61 311 61.9 311 63V77C311 78.1 311.9 79 313 79H327C328.1 79 329 78.1 329 77V63C329 61.9 328.1 61 327 61ZM317 75H315V68H317V75ZM321 75H319V65H321V75ZM325 75H323V71H325V75Z',
  account_box:
    'M359.5 64V75.5C359.5 77.71 357.71 79.5 355.5 79.5C353.29 79.5 351.5 77.71 351.5 75.5V63C351.5 61.62 352.62 60.5 354 60.5C355.38 60.5 356.5 61.62 356.5 63V73.5C356.5 74.05 356.05 74.5 355.5 74.5C354.95 74.5 354.5 74.05 354.5 73.5V64H353V73.5C353 74.88 354.12 76 355.5 76C356.88 76 358 74.88 358 73.5V63C358 60.79 356.21 59 354 59C351.79 59 350 60.79 350 63V75.5C350 78.54 352.46 81 355.5 81C358.54 81 361 78.54 361 75.5V64H359.5Z',
  account_balance:
    'M31.8003 105.9C29.5303 105.31 28.8003 104.7 28.8003 103.75C28.8003 102.66 29.8103 101.9 31.5003 101.9C33.2803 101.9 33.9403 102.75 34.0003 104H36.2103C36.1403 102.28 35.0903 100.7 33.0003 100.19V98H30.0003V100.16C28.0603 100.58 26.5003 101.84 26.5003 103.77C26.5003 106.08 28.4103 107.23 31.2003 107.9C33.7003 108.5 34.2003 109.38 34.2003 110.31C34.2003 111 33.7103 112.1 31.5003 112.1C29.4403 112.1 28.6303 111.18 28.5203 110H26.3203C26.4403 112.19 28.0803 113.42 30.0003 113.83V116H33.0003V113.85C34.9503 113.48 36.5003 112.35 36.5003 110.3C36.5003 107.46 34.0703 106.49 31.8003 105.9Z',
  accessible_forward:
    'M68 101V104L72 100L68 96V99C63.58 99 60 102.58 60 107C60 108.57 60.46 110.03 61.24 111.26L62.7 109.8C62.25 108.97 62 108.01 62 107C62 103.69 64.69 101 68 101ZM74.76 102.74L73.3 104.2C73.74 105.04 74 105.99 74 107C74 110.31 71.31 113 68 113V110L64 114L68 118V115C72.42 115 76 111.42 76 107C76 105.43 75.54 103.97 74.76 102.74Z',
  content_copy:
    'M167.41 969.59L168.83 971L172 967.83L175.17 971L176.58 969.59L172 965L167.41 969.59ZM176.59 956.41L175.17 955L172 958.17L168.83 955L167.41 956.41L172 961L176.59 956.41Z',
  contact_page:
    'M388 937C389.66 937 390.99 935.66 390.99 934C390.99 932.34 389.66 931 388 931C386.34 931 385 932.34 385 934C385 935.66 386.34 937 388 937ZM380 937C381.66 937 382.99 935.66 382.99 934C382.99 932.34 381.66 931 380 931C378.34 931 377 932.34 377 934C377 935.66 378.34 937 380 937ZM380 939C377.67 939 373 940.17 373 942.5V945H387V942.5C387 940.17 382.33 939 380 939ZM388 939C387.71 939 387.38 939.02 387.03 939.05C388.19 939.89 389 941.02 389 942.5V945H395V942.5C395 940.17 390.33 939 388 939Z',
  construction_worker:
    'M280 935.5C280.26 935.5 280.53 935.5 280.78 935.54C280.89 935.56 281 935.59 281.11 935.63C281.81 935.87 282.4 936.41 282.86 936.95C283.74 937.97 284.47 938.84 285.34 939.86C286.65 941.17 288.26 942.62 287.95 944.66C287.66 945.67 286.93 946.69 285.62 946.98C284.89 947.12 282.56 946.54 280.08 946.54H279.9C277.42 946.54 275.09 947.13 274.36 946.98C273.05 946.69 272.32 945.68 272.03 944.66C271.73 942.63 273.34 941.18 274.65 939.87C275.53 938.85 276.26 937.98 277.13 936.96C277.6 936.42 278.18 935.88 278.88 935.64C278.99 935.6 279.1 935.57 279.21 935.55C279.47 935.5 279.74 935.5 280 935.5Z',
  construction:
    'M395.46 884.12L392.68 885.27C392.17 883.91 391.1 882.83 389.73 882.33L390.88 879.55C392.98 880.35 394.65 882.02 395.46 884.12ZM388 890C386.34 890 385 888.66 385 887C385 885.34 386.34 884 388 884C389.66 884 391 885.34 391 887C391 888.66 389.66 890 388 890Z',
  connect_without_contact:
    'M316 938C318.21 938 320 936.21 320 934C320 931.79 318.21 930 316 930C313.79 930 312 931.79 312 934C312 936.21 313.79 938 316 938ZM316 940C313.33 940 308 941.34 308 944V946H324V944C324 941.34 318.67 940 316 940Z',
  comment: 'M252 938H238V936H252V938ZM238 945H250V943H238V945ZM246 942H238V940H246V942Z',
  code: 'M213.41 943.59L208.82 939L213.41 934.41L212 933L206 939L212 945L213.41 943.59ZM201 933H203V945H201V933Z',
  cloud:
    'M215.35 883.04C214.67 879.59 211.64 877 208 877C205.11 877 202.6 878.64 201.35 881.04C198.34 881.36 196 883.91 196 887C196 890.31 198.69 893 202 893H215C217.76 893 220 890.76 220 888C220 885.36 217.95 883.22 215.35 883.04Z',
  clothes:
    'M171.8 808.9C169.53 808.31 168.8 807.7 168.8 806.75C168.8 805.66 169.81 804.9 171.5 804.9C173.28 804.9 173.94 805.75 174 807H176.21C176.14 805.28 175.09 803.7 173 803.19V801H170V803.16C168.06 803.58 166.5 804.84 166.5 806.77C166.5 809.08 168.41 810.23 171.2 810.9C173.7 811.5 174.2 812.38 174.2 813.31C174.2 814 173.71 815.1 171.5 815.1C169.44 815.1 168.63 814.18 168.52 813H166.32C166.44 815.19 168.08 816.42 170 816.83V819H173V816.85C174.95 816.48 176.5 815.35 176.5 813.3C176.5 810.46 174.07 809.49 171.8 808.9Z',
  closed_caption:
    'M392 831H382C380.9 831 380.01 831.9 380.01 833L380 845C380 846.1 380.89 847 381.99 847H394C395.1 847 396 846.1 396 845V833C396 831.9 395.1 831 394 831ZM386 839H384V841H386V839ZM386 835H384V837H386V835ZM382 839H380V837H382V839ZM382 835H380V833H382V835ZM390 845H382V843H390V845ZM390 841H388V839H390V841ZM390 835H388V833H390V835ZM394 841H392V839H394V841ZM394 835H392V833H394V835Z',
  close:
    'M467 842.41L465.59 841L460 846.59L454.41 841L453 842.41L458.59 848L453 853.59L454.41 855L460 849.41L465.59 855L467 853.59L461.41 848L467 842.41Z',
  clean_hands:
    'M178.5 797C179.88 797 181 795.88 181 794.5C181 792.83 178.5 790 178.5 790C178.5 790 176 792.83 176 794.5C176 795.88 177.12 797 178.5 797ZM173.5 798C174.33 798 175 797.33 175 796.5C175 795.66 173.5 794 173.5 794C173.5 794 172 795.66 172 796.5C172 797.33 172.67 798 173.5 798Z',
  checkroom:
    'M280 737C278.34 737 277 738.34 277 740C277 741.66 278.34 743 280 743C281.66 743 283 741.66 283 740C283 738.34 281.66 737 280 737ZM276.5 732C277.33 732 278 731.33 278 730.5C278 729.67 277.33 729 276.5 729C275.67 729 275 729.67 275 730.5C275 731.33 275.67 732 276.5 732Z',
  check: 'M284.59 743.58L278 750.17L274.41 746.59L273 748L278 753L286 745L284.59 743.58Z',
  check_circle:
    'M316 738C310.48 738 306 742.48 306 748C306 753.52 310.48 758 316 758C321.52 758 326 753.52 326 748C326 742.48 321.52 738 316 738ZM314 753L309 748L310.41 746.59L314 750.17L321.59 742.58L323 744L314 753Z',
  check_circle_outline:
    'M280 738C274.48 738 270 742.48 270 748C270 753.52 274.48 758 280 758C285.52 758 290 753.52 290 748C290 742.48 285.52 738 280 738ZM280 756C275.58 756 272 752.42 272 748C272 743.58 275.58 740 280 740C284.42 740 288 743.58 288 748C288 752.42 284.42 756 280 756Z',
  check_box_outline_blank:
    'M286 741H278L276 739H270C268.9 739 268.01 739.9 268.01 741L268 753C268 754.1 268.9 755 270 755H286C287.1 755 288 754.1 288 753V743C288 741.9 287.1 741 286 741Z',
  chat: 'M288 738H272C270.9 738 270.01 738.9 270.01 740L270 758L274 754H288C289.1 754 290 753.1 290 752V740C290 738.9 289.1 738 288 738ZM281 750H279V744H275V750H273V742H281V750Z',
  cancel:
    'M460 738C454.47 738 450 742.47 450 748C450 753.53 454.47 758 460 758C465.53 758 470 753.53 470 748C470 742.47 465.53 738 460 738ZM460 756C455.59 756 452 752.41 452 748C452 743.59 455.59 740 460 740C464.41 740 468 743.59 468 748C468 752.41 464.41 756 460 756Z',
  camping:
    'M496 775H489V793H493V787H496C499.31 787 502 784.31 502 781C502 777.69 499.31 775 496 775ZM496.2 783H493V779H496.2C497.3 779 498.2 779.9 498.2 781C498.2 782.1 497.3 783 496.2 783Z',
  campaign:
    'M428 771H416C414.9 771 414 771.9 414 773V787H416V773H428V771ZM431 775H420C418.9 775 418 775.9 418 777V791C418 792.1 418.9 793 420 793H431C432.1 793 433 792.1 433 791V777C433 775.9 432.1 775 431 775ZM431 791H420V777H431V791Z',
  calendar_today:
    'M468 771H467V769H465V771H455V769H453V771H452C450.9 771 450 771.9 450 773V789C450 790.1 450.9 791 452 791H468C469.1 791 470 790.1 470 789V773C470 771.9 469.1 771 468 771ZM468 789H452V776H468V789Z',
  backpack:
    'M40.5 26C37.89 26.7 34.83 27 32 27C29.17 27 26.11 26.7 23.5 26L23 28C24.86 28.5 27 28.83 29 29V42H31V36H33V42H35V29C37 28.83 39.14 28.5 41 28L40.5 26ZM32 26C33.1 26 34 25.1 34 24C34 22.9 33.1 22 32 22C30.9 22 30 22.9 30 24C30 25.1 30.9 26 32 26Z',
  bathtub:
    'M17.17 2C18.73 2 20 3.27 20 4.83V13H22V19C22 20.1 21.1 21 20 21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21C2.9 21 2 20.1 2 19V13H5V12.25C5 11.01 6 10.01 7.24 10C7.59 10 7.93 10.08 8.24 10.23C8.5 10.35 8.74 10.52 8.93 10.73L10.33 12.28C10.58 12.55 10.85 12.79 11.15 13H18V4.83C18 4.37 17.63 4 17.17 4C16.95 4 16.74 4.09 16.59 4.24L15.34 5.49C15.38 5.66 15.41 5.82 15.41 6C15.41 6.4 15.29 6.77 15.09 7.08L12.33 4.32C12.64 4.12 13.01 4 13.41 4C13.59 4 13.76 4.03 13.92 4.08L15.17 2.83C15.7 2.3 16.42 2 17.17 2ZM7 5C8.10457 5 9 5.89543 9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5Z',
  build:
    'M215.14 747.94C215.18 747.64 215.2 747.33 215.2 747C215.2 746.68 215.18 746.36 215.13 746.06L217.16 744.48C217.34 744.34 217.39 744.07 217.28 743.87L215.36 740.55C215.24 740.33 214.99 740.26 214.77 740.33L212.38 741.29C211.88 740.91 211.35 740.59 210.76 740.35L210.4 737.81C210.36 737.57 210.16 737.4 209.92 737.4H206.08C205.84 737.4 205.65 737.57 205.61 737.81L205.25 740.35C204.66 740.59 204.12 740.92 203.63 741.29L201.24 740.33C201.02 740.25 200.77 740.33 200.65 740.55L198.74 743.87C198.62 744.08 198.66 744.34 198.86 744.48L200.89 746.06C200.84 746.36 200.8 746.69 200.8 747C200.8 747.31 200.82 747.64 200.87 747.94L198.84 749.52C198.66 749.66 198.61 749.93 198.72 750.13L200.64 753.45C200.76 753.67 201.01 753.74 201.23 753.67L203.62 752.71C204.12 753.09 204.65 753.41 205.24 753.65L205.6 756.19C205.65 756.43 205.84 756.6 206.08 756.6H209.92C210.16 756.6 210.36 756.43 210.39 756.19L210.75 753.65C211.34 753.41 211.88 753.09 212.37 752.71L214.76 753.67C214.98 753.75 215.23 753.67 215.35 753.45L217.27 750.13C217.39 749.91 217.34 749.66 217.15 749.52L215.14 747.94Z',
  bedding:
    'M17 10.75C18.7949 10.75 20.25 12.2051 20.25 14C20.25 15.7949 18.7949 17.25 17 17.25H7C6.30964 17.25 5.75 16.6903 5.75 16C5.75 15.3096 6.30964 14.75 7 14.75H17C17.4142 14.75 17.75 14.4142 17.75 14C17.75 13.5858 17.4142 13.25 17 13.25H7C5.48122 13.25 4.25 14.4812 4.25 16C4.25 17.5188 5.48122 18.75 7 18.75H21C21.6904 18.75 22.25 19.3096 22.25 20C22.25 20.6903 21.6904 21.25 21 21.25H7C4.10051 21.25 1.75 18.8995 1.75 16C1.75 13.1005 4.10051 10.75 7 10.75H17ZM16.3963 1.27759L17.06 1.36998C17.7789 1.48244 18.3657 1.99419 18.5799 2.68036L18.62 2.82998C18.9799 4.29747 19.0076 5.82517 18.7031 7.30192L18.62 7.66998C18.4528 8.39703 17.8776 8.95384 17.1566 9.10409L17 9.12998C13.906 9.59192 10.7641 9.62272 7.66369 9.22237L7 9.12998C6.30139 8.99576 5.73862 8.48771 5.52935 7.81628L5.49 7.66998C5.13934 6.20139 5.11236 4.67564 5.40908 3.19826L5.49 2.82998C5.65574 2.11995 6.20758 1.56972 6.90777 1.40036L7.06 1.36998C10.154 0.908041 13.2959 0.877245 16.3963 1.27759Z',
  bookmark: 'M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z',
  bug_report:
    'M20 8H17.19C16.74 7.22 16.12 6.55 15.37 6.04L17 4.41L15.59 3L13.42 5.17C12.96 5.06 12.49 5 12 5C11.51 5 11.04 5.06 10.59 5.17L8.41 3L7 4.41L8.62 6.04C7.88 6.55 7.26 7.22 6.81 8H4V10H6.09C6.04 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.04 15.67 6.09 16H4V18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H20V16H17.91C17.96 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.96 10.33 17.91 10H20V8ZM14 16H10V14H14V16ZM14 12H10V10H14V12Z'
};

export const COMPONENT_METADATA: Record<string, ComponentMetadata> = {
  Alert: {
    name: 'Alert',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx', 'lucide-react-native']
  },
  Banner: {
    name: 'Banner',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx', 'react-native-svg']
  },
  BiometricSignIn: {
    name: 'BiometricSignIn',
    dependencies: ['react-native-biometrics', 'class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Button: {
    name: 'Button',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  ButtonGroup: {
    name: 'ButtonGroup',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Card: {
    name: 'Card',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Input: {
    name: 'Input',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Checkbox: {
    name: 'Checkbox',
    dependencies: ['@rn-primitives/checkbox', 'tailwind-merge', 'clsx', 'lucide-react-native']
  },
  CheckboxTile: {
    name: 'CheckboxTile',
    dependencies: ['@rn-primitives/checkbox', 'class-variance-authority', 'tailwind-merge', 'clsx', 'lucide-react-native']
  },
  Icon: {
    name: 'Icon',
    dependencies: ['react-native-svg']
  },
  Link: {
    name: 'Link',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx', 'lucide-react-native']
  },
  Pagination: {
    name: 'Pagination',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx', 'lucide-react-native']
  },
  RadioButton: {
    name: 'RadioButton',
    dependencies: ['@rn-primitives/radio-group', 'class-variance-authority', 'tailwind-merge', 'clsx']
  },
  RadioTile: {
    name: 'RadioTile',
    dependencies: ['@rn-primitives/radio-group', 'class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Snackbar: {
    name: 'Snackbar',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx', 'lucide-react-native']
  },
  StepIndicator: {
    name: 'StepIndicator',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Tag: {
    name: 'Tag',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Text: {
    name: 'Text',
    dependencies: ['@rn-primitives/slot', '@rn-primitives/types', 'tailwind-merge', 'clsx']
  },
  Textarea: {
    name: 'Textarea',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  TextInput: {
    name: 'TextInput',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Toggle: {
    name: 'Toggle',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  }
  // Add more components as we build them
};

export const COMPONENT_TEMPLATES: Record<string, string> = {
  Alert: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react-native';

const alertVariants = cva('flex flex-row items-start p-4 w-[329px]', {
  variants: {
    variant: {
      info: 'bg-info-lighter',
      warning: 'bg-warning-lighter',
      error: 'bg-error-lighter',
      success: 'bg-success-lighter'
    },
    alertStyle: {
      default: 'gap-[15px] min-h-[204px]',
      'no-header': 'gap-[15px]',
      list: 'gap-[15px] min-h-[204px]'
    }
  },
  defaultVariants: {
    variant: 'info',
    alertStyle: 'default'
  }
});

const alertTextVariants = cva('font-sans text-[22px] leading-[28px] font-bold text-base-ink mb-4', {
  variants: {
    variant: {
      info: 'text-info-dark',
      warning: 'text-warning-dark',
      error: 'text-error-dark',
      success: 'text-success-dark'
    }
  },
  defaultVariants: {
    variant: 'info'
  }
});

interface AlertMessage {
  text: string;
  link?: string;
  suffix?: string;
}

interface AlertContent {
  title?: string;
  messages: AlertMessage[];
}

interface AlertProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof alertVariants> {
  content: AlertContent;
  className?: string;
}

const Alert = forwardRef<View, AlertProps>(({ content, variant, alertStyle, className, ...props }, ref) => {
  const Icon = {
    info: Info,
    warning: AlertTriangle,
    error: AlertCircle,
    success: CheckCircle2
  }[variant ?? 'info'];

  return (
    <View ref={ref} className={cn(alertVariants({ variant, alertStyle }), className)} {...props}>
      <Icon size={32} color="#1B1B1B" />
      <View className="flex-1">
        {content.title && (
          <Text className={alertTextVariants({ variant })}>{content.title}</Text>
        )}
        <View className="flex flex-col gap-4">
          {content.messages.map((message, index) => (
            <Text key={index} className="font-sans text-base leading-[150%] text-base-ink">
              {message.text}
              {message.link && (
                <Text className="text-primary underline">{message.link}</Text>
              )}
              {message.suffix}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
});

Alert.displayName = 'Alert';

export { Alert, alertVariants, alertTextVariants };
export type { AlertProps, AlertContent, AlertMessage };`,

  Banner: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Svg, { Path, Defs, Pattern, Image, Use } from 'react-native-svg';

const bannerVariants = cva('flex flex-row items-center', {
  variants: {
    variant: {
      'standard-app': 'bg-base-lighter p-4 gap-5 h-[88px] w-full max-w-[393px]',
      welcome: 'p-0 gap-4 h-[40px] w-[329px]'
    }
  },
  defaultVariants: {
    variant: 'standard-app'
  }
});

const bannerTextVariants = cva('whitespace-nowrap', {
  variants: {
    variant: {
      'standard-app': 'text-base-darker text-[12px] leading-[14px] font-public',
      welcome: 'text-foreground text-[22px] leading-[28px] font-bold w-[273px] font-source-sans-pro'
    }
  },
  defaultVariants: {
    variant: 'standard-app'
  }
});

type BannerProps = ComponentPropsWithoutRef<typeof View> &
  VariantProps<typeof bannerVariants> & {
    className?: string;
    title?: string;
    link?: string;
    trailingIcon?: ReactNode;
  };

const FlagIcon = ({ size = 31 }) => (
  <View style={{ width: size, height: (size * 22) / 31 }}>
    <Svg width={size} height={(size * 22) / 31} viewBox='0 0 31 22' fill='none'>
      <Path d='M0 0.69342V21.4307H30.1634V0.69342H0Z' fill='url(#pattern0)' />
      <Defs>
        <Pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
          <Use href='#image0' transform='scale(0.0625 0.0909091)' />
        </Pattern>
        <Image
          id='image0'
          width={16}
          height={11}
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAG1BMVEUdM7EeNLIeM7HgQCDaPh/bPh/bPx/////bPyBEby41AAAAUElEQVQI123MNw4CABDEwD3jC/9/MQ1BQrgeOSkIqYe2o2FZtthXgQLgbHVMZdlsfUQFQnHtjP1+8BUhBDKOqtmfot6ojqPzR7TjdU+f6vkED+IDPhTBcMAAAAAASUVORK5CYII='
        />
      </Defs>
    </Svg>
  </View>
);

const Banner = forwardRef<ElementRef<typeof View>, BannerProps>(({ className, variant, title, link, trailingIcon, ...props }, ref) => {
  const isStandardApp = variant === 'standard-app';

  return (
    <View ref={ref} testID='banner' accessibilityRole='header' className={cn(bannerVariants({ variant, className }))} {...props}>
      {isStandardApp && (
        <>
          <FlagIcon />
          <View className='h-14 w-[1px] bg-base-light flex-shrink-0' />
        </>
      )}

      <View className={cn('flex flex-col', isStandardApp ? 'gap-3 flex-1' : 'gap-0')}>
        <Text className={bannerTextVariants({ variant })} numberOfLines={1}>
          {isStandardApp ? (
            <>
              <Text className='font-bold'>An official app</Text>
              <Text className='font-normal'> of the United States government</Text>
            </>
          ) : (
            title
          )}
        </Text>
        {isStandardApp && link && (
          <Pressable accessibilityRole='link' accessibilityLabel={link}>
            <Text className='text-primary text-[12px] leading-[14px] font-bold underline whitespace-nowrap font-public' numberOfLines={1}>
              {link}
            </Text>
          </Pressable>
        )}
      </View>

      {trailingIcon && (
        <View className='flex flex-row justify-center items-center w-[40px] h-[40px] p-2'>
          <View className='w-6 h-6'>{trailingIcon}</View>
        </View>
      )}
    </View>
  );
});

Banner.displayName = 'Banner';

export { Banner, type BannerProps };`,

  BiometricSignIn: `import { useState } from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

interface BiometricSignInProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  buttonText?: string;
}

export function BiometricSignIn({ onSuccess, onError, buttonText = 'Sign in with Biometrics' }: BiometricSignInProps) {
  const [isLoading, setIsLoading] = useState(false);
  const rnBiometrics = new ReactNativeBiometrics();

  const handleBiometricAuth = async () => {
    try {
      setIsLoading(true);
      
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();
      
      if (!available) {
        throw new Error('Biometric authentication is not available');
      }

      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate to continue',
        cancelButtonText: 'Cancel'
      });

      if (success) {
        onSuccess?.();
      }
    } catch (error) {
      onError?.(error instanceof Error ? error : new Error('Authentication failed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onPress={handleBiometricAuth}
      disabled={isLoading}
      variant="secondary"
      size="default"
    >
      <Text>{buttonText}</Text>
    </Button>
  );
}`,

  Button: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable, PressableStateCallbackType } from 'react-native';
import { TextClassContext } from '@/components/Text';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center justify-center rounded-[4px] font-sans text-center', {
  variants: {
    variant: {
      default: 'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
      secondary: 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-white',
      'accent-cool': [
        'bg-accent-cool hover:bg-accent-cool-hover active:bg-accent-cool-active',
        'text-base-800 hover:text-base-800 active:text-white'
      ],
      'accent-warm': ['bg-accent-warm hover:bg-accent-warm-hover active:bg-accent-warm-active', 'text-base-800 hover:text-white active:text-white'],
      base: 'bg-base hover:bg-base-hover active:bg-base-active text-white',
      outline: [
        'border-2 bg-transparent',
        'border-primary hover:border-primary-hover active:border-primary-active',
        'text-primary hover:text-primary-hover active:text-primary-active'
      ],
      inverse: [
        'border-2 bg-transparent',
        'border-inverse-border hover:border-inverse-border-hover active:border-inverse-border-active',
        'text-inverse-border hover:text-inverse-border-hover active:text-inverse-border-active'
      ]
    },
    size: {
      default: 'h-[44px] px-[20px] py-[12px] min-w-[329px]',
      sm: 'h-[32px] px-[12px] py-[8px]',
      lg: 'h-[48px] px-[24px] py-[16px]',
      big: 'h-[60px] px-[24px] py-[16px] min-w-[329px]',
      icon: 'h-[44px] w-[44px] p-0'
    },
    focus: {
      true: 'outline-none ring-4 ring-focus-ring'
    },
    iconPosition: {
      left: 'flex-row gap-2',
      right: 'flex-row-reverse gap-2',
      none: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    focus: false,
    iconPosition: 'none'
  }
});

const buttonTextVariants = cva('text-center font-[700] text-[16px] leading-[20px]', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-white',
      'accent-cool': 'text-base-800 group-active:text-white',
      'accent-warm': 'text-base-800 group-hover:text-white group-active:text-white',
      base: 'text-white',
      outline: 'text-primary group-hover:text-primary-hover group-active:text-primary-active',
      inverse: 'text-inverse-border group-hover:text-inverse-border-hover group-active:text-inverse-border-active'
    },
    size: {
      default: 'text-[16px] leading-[20px]',
      sm: 'text-[14px] leading-[18px]',
      lg: 'text-[18px] leading-[22px]',
      big: 'text-[20px] leading-[24px]',
      icon: 'text-[16px] leading-[20px]'
    }
  }
});

type ButtonProps = ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  };

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(({ className, variant, size, children, startIcon, endIcon, ...props }, ref) => {
  const iconPosition = startIcon ? 'left' : endIcon ? 'right' : 'none';

  return (
    <TextClassContext.Provider
      value={buttonTextVariants({
        variant,
        size,
        className: 'web:pointer-events-none'
      })}
    >
      <Pressable
        ref={ref}
        className={cn(props.disabled && 'opacity-50 pointer-events-none', buttonVariants({ variant, size, iconPosition, className }))}
        ref={ref}
        role='button'
        {...props}
      >
        {(state) => (
          <>
            {startIcon}
            {typeof children === 'function' ? children(state) : children}
            {endIcon}
          </>
        )}
      </Pressable>
    </TextClassContext.Provider>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants, buttonTextVariants };
export type { ButtonProps };`,

  Input: `import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex-1 h-10 px-3 py-2 rounded-md border-2 border-usa-gray bg-white',
  {
    variants: {
      state: {
        default: 'border-usa-gray',
        error: 'border-usa-red',
        success: 'border-green-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

export interface InputProps
  extends TextInputProps,
    VariantProps<typeof inputVariants> {
  className?: string;
}

export function Input({ state, className, ...props }: InputProps) {
  return (
    <TextInput
      className={cn(inputVariants({ state }), className)}
      placeholderTextColor="#71767A"
      {...props}
    />
  );
}`,

  Checkbox: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react-native';

interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string;
}

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ label, disabled, checked, onCheckedChange, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <Pressable onPress={handlePress}>
        <View className='flex flex-row items-start gap-2 w-[329px] h-5'>
          <CheckboxPrimitive.Root
            ref={ref}
            disabled={disabled}
            checked={checked}
            onCheckedChange={onCheckedChange}
            {...props}
            style={{
              width: 20,
              height: 20,
              borderWidth: 2,
              borderRadius: 2,
              backgroundColor: checked
                ? disabled
                  ? 'rgb(117, 117, 117)' // disabled
                  : 'rgb(0, 94, 162)' // primary
                : 'transparent',
              borderColor: disabled
                ? 'rgb(117, 117, 117)' // disabled
                : checked
                  ? 'rgb(0, 94, 162)' // primary
                  : 'rgb(27, 27, 27)', // base-ink
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <CheckboxPrimitive.Indicator>
              <Check size={12} color='white' strokeWidth={3} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>

          <Text className={cn('flex-1 text-base leading-5', disabled ? 'text-disabled' : 'text-base-ink')}>{label}</Text>
        </View>
      </Pressable>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };`,

  CheckboxTile: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react-native';

const checkboxTileVariants = cva('flex flex-col w-[329px] rounded-[2px] border-2', {
  variants: {
    variant: {
      default: 'gap-2.5',
      withDescription: 'gap-1.5'
    },
    state: {
      checked: 'bg-primary-lighter border-primary-light',
      unchecked: 'bg-white border-disabled-lighter',
      disabled: 'bg-white border-gray-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    state: 'unchecked'
  }
});

interface CheckboxTileProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxTileVariants> {
  label: string;
  description?: string;
  className?: string;
}

const CheckboxTile = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxTileProps>(
  ({ label, description, className, disabled, checked, onCheckedChange, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const state = disabled ? 'disabled' : checked ? 'checked' : 'unchecked';
    const variant = description ? 'withDescription' : 'default';

    return (
      <Pressable onPress={handlePress} disabled={disabled}>
        <View className={cn(checkboxTileVariants({ variant, state }), 'p-[13px_16px_13px_9px]', className)}>
          <View className='flex flex-row items-start gap-2'>
            <CheckboxPrimitive.Root
              ref={ref}
              disabled={disabled}
              checked={checked}
              onCheckedChange={onCheckedChange}
              {...props}
              style={{
                width: 20,
                height: 20,
                borderWidth: 2,
                borderRadius: 2,
                backgroundColor: checked
                  ? disabled
                    ? 'rgb(117, 117, 117)' // disabled
                    : 'rgb(0, 94, 162)' // primary
                  : 'transparent',
                borderColor: disabled
                  ? 'rgb(117, 117, 117)' // disabled
                  : checked
                    ? 'rgb(0, 94, 162)' // primary
                    : 'rgb(27, 27, 27)', // base-ink
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <CheckboxPrimitive.Indicator>
                <Check size={12} color='white' strokeWidth={3} />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

            <Text className={cn('flex-1 text-base leading-5 font-source-sans-pro', disabled ? 'text-disabled' : 'text-base-ink')}>{label}</Text>
          </View>

          {description && (
            <Text className={cn('pl-7 text-base leading-5 font-source-sans-pro', disabled ? 'text-disabled' : 'text-base-ink')}>{description}</Text>
          )}
        </View>
      </Pressable>
    );
  }
);

CheckboxTile.displayName = 'CheckboxTile';

export { CheckboxTile, type CheckboxTileProps };`,

  ButtonGroup: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonGroupVariants = cva('flex flex-row gap-2', {
  variants: {
    variant: {
      default: '',
      segmented: 'border border-base-lighter rounded-[4px] overflow-hidden'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

interface ButtonGroupProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof buttonGroupVariants> {
  className?: string;
}

const ButtonGroup = forwardRef<View, ButtonGroupProps>(({ className, variant, children, ...props }, ref) => {
  return (
    <View ref={ref} className={cn(buttonGroupVariants({ variant }), className)} {...props}>
      {children}
    </View>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
export type { ButtonGroupProps };`,

  Card: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Image } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

const cardVariants = cva(
  'flex flex-col justify-between items-start bg-white border border-base-lighter rounded-[4px] w-[329px] min-h-[471px] mx-auto',
  {
    variants: {
      variant: {
        default: '',
        'media-first': '',
        inset: ''
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

interface CardProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  buttonText: string;
  mediaUrl?: string;
  showMedia?: boolean;
  className?: string;
}

const Card = forwardRef<View, CardProps>(({ title, description, buttonText, mediaUrl, showMedia = false, variant, className, ...props }, ref) => {
  const isMediaFirst = variant === 'media-first';
  const isInset = variant === 'inset';

  return (
    <View ref={ref} className={cn(cardVariants({ variant }), className)} {...props}>
      <View className='flex flex-col flex-1'>
        {showMedia && isMediaFirst && mediaUrl && (
          <View className='flex text-center items-center justify-center w-full'>
            <Image
              source={{ uri: mediaUrl }}
              style={{
                width: 327,
                height: 188,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              }}
              resizeMode='cover'
            />
          </View>
        )}

        <View className='px-6 pt-6 pb-2'>
          <Text className='font-merriweather font-bold text-[22px] leading-7 text-base-ink'>{title}</Text>
        </View>

        {showMedia && isInset && mediaUrl && (
          <View className='px-6'>
            <Image
              source={{ uri: mediaUrl }}
              style={{
                width: '100%',
                height: 162,
                borderRadius: 0
              }}
              resizeMode='cover'
            />
          </View>
        )}

        <View className='px-6 py-2'>
          <Text className='text-base leading-[162%] text-base-ink'>{description}</Text>
        </View>
      </View>

      <View className='px-6 pb-6 w-full'>
        <Button variant='default' size='sm'>
          <Text>{buttonText}</Text>
        </Button>
      </View>
    </View>
  );
});

Card.displayName = 'Card';

export { Card };
export type { CardProps };`,

  Icon: `import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ICON_PATHS } from '@/utils/registry';

interface IconProps {
  name: keyof typeof ICON_PATHS;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color = '#000000' }: IconProps) => {
  const path = ICON_PATHS[name];

  if (!path) {
    console.warn(\`Icon "\${name}" not found\`);
    return null;
  }

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
        <Path d={path} fill={color} />
      </Svg>
    </View>
  );
};`,

  Link: `import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react-native';

const linkVariants = cva('font-source-sans-pro text-base leading-[162%] underline', {
  variants: {
    variant: {
      default: 'text-primary',
      visited: 'text-[#54278F]', // violet-vivid-70v
      'dark-background': 'text-[#73B3E7]' // primary-light
    },
    external: {
      true: 'flex-row items-center gap-0.5',
      false: ''
    },
    focus: {
      true: 'outline-none ring-4 ring-[#2491FF] rounded',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    external: false,
    focus: false
  }
});

interface LinkProps extends ComponentPropsWithoutRef<typeof Pressable>, VariantProps<typeof linkVariants> {
  href: string;
  label: string;
  className?: string;
  visited?: boolean;
}

const Link = forwardRef<View, LinkProps>(({ href, label, className, external, visited, focus, ...props }, ref) => {
  const [isPressed, setIsPressed] = useState(false);
  const variant = visited ? 'visited' : props.variant;

  return (
    <Pressable
      ref={ref}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={cn(linkVariants({ variant, external, focus }), className)}
      {...props}
    >
      {({ pressed }) => (
        <View className={cn(linkVariants({ variant, external, focus: pressed || isPressed || focus }))}>
          <Text className={linkVariants({ variant, external, focus: pressed || isPressed || focus })}>{label}</Text>
          {external && <ExternalLink size={10} color={variant === 'dark-background' ? '#73B3E7' : visited ? '#54278F' : '#005EA2'} />}
        </View>
      )}
    </Pressable>
  );
});

Link.displayName = 'Link';

export { Link };`,

  Pagination: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

interface PaginationProps extends ComponentPropsWithoutRef<typeof View> {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const PaginationButton = forwardRef<View, ComponentPropsWithoutRef<typeof Pressable> & { active?: boolean }>(
  ({ children, active, disabled, className, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={cn(
          'w-[50px] h-[50px] rounded justify-center items-center',
          active ? 'bg-primary' : disabled ? 'bg-gray-40' : 'bg-primary',
          className
        )}
        disabled={disabled}
        accessible={true}
        {...props}
      >
        {children}
      </Pressable>
    );
  }
);

const Pagination = ({ currentPage, totalPages, totalItems, onPageChange, className }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <View className={cn('flex-row items-center p-8 gap-3 bg-gray-3 w-[393px]', className)}>
      <PaginationButton
        onPress={handlePrevious}
        disabled={currentPage === 1}
        className={currentPage === 1 ? 'bg-gray-40' : 'bg-primary'}
        accessibilityLabel='Previous page'
        accessibilityRole='button'
        accessibilityState={{ disabled: currentPage === 1 }}
        testID='previous-button'
      >
        <ChevronLeft color='white' size={24} />
      </PaginationButton>

      <Text className='flex-1 text-center text-[20px] leading-[30px] text-gray-70'>
        {currentPage} to {totalPages} of {totalItems}
      </Text>

      <PaginationButton
        onPress={handleNext}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? 'bg-gray-40' : 'bg-primary'}
        accessibilityLabel='Next page'
        accessibilityRole='button'
        accessibilityState={{ disabled: currentPage === totalPages }}
        testID='next-button'
      >
        <ChevronRight color='white' size={24} />
      </PaginationButton>
    </View>
  );
};

PaginationButton.displayName = 'PaginationButton';
Pagination.displayName = 'Pagination';

export { Pagination };`,

  RadioButton: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cn } from '@/lib/utils';

interface RadioButtonProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
}

const RadioButton = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioButtonProps>(
  ({ label, disabled, value, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        disabled={disabled}
        className='flex flex-row items-start gap-2 w-[329px] h-5'
        {...props}
      >
        <View
          className={cn(
            'w-5 h-5 rounded-full border-2',
            disabled
              ? 'border-disabled bg-white'
              : props.checked
              ? 'border-primary bg-white'
              : 'border-base-ink bg-white'
          )}
        >
          {props.checked && (
            <View
              className={cn(
                'w-3 h-3 rounded-full m-[2px]',
                disabled ? 'bg-disabled' : 'bg-primary'
              )}
            />
          )}
        </View>
        <Text className={cn('flex-1 text-base leading-5', disabled ? 'text-disabled' : 'text-base-ink')}>
          {label}
        </Text>
      </RadioGroupPrimitive.Item>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export { RadioButton };`,

  RadioTile: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext, createContext } from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const RadioContext = createContext<{ value?: string; onValueChange?: (value: string) => void }>({});

const radioTileVariants = cva('flex flex-col w-[329px] rounded-[2px] border-2', {
  variants: {
    variant: {
      default: '',
      withDescription: 'gap-2'
    },
    state: {
      checked: 'bg-primary-lighter border-primary',
      unchecked: 'bg-white border-disabled-lighter',
      disabled: 'bg-white border-gray-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    state: 'unchecked'
  }
});

interface RadioTileProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, VariantProps<typeof radioTileVariants> {
  label: string;
  description?: string;
  className?: string;
}

const RadioTileGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(
  ({ ...props }, ref) => {
    return (
      <RadioContext.Provider value={{ value: props.value, onValueChange: props.onValueChange }}>
        <RadioGroupPrimitive.Root ref={ref} {...props}>
          <View className='flex flex-col gap-3'>{props.children}</View>
        </RadioGroupPrimitive.Root>
      </RadioContext.Provider>
    );
  }
);

const RadioTile = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioTileProps>(
  ({ label, description, className, variant = description ? 'withDescription' : 'default', ...props }, ref) => {
    const labelId = \`\${props.value}-label\`;
    const descriptionId = \`\${props.value}-description\`;
    const { value, onValueChange } = useContext(RadioContext);
    const isSelected = value === props.value;

    const state = props.disabled ? 'disabled' : isSelected ? 'checked' : 'unchecked';

    const handlePress = (event: GestureResponderEvent) => {
      if (!props.disabled && onValueChange) {
        onValueChange(props.value);
      }
    };

    return (
      <Pressable onPress={handlePress} disabled={props.disabled}>
        <View className={cn(radioTileVariants({ variant, state }), 'p-[13px_16px_13px_9px]', className)}>
          <View className='flex flex-row items-center gap-2 min-h-[44px]'>
            <RadioGroupPrimitive.Item
              ref={ref}
              aria-labelledby={labelId}
              aria-describedby={description ? descriptionId : undefined}
              style={{
                width: 20,
                height: 20,
                borderRadius: 9999,
                borderWidth: 2,
                backgroundColor: 'white',
                borderColor: props.disabled ? '#757575' : isSelected ? '#005EA2' : '#1B1B1B',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              {...props}
            >
              <RadioGroupPrimitive.Indicator>
                <View
                  style={{
                    width: 12.5,
                    height: 12.5,
                    borderRadius: 9999,
                    backgroundColor: props.disabled ? '#757575' : '#005EA2'
                  }}
                />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <Text nativeID={labelId} className={cn('flex-1 text-base leading-5', props.disabled ? 'text-disabled' : 'text-base-ink')}>
              {label}
            </Text>
          </View>
          {description && (
            <Text nativeID={descriptionId} className={cn('pl-7 text-[15px] leading-[19px]', props.disabled ? 'text-disabled' : 'text-base-ink')}>
              {description}
            </Text>
          )}
        </View>
      </Pressable>
    );
  }
);

RadioTile.displayName = 'RadioTile';
RadioTileGroup.displayName = 'RadioTileGroup';

export { RadioTileGroup, RadioTile, type RadioTileProps };`,

  Snackbar: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, AlertCircle } from 'lucide-react-native';
import { cn } from '@/lib/utils';

const snackbarVariants = cva('flex w-[329px] bg-base-darkest rounded-[4px] p-3', {
  variants: {
    layout: {
      'one-line': 'flex-row items-center h-[48px] justify-between',
      'two-lines': 'min-h-[70px]'
    }
  },
  defaultVariants: {
    layout: 'one-line'
  }
});

type SnackbarProps = ComponentPropsWithoutRef<typeof View> &
  VariantProps<typeof snackbarVariants> & {
    className?: string;
    message: string;
    variant?: 'success' | 'error';
    onAction?: () => void;
    onDismiss?: () => void;
    actionLabel?: string;
  };

const Snackbar = forwardRef<ElementRef<typeof View>, SnackbarProps & { isVisible: boolean }>(
  ({ className, layout, message, variant = 'success', onAction, onDismiss, actionLabel = 'Action', isVisible }, ref) => {
    if (!isVisible) return null;

    const Icon = variant === 'success' ? Check : AlertCircle;

    if (layout === 'two-lines') {
      return (
        <View ref={ref} testID='snackbar-container' className={cn(snackbarVariants({ layout }), className)}>
          <View className='flex flex-row gap-2 mb-3'>
            <View className='flex items-center justify-center h-6'>
              <Icon color='#F0F0F0' size={24} />
            </View>
            <Text className='text-base-lightest text-base leading-6 flex-1 flex-wrap'>{message}</Text>
          </View>

          <View className='flex flex-row justify-end items-center gap-6'>
            {onAction && (
              <Pressable onPress={onAction}>
                <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>{actionLabel}</Text>
              </Pressable>
            )}
            {onDismiss && (
              <Pressable onPress={onDismiss}>
                <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>Dismiss</Text>
              </Pressable>
            )}
          </View>
        </View>
      );
    }

    return (
      <View ref={ref} testID='snackbar-container' className={cn(snackbarVariants({ layout }), className)}>
        <View className='flex flex-row items-center gap-2 flex-shrink min-w-0 max-w-[171px]'>
          <View className='flex items-center justify-center h-6 flex-shrink-0'>
            <Icon color='#F0F0F0' size={24} />
          </View>
          <Text numberOfLines={1} className='text-base-lightest text-base leading-6 flex-shrink'>
            {message}
          </Text>
        </View>

        <View className='flex flex-row items-center gap-6 flex-shrink-0'>
          {onAction && (
            <Pressable onPress={onAction}>
              <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>{actionLabel}</Text>
            </Pressable>
          )}
          {onDismiss && (
            <Pressable onPress={onDismiss}>
              <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>Dismiss</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  }
);

Snackbar.displayName = 'Snackbar';

export { Snackbar, type SnackbarProps };`,

  StepIndicator: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const stepIndicatorVariants = cva('flex flex-col items-center justify-center mx-auto', {
  variants: {
    size: {
      default: 'w-[329px] h-[68px]',
      small: 'w-[329px] h-[50px]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

const segmentVariants = cva('flex flex-row items-center gap-1', {
  variants: {
    state: {
      default: 'bg-disabled-light', // gray #919191
      active: 'bg-primary', // blue #005EA2
      complete: 'bg-primary-darker' // darker blue #162E51
    },
    size: {
      default: 'h-12',
      small: 'h-8'
    }
  },
  defaultVariants: {
    state: 'default',
    size: 'default'
  }
});

interface StepIndicatorProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof stepIndicatorVariants> {
  steps: number;
  currentStep: number;
  title: string;
  labels?: string[];
}

const StepIndicator = forwardRef<View, StepIndicatorProps>(({ steps, currentStep, title, labels, size, className, ...props }, ref) => {
  return (
    <View ref={ref} className={cn(stepIndicatorVariants({ size }), className)} {...props}>
      {/* Segments container */}
      <View className='flex flex-row items-center justify-center gap-1 mb-4 w-full'>
        {Array.from({ length: steps }).map((_, index) => {
          const state = index < currentStep - 1 ? 'complete' : index === currentStep - 1 ? 'active' : 'default';

          return <View key={index} className={cn(segmentVariants({ state, size }), 'flex-1 h-3', index === steps - 1 && 'flex-none')} />;
        })}
      </View>

      {/* Heading */}
      <View className='flex flex-row items-center gap-2 w-full'>
        <View className={cn('rounded-full flex items-center justify-center', size === 'default' ? 'w-10 h-10' : 'w-6 h-6', 'bg-primary')}>
          <Text className='text-white font-source-sans-pro font-normal'>{currentStep}</Text>
        </View>
        <Text className='text-primary font-source-sans-pro font-normal'>of {steps}</Text>
        <Text className='text-base-ink font-source-sans-pro font-bold text-[22px] leading-7'>{title}</Text>
      </View>
    </View>
  );
});

StepIndicator.displayName = 'StepIndicator';

export { StepIndicator };`,

  Tag: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagVariants = cva('flex flex-row justify-center items-center bg-gray-60 rounded-[2px]', {
  variants: {
    size: {
      default: 'px-2 py-0.5 h-[18px]',
      big: 'px-2 py-1 h-[24px]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

const tagTextVariants = cva('text-white font-normal text-center', {
  variants: {
    size: {
      default: 'text-[14px] leading-[14px]',
      big: 'text-base leading-[16px]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

interface TagProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof tagVariants> {
  label: string;
  className?: string;
}

const Tag = forwardRef<View, TagProps>(({ label, size, className, ...props }, ref) => {
  return (
    <View ref={ref} style={{ minWidth: 43 }} className={cn(tagVariants({ size }), className)} {...props}>
      <Text className={tagTextVariants({ size })}>{label}</Text>
    </View>
  );
});

Tag.displayName = 'Tag';

export { Tag };`,

  Text: `import { forwardRef, createContext, useContext } from 'react';
import * as Slot from '@rn-primitives/slot';
import { SlottableTextProps, TextRef } from '@rn-primitives/types';
import { Text as RNText } from 'react-native';
import { cn } from '@/lib/utils';

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<TextRef, SlottableTextProps>(({ className, asChild = false, ...props }, ref) => {
  const textClass = useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  return <Component className={cn('text-base text-foreground web:select-text', textClass, className)} ref={ref} {...props} />;
});

Text.displayName = 'Text';

export { Text, TextClassContext };`,

  Textarea: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { TextInput, View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  'flex flex-col w-[329px] rounded-[2px] border-2 bg-white px-4 py-2 text-base leading-[162%] text-base-ink placeholder:text-base-ink/50',
  {
    variants: {
      state: {
        default: 'border-base-ink',
        error: 'border-error',
        success: 'border-success',
        disabled: 'border-disabled bg-disabled-light'
      }
    },
    defaultVariants: {
      state: 'default'
    }
  }
);

interface TextareaProps extends ComponentPropsWithoutRef<typeof TextInput>, VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
  characterCount?: boolean;
}

const Textarea = forwardRef<TextInput, TextareaProps>(
  ({ label, error, hint, className, state = 'default', characterCount, maxLength, value, ...props }, ref) => {
    const currentLength = value?.toString().length || 0;

    return (
      <View className='flex flex-col gap-1'>
        {label && (
          <Text className='text-base leading-5 text-base-ink font-source-sans-pro'>{label}</Text>
        )}
        {hint && (
          <Text className='text-base leading-5 text-base-ink font-source-sans-pro'>{hint}</Text>
        )}
        <TextInput
          ref={ref}
          multiline
          maxLength={maxLength}
          value={value}
          className={cn(
            textareaVariants({ state }),
            props.disabled && 'text-disabled border-disabled bg-disabled-light',
            className
          )}
          {...props}
        />
        <View className='flex flex-row justify-between'>
          {error && (
            <Text className='text-base leading-5 text-error font-source-sans-pro'>{error}</Text>
          )}
          {characterCount && maxLength && (
            <Text className='text-base leading-5 text-base-ink font-source-sans-pro'>
              {currentLength}/{maxLength}
            </Text>
          )}
        </View>
      </View>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };`,

  TextInput: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { TextInput as RNTextInput, View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textInputVariants = cva(
  'flex flex-col w-[329px] rounded-[2px] border-2 bg-white px-4 py-2 text-base leading-[162%] text-base-ink placeholder:text-base-ink/50',
  {
    variants: {
      state: {
        default: 'border-base-ink',
        error: 'border-error',
        success: 'border-success',
        disabled: 'border-disabled bg-disabled-light'
      }
    },
    defaultVariants: {
      state: 'default'
    }
  }
);

interface TextInputProps extends ComponentPropsWithoutRef<typeof RNTextInput>, VariantProps<typeof textInputVariants> {
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ label, error, hint, className, state = 'default', ...props }, ref) => {
    return (
      <View className='flex flex-col gap-1'>
        {label && (
          <Text className='text-base leading-5 text-base-ink font-source-sans-pro'>{label}</Text>
        )}
        {hint && (
          <Text className='text-base leading-5 text-base-ink font-source-sans-pro'>{hint}</Text>
        )}
        <RNTextInput
          ref={ref}
          className={cn(
            textInputVariants({ state }),
            props.disabled && 'text-disabled border-disabled bg-disabled-light',
            className
          )}
          {...props}
        />
        {error && (
          <Text className='text-base leading-5 text-error font-source-sans-pro'>{error}</Text>
        )}
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput };`,

  Toggle: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Pressable, View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toggleVariants = cva('flex flex-row items-center', {
  variants: {
    size: {
      default: 'gap-2',
      large: 'gap-3'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

interface ToggleProps extends Omit<ComponentPropsWithoutRef<typeof Pressable>, 'onPress'>, VariantProps<typeof toggleVariants> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

const Toggle = forwardRef<View, ToggleProps>(
  ({ checked, onCheckedChange, label, disabled, size, className, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={() => !disabled && onCheckedChange(!checked)}
        className={cn(toggleVariants({ size }), className)}
        {...props}
      >
        <View
          className={cn(
            'w-[51px] h-8 rounded-full p-1',
            checked ? 'bg-primary' : 'bg-disabled',
            disabled && 'opacity-50'
          )}
        >
          <View
            className={cn(
              'w-6 h-6 rounded-full bg-white transition-all',
              checked ? 'translate-x-[19px]' : 'translate-x-0'
            )}
          />
        </View>
        {label && (
          <Text
            className={cn(
              'text-base leading-5 font-source-sans-pro',
              disabled ? 'text-disabled' : 'text-base-ink'
            )}
          >
            {label}
          </Text>
        )}
      </Pressable>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle };`
};

export async function getComponentTemplate(name: string): Promise<string> {
  const template = COMPONENT_TEMPLATES[name];
  if (!template) {
    throw new Error(`Template not found for component: ${name}`);
  }
  return template;
}
