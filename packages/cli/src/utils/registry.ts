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
  internalDependencies?: string[];
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
  check: 'M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 6.99997L19.5899 5.58997L8.99991 16.17Z',

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
    'M17.17 2C18.73 2 20 3.27 20 4.83V13H22V19C22 20.1 21.1 21 20 21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21C2.9 21 2 20.1 2 19V13H5V12.25C5 11.01 6 10.01 7.24 10C7.59 10 7.93 10.08 8.24 10.23C8.5 10.35 8.74 10.52 8.93 10.73L10.33 12.28C10.58 12.55 10.85 12.79 11.15 13H18V4.83C18 4.37 17.63 4 17.17 4C16.95 4 16.74 4.09 16.59 4.24L15.34 5.49C15.38 5.66 15.41 5.82 15.41 6C15.41 6.4 15.29 6.77 15.09 7.08L12.33 4.32C12.64 4.12 13.01 4 13.41 4C13.59 4 13.76 4.03 13.92 4.08L15.17 2.83C15.7 2.3 16.42 2 17.17 2ZM7 5C8.10457 5 9 5.89543 9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7 5Z',
  build:
    'M215.14 747.94C215.18 747.64 215.2 747.33 215.2 747C215.2 746.68 215.18 746.36 215.13 746.06L217.16 744.48C217.34 744.34 217.39 744.07 217.28 743.87L215.36 740.55C215.24 740.33 214.99 740.26 214.77 740.33L212.38 741.29C211.88 740.91 211.35 740.59 210.76 740.35L210.4 737.81C210.36 737.57 210.16 737.4 209.92 737.4H206.08C205.84 737.4 205.65 737.57 205.61 737.81L205.25 740.35C204.66 740.59 204.12 740.92 203.63 741.29L201.24 740.33C201.02 740.25 200.77 740.33 200.65 740.55L198.74 743.87C198.62 744.08 198.66 744.34 198.86 744.48L200.89 746.06C200.84 746.36 200.8 746.69 200.8 747C200.8 747.31 200.82 747.64 200.87 747.94L198.84 749.52C198.66 749.66 198.61 749.93 198.72 750.13L200.64 753.45C200.76 753.67 201.01 753.74 201.23 753.67L203.62 752.71C204.12 753.09 204.65 753.41 205.24 753.65L205.6 756.19C205.65 756.43 205.84 756.6 206.08 756.6H209.92C210.16 756.6 210.36 756.43 210.39 756.19L210.75 753.65C211.34 753.41 211.88 753.09 212.37 752.71L214.76 753.67C214.98 753.75 215.23 753.67 215.35 753.45L217.27 750.13C217.39 749.91 217.34 749.66 217.15 749.52L215.14 747.94Z',
  bedding:
    'M17 10.75C18.7949 10.75 20.25 12.2051 20.25 14C20.25 15.7949 18.7949 17.25 17 17.25H7C6.30964 17.25 5.75 16.6903 5.75 16C5.75 15.3096 6.30964 14.75 7 14.75H17C17.4142 14.75 17.75 14.4142 17.75 14C17.75 13.5858 17.4142 13.25 17 13.25H7C5.48122 13.25 4.25 14.4812 4.25 16C4.25 17.5188 5.48122 18.75 7 18.75H21C21.6904 18.75 22.25 19.3096 22.25 20C22.25 20.6903 21.6904 21.25 21 21.25H7C4.10051 21.25 1.75 18.8995 1.75 16C1.75 13.1005 4.10051 10.75 7 10.75H17ZM16.3963 1.27759L17.06 1.36998C17.7789 1.48244 18.3657 1.99419 18.5799 2.68036L18.62 2.82998C18.9799 4.29747 19.0076 5.82517 18.7031 7.30192L18.62 7.66998C18.4528 8.39703 17.8776 8.95384 17.1566 9.10409L17 9.12998C13.906 9.59192 10.7641 9.62272 7.66369 9.22237L7 9.12998C6.30139 8.99576 5.73862 8.48771 5.52935 7.81628L5.49 7.66998C5.13934 6.20139 5.11236 4.67564 5.40908 3.19826L5.49 2.82998C5.65574 2.11995 6.20758 1.56972 6.90777 1.40036L7.06 1.36998C10.154 0.908041 13.2959 0.877245 16.3963 1.27759Z',
  bookmark: 'M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z',
  bug_report:
    'M20 8H17.19C16.74 7.22 16.12 6.55 15.37 6.04L17 4.41L15.59 3L13.42 5.17C12.96 5.06 12.49 5 12 5C11.51 5 11.04 5.06 10.59 5.17L8.41 3L7 4.41L8.62 6.04C7.88 6.55 7.26 7.22 6.81 8H4V10H6.09C6.04 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.04 15.67 6.09 16H4V18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H20V16H17.91C17.96 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.96 10.33 17.91 10H20V8ZM14 16H10V14H14V16ZM14 12H10V10H14V12Z',
  error_outline:
    'M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z',
  info: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z',
  face_id:
    'M1.17383 6.66501C1.69141 6.66501 1.96485 6.37204 1.96485 5.86423V3.55954C1.96485 2.54392 2.50196 2.02634 3.47852 2.02634H5.8418C6.35938 2.02634 6.64258 1.74313 6.64258 1.23532C6.64258 0.727509 6.35938 0.454071 5.8418 0.454071H3.45899C1.41797 0.454071 0.392578 1.45993 0.392578 3.47165V5.86423C0.392578 6.37204 0.675781 6.66501 1.17383 6.66501ZM18.7227 6.66501C19.2403 6.66501 19.5137 6.37204 19.5137 5.86423V3.47165C19.5137 1.45993 18.4883 0.454071 16.4473 0.454071H14.0547C13.5469 0.454071 13.2637 0.727509 13.2637 1.23532C13.2637 1.74313 13.5469 2.02634 14.0547 2.02634H16.418C17.3848 2.02634 17.9414 2.54392 17.9414 3.55954V5.86423C17.9414 6.37204 18.2246 6.66501 18.7227 6.66501ZM3.45899 19.5654H5.8418C6.35938 19.5654 6.64258 19.2822 6.64258 18.7841C6.64258 18.2763 6.35938 17.9931 5.8418 17.9931H3.47852C2.50196 17.9931 1.96485 17.4755 1.96485 16.4599V14.1552C1.96485 13.6376 1.68164 13.3544 1.17383 13.3544C0.666016 13.3544 0.392578 13.6376 0.392578 14.1552V16.538C0.392578 18.5595 1.41797 19.5654 3.45899 19.5654ZM14.0547 19.5654H16.4473C18.4883 19.5654 19.5137 18.5497 19.5137 16.538V14.1552C19.5137 13.6376 19.2305 13.3544 18.7227 13.3544C18.2149 13.3544 17.9414 13.6376 17.9414 14.1552V16.4599C17.9414 17.4755 17.3848 17.9931 16.418 17.9931H14.0547C13.5469 17.9931 13.2637 18.2763 13.2637 18.7841C13.2637 19.2822 13.5469 19.5654 14.0547 19.5654ZM6.23242 9.35056C6.69141 9.35056 7.02344 9.02829 7.02344 8.55954V7.23142C7.02344 6.76266 6.69141 6.4404 6.23242 6.4404C5.77344 6.4404 5.45117 6.76266 5.45117 7.23142V8.55954C5.45117 9.02829 5.77344 9.35056 6.23242 9.35056ZM9.17188 11.6552C9.19141 11.6552 9.2207 11.6552 9.25 11.6552C10.2363 11.6552 10.7735 11.1181 10.7735 10.1318V7.05563C10.7735 6.67477 10.5196 6.43063 10.1484 6.43063C9.75781 6.43063 9.50391 6.67477 9.50391 7.05563V10.2197C9.50391 10.3174 9.44531 10.3662 9.35742 10.3662H9.01563C8.66406 10.3662 8.39063 10.6396 8.39063 10.9911C8.39063 11.4111 8.67383 11.6552 9.17188 11.6552ZM13.6446 9.35056C14.0938 9.35056 14.416 9.02829 14.416 8.55954V7.23142C14.416 6.76266 14.0938 6.4404 13.6446 6.4404C13.1758 6.4404 12.8535 6.76266 12.8535 7.23142V8.55954C12.8535 9.02829 13.1758 9.35056 13.6446 9.35056ZM9.89453 14.9365C11.0762 14.9365 12.2676 14.4286 13.1172 13.579C13.2344 13.4716 13.293 13.3056 13.293 13.1103C13.293 12.7392 13.0196 12.4755 12.6582 12.4755C12.4727 12.4755 12.336 12.5439 12.1504 12.7392C11.6133 13.2958 10.7637 13.6767 9.89453 13.6767C9.07422 13.6767 8.21485 13.3154 7.64844 12.7392C7.49219 12.5927 7.36524 12.4755 7.13086 12.4755C6.76953 12.4755 6.4961 12.7392 6.4961 13.1103C6.4961 13.2763 6.55469 13.4325 6.68164 13.5693C7.47266 14.4677 8.71289 14.9365 9.89453 14.9365Z',
  fingerprint:
    'M17.8102 4.47C17.7302 4.47 17.6502 4.45 17.5802 4.41C15.6602 3.42 14.0002 3 12.0102 3C10.0302 3 8.15023 3.47 6.44023 4.41C6.20023 4.54 5.90023 4.45 5.76023 4.21C5.63023 3.97 5.72023 3.66 5.96023 3.53C7.82023 2.52 9.86023 2 12.0102 2C14.1402 2 16.0002 2.47 18.0402 3.52C18.2902 3.65 18.3802 3.95 18.2502 4.19C18.1602 4.37 17.9902 4.47 17.8102 4.47ZM3.50023 9.72C3.40023 9.72 3.30023 9.69 3.21023 9.63C2.98023 9.47 2.93023 9.16 3.09023 8.93C4.08023 7.53 5.34023 6.43 6.84023 5.66C9.98023 4.04 14.0002 4.03 17.1502 5.65C18.6502 6.42 19.9102 7.51 20.9002 8.9C21.0602 9.12 21.0102 9.44 20.7802 9.6C20.5502 9.76 20.2402 9.71 20.0802 9.48C19.1802 8.22 18.0402 7.23 16.6902 6.54C13.8202 5.07 10.1502 5.07 7.29023 6.55C5.93023 7.25 4.79023 8.25 3.89023 9.51C3.81023 9.65 3.66023 9.72 3.50023 9.72ZM9.75023 21.79C9.62023 21.79 9.49023 21.74 9.40023 21.64C8.53023 20.77 8.06023 20.21 7.39023 19C6.70023 17.77 6.34023 16.27 6.34023 14.66C6.34023 11.69 8.88023 9.27 12.0002 9.27C15.1202 9.27 17.6602 11.69 17.6602 14.66C17.6602 14.94 17.4402 15.16 17.1602 15.16C16.8802 15.16 16.6602 14.94 16.6602 14.66C16.6602 12.24 14.5702 10.27 12.0002 10.27C9.43023 10.27 7.34023 12.24 7.34023 14.66C7.34023 16.1 7.66023 17.43 8.27023 18.51C8.91023 19.66 9.35023 20.15 10.1202 20.93C10.3102 21.13 10.3102 21.44 10.1202 21.64C10.0102 21.74 9.88023 21.79 9.75023 21.79ZM16.9202 19.94C15.7302 19.94 14.6802 19.64 13.8202 19.05C12.3302 18.04 11.4402 16.4 11.4402 14.66C11.4402 14.38 11.6602 14.16 11.9402 14.16C12.2202 14.16 12.4402 14.38 12.4402 14.66C12.4402 16.07 13.1602 17.4 14.3802 18.22C15.0902 18.7 15.9202 18.93 16.9202 18.93C17.1602 18.93 17.5602 18.9 17.9602 18.83C18.2302 18.78 18.4902 18.96 18.5402 19.24C18.5902 19.51 18.4102 19.77 18.1302 19.82C17.5602 19.93 17.0602 19.94 16.9202 19.94ZM14.9102 22C14.8702 22 14.8202 21.99 14.7802 21.98C13.1902 21.54 12.1502 20.95 11.0602 19.88C9.66023 18.49 8.89023 16.64 8.89023 14.66C8.89023 13.04 10.2702 11.72 11.9702 11.72C13.6702 11.72 15.0502 13.04 15.0502 14.66C15.0502 15.73 15.9802 16.6 17.1302 16.6C18.2802 16.6 19.2102 15.73 19.2102 14.66C19.2102 10.89 15.9602 7.83 11.9602 7.83C9.12023 7.83 6.52023 9.41 5.35023 11.86C4.96023 12.67 4.76023 13.62 4.76023 14.66C4.76023 15.44 4.83023 16.67 5.43023 18.27C5.53023 18.53 5.40023 18.82 5.14023 18.91C4.88023 19.01 4.59023 18.87 4.50023 18.62C4.01023 17.31 3.77023 16.01 3.77023 14.66C3.77023 13.46 4.00023 12.37 4.45023 11.42C5.78023 8.63 8.73023 6.82 11.9602 6.82C16.5102 6.82 20.2102 10.33 20.2102 14.65C20.2102 16.27 18.8302 17.59 17.1302 17.59C15.4302 17.59 14.0502 16.27 14.0502 14.65C14.0502 13.58 13.1202 12.71 11.9702 12.71C10.8202 12.71 9.89023 13.58 9.89023 14.65C9.89023 16.36 10.5502 17.96 11.7602 19.16C12.7102 20.1 13.6202 20.62 15.0302 21.01C15.3002 21.08 15.4502 21.36 15.3802 21.62C15.3302 21.85 15.1202 22 14.9102 22Z',
  launch:
    'M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z',
  navigate_next: 'M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z',
  navigate_before: 'M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z'
};

export const COMPONENT_METADATA: Record<string, ComponentMetadata> = {
  Alert: {
    name: 'Alert',
    dependencies: [],
    internalDependencies: ['Icon']
  },
  Banner: {
    name: 'Banner',
    dependencies: [],
    internalDependencies: ['Icon']
  },
  BiometricSignIn: {
    name: 'BiometricSignIn',
    dependencies: [],
    internalDependencies: ['Icon']
  },
  Button: {
    name: 'Button',
    dependencies: [],
    internalDependencies: ['Text']
  },
  ButtonGroup: {
    name: 'ButtonGroup',
    dependencies: [],
    internalDependencies: []
  },
  Card: {
    name: 'Card',
    dependencies: [],
    internalDependencies: ['Button']
  },
  Checkbox: {
    name: 'Checkbox',
    dependencies: ['@rn-primitives/checkbox'],
    internalDependencies: []
  },
  CheckboxTile: {
    name: 'CheckboxTile',
    dependencies: ['@rn-primitives/checkbox'],
    internalDependencies: ['Checkbox']
  },
  Icon: {
    name: 'Icon',
    dependencies: []
  },
  Link: {
    name: 'Link',
    dependencies: [],
    internalDependencies: [] 
  },
  Pagination: {
    name: 'Pagination',
    dependencies: [],
    internalDependencies: ['Button']
  },
  RadioButton: {
    name: 'RadioButton',
    dependencies: ['@rn-primitives/radio-group'],
    internalDependencies: []
  },
  RadioTile: {
    name: 'RadioTile',
    dependencies: ['@rn-primitives/radio-group'],
    internalDependencies: ['RadioButton'] 
  },
  Snackbar: {
    name: 'Snackbar',
    dependencies: [],
    internalDependencies: ['Icon']
  },
  StepIndicator: {
    name: 'StepIndicator',
    dependencies: [],
    internalDependencies: []
  },
  Tag: {
    name: 'Tag',
    dependencies: [],
    internalDependencies: ['Icon']
  },
  Text: {
    name: 'Text',
    dependencies: ['@rn-primitives/slot', '@rn-primitives/types']
  },
  Textarea: {
    name: 'Textarea',
    dependencies: [],
    internalDependencies: []
  },
  TextInput: {
    name: 'TextInput',
    dependencies: [],
    internalDependencies: []
  },
  Toggle: {
    name: 'Toggle',
    dependencies: ['@rn-primitives/toggle']
    // No internal dependencies
  }
};

export const COMPONENT_TEMPLATES: Record<string, string> = {
  Alert: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

const alertVariants = cva('flex flex-row items-start p-4 w-[329px]', {
  variants: {
    variant: {
      info: 'bg-info-lighter',
      error: 'bg-error-lighter',
      warning: 'bg-warning-lighter',
      success: 'bg-success-lighter',
      emergency: 'bg-red-warm-vivid-60'
    },
    alertStyle: {
      default: 'gap-[15px]',
      'no-header': 'gap-[15px]',
      list: 'gap-[15px]',
      slim: 'gap-3',
      'no-icon': 'gap-[10px]'
    }
  },
  defaultVariants: {
    variant: 'info',
    alertStyle: 'default'
  }
});

const alertTextVariants = cva('font-sans text-[22px] leading-[28px] font-bold text-base-ink mb-2', {
  variants: {
    variant: {
      info: 'text-base-ink',
      error: 'text-base-ink',
      warning: 'text-base-ink',
      success: 'text-base-ink',
      emergency: 'text-white'
    },
    alertStyle: {
      default: '',
      'no-header': '',
      list: '',
      slim: '',
      'no-icon': ''
    }
  }
});

interface AlertProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof alertVariants> {
  title?: string;
  description: {
    title?: string;
    body?: string;
    link?: string;
    messages?: Array<{
      text: string;
      link?: string;
      suffix?: string;
    }>;
  };
  showIcon?: boolean;
  className?: string;
  variant?: 'info' | 'error' | 'warning' | 'success' | 'emergency';
  alertStyle?: 'default' | 'no-header' | 'list' | 'slim' | 'no-icon';
}

const Alert = forwardRef<ElementRef<typeof View>, AlertProps>(
  ({ className, variant, alertStyle, title, description, showIcon = true, style, ...props }, ref) => {
    const isNoIcon = alertStyle === 'no-icon';
    const shouldShowIcon = showIcon && !isNoIcon;

    const renderDescription = () => {
      if (alertStyle === 'list' && description.messages) {
        return (
          <View className='space-y-4'>
            {description.messages.map((message, index) => (
              <View key={index} className='flex flex-row items-start'>
                <Text className={cn('text-base leading-[24px] mr-2', variant === 'emergency' ? 'text-white' : 'text-base-ink')}>•</Text>
                <Text className={cn('text-base leading-[24px] flex-1', variant === 'emergency' ? 'text-white' : 'text-base-ink')}>
                  {message.text}
                  {message.link && <Text className={cn('underline', variant === 'emergency' ? 'text-white' : 'text-primary')}>{message.link}</Text>}
                  {message.suffix}
                </Text>
              </View>
            ))}
          </View>
        );
      }

      return (
        <Text className={cn('text-base leading-5', variant === 'emergency' ? 'text-white' : 'text-base-ink')}>
          {description.title && <Text className='font-bold'>{description.title} </Text>}
          {description.body}
          {description.link && <Text className={cn('underline', variant === 'emergency' ? 'text-white' : 'text-primary')}>{description.link}</Text>}
        </Text>
      );
    };

    return (
      <View
        ref={ref}
        testID='alert'
        accessibilityRole='alert'
        style={style}
        className={cn(alertVariants({ variant, alertStyle }), className)}
        {...props}
      >
        {shouldShowIcon && (
          <View
            className={cn(
              'flex-shrink-0 rounded-full flex items-center justify-center',
              alertStyle === 'slim' ? 'w-6 h-6' : 'w-8 h-8',
              variant === 'emergency' ? 'bg-transparent' : 'bg-base-ink'
            )}
          >
            <Icon
              name='info'
              className={cn(variant === 'emergency' ? 'text-emergency fill-white' : 'text-white fill-base-ink')}
              size={alertStyle === 'slim' ? 24 : 32}
            />
          </View>
        )}

        <View className={cn('flex flex-col', alertStyle === 'no-icon' ? 'w-[297px]' : 'w-[250px]')}>
          {title && <Text className={alertTextVariants({ alertStyle, variant })}>{title}</Text>}
          {renderDescription()}
        </View>
      </View>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert, type AlertProps };`,

  Banner: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';
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
      'standard-app': 'text-base-darker text-[12px] leading-[14px]',
      welcome: 'text-foreground text-[22px] leading-[28px] font-bold w-[273px]'
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
            <Text className='text-primary text-[12px] leading-[14px] font-bold underline whitespace-nowrap' numberOfLines={1}>
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

  BiometricSignIn: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { cssInterop } from 'nativewind';

cssInterop(CheckboxPrimitive.Root, { className: 'style' });
interface BiometricSignInProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  biometricType?: 'faceId' | 'touchId' | 'biometric';
  className?: string;
}

const BiometricSignIn = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, BiometricSignInProps>(
  ({ biometricType = 'faceId', className, disabled, checked, onCheckedChange, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const getBiometricText = () => {
      switch (biometricType) {
        case 'faceId':
          return 'Face ID';
        case 'touchId':
          return 'Touch ID';
        case 'biometric':
          return 'Biometric';
        default:
          return 'Face ID';
      }
    };

    const getBiometricIcon = () => {
      switch (biometricType) {
        case 'faceId':
          return <Icon name='face_id' size={20} className='text-base-ink' />;
        case 'touchId':
          return <Icon name='fingerprint' size={20} className='text-base-ink' />;
        case 'biometric':
          return <Icon name='fingerprint' size={20} className='text-base-ink' />;
        default:
          return <Icon name='face_id' size={20} className='text-base-ink' />;
      }
    };

    return (
      <Pressable onPress={handlePress} testID='biometric-pressable'>
        <View className={cn('flex-row items-center px-[15px] py-3 gap-3 w-[318.88px] h-[50px]', 'border border-base-ink rounded', className)}>
          <View className='flex-row items-center gap-2 flex-1'>
            <CheckboxPrimitive.Root
              ref={ref}
              testID='biometric-checkbox'
              accessibilityRole='checkbox'
              accessibilityState={{ checked, disabled }}
              disabled={disabled}
              checked={checked}
              onCheckedChange={onCheckedChange}
              {...props}
              className={cn(
                'w-6 h-6 border-2 rounded items-center justify-center flex-shrink-0',
                checked
                  ? disabled
                    ? 'bg-disabled border-disabled' // disabled state
                    : 'bg-primary border-primary' // checked state
                  : 'bg-transparent border-base-ink' // unchecked state
              )}
            >
              <CheckboxPrimitive.Indicator>
                <Icon name='check' size={14} className='text-white' />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

            <Text className='flex-1 text-base leading-5 text-base-ink'>Enable {getBiometricText()} for sign in</Text>
          </View>

          {getBiometricIcon()}
        </View>
      </Pressable>
    );
  }
);

BiometricSignIn.displayName = 'BiometricSignIn';

export { BiometricSignIn };`,

  Button: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable, PressableStateCallbackType } from 'react-native';
import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center justify-center rounded-[4px] font-sans text-center', {
  variants: {
    variant: {
      default: ['bg-primary hover:bg-primary-dark active:bg-primary-darker', 'text-white'],
      secondary: ['bg-secondary hover:bg-secondary-dark active:bg-secondary-darker', 'text-white'],
      'accent-cool': ['bg-accent-cool hover:bg-accent-cool-dark active:bg-accent-cool-darker', 'text-base-ink hover:text-base-ink active:text-white'],
      'accent-warm': ['bg-accent-warm hover:bg-accent-warm-dark active:bg-accent-warm-darker', 'text-base-ink hover:text-white active:text-white'],
      base: ['bg-gray-50 hover:bg-gray-60 active:bg-gray-80', 'text-white'],
      outline: [
        'border-2 bg-transparent',
        'border-primary text-primary',
        'hover:border-primary-dark hover:text-primary-dark',
        'active:border-primary-darker active:text-primary-darker'
      ],
      inverse: [
        'border-2 bg-transparent',
        'border-gray-10 text-gray-10',
        'hover:border-gray-5 hover:text-gray-5',
        'active:border-white active:text-white'
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
      true: 'outline-none ring-[4px] ring-blue-vivid-40'
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
      'accent-cool': 'text-base-ink group-active:text-white',
      'accent-warm': 'text-base-ink group-hover:text-white group-active:text-white',
      base: 'text-white',
      outline: ['text-primary', 'group-hover:text-primary-dark', 'group-active:text-primary-darker'],
      inverse: ['text-gray-10', 'group-hover:text-gray-5', 'group-active:text-white']
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
        className={cn('group', props.disabled && 'opacity-50 pointer-events-none', buttonVariants({ variant, size, iconPosition, className }))}
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

  Checkbox: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { cssInterop } from 'nativewind';

cssInterop(CheckboxPrimitive.Root, { className: 'style' });

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
        <View className='flex flex-row items-center gap-2 w-[329px] h-5'>
          <CheckboxPrimitive.Root
            ref={ref}
            disabled={disabled}
            checked={checked}
            onCheckedChange={onCheckedChange}
            {...props}
            className={cn(
              'w-6 h-6 border-2 rounded-sm items-center justify-center flex-shrink-0',
              checked
                ? disabled
                  ? 'bg-disabled border-disabled' // disabled state
                  : 'bg-primary border-primary' // checked state
                : 'bg-transparent border-base-ink' // unchecked state
            )}
          >
            <CheckboxPrimitive.Indicator>
              <Icon name='check' size={14} className='text-white' />
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
import { Icon } from '@/components/ui/icon';
import { cssInterop } from 'nativewind';

cssInterop(CheckboxPrimitive.Root, { className: 'style' });

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
          <View className='flex flex-row gap-2'>
            <View className='w-5'>
              <CheckboxPrimitive.Root
                ref={ref}
                disabled={disabled}
                checked={checked}
                onCheckedChange={onCheckedChange}
                {...props}
                className={cn(
                  'w-5 h-5 border-2 rounded items-center justify-center flex-shrink-0',
                  checked ? (disabled ? 'bg-disabled border-disabled' : 'bg-primary border-primary') : 'bg-transparent border-base-ink'
                )}
              >
                <CheckboxPrimitive.Indicator>
                  <Icon name='check' size={14} className='text-white' />
                </CheckboxPrimitive.Indicator>
              </CheckboxPrimitive.Root>
            </View>

            <View className='flex-1 flex-col gap-1.5'>
              <Text className={cn('text-base leading-5 font-source-sans-pro', disabled ? 'text-disabled' : 'text-base-ink')}>{label}</Text>

              {description && (
                <Text className={cn('text-base leading-5 font-source-sans-pro', disabled ? 'text-disabled' : 'text-base-ink')}>{description}</Text>
              )}
            </View>
          </View>
        </View>
      </Pressable>
    );
  }
);

CheckboxTile.displayName = 'CheckboxTile';

export { CheckboxTile, type CheckboxTileProps };`,

  ButtonGroup: `import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface ButtonGroupProps extends ComponentPropsWithoutRef<typeof View> {
  orientation?: 'horizontal' | 'vertical';
  gap?: number;
  className?: string;
}

const ButtonGroup = forwardRef<View, ButtonGroupProps>(({ className, orientation = 'vertical', gap = 8, style, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn('flex', orientation === 'vertical' ? 'flex-col' : 'flex-row', className)}
      style={[
        {
          gap,
          flexDirection: orientation === 'vertical' ? 'column' : 'row'
        },
        style
      ]}
      {...props}
    />
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };`,

  Card: `import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Image } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

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
  variant?: 'default' | 'media-first' | 'inset';
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

export { Card };`,

  Icon: `import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { iconPaths } from '@/utils/registry';
import { cn } from '@/lib/utils';
import { cssInterop } from 'nativewind';
cssInterop(Svg, { className: 'style' });
cssInterop(View, { className: 'style' });

interface IconProps {
  name: keyof typeof iconPaths;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ name, size = 24, color, className }: IconProps) => {
  const path = iconPaths[name];

  if (!path) {
    console.warn(\`Icon "\${name}" not found\`);
    return null;
  }

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox='0 0 24 24' className={cn(className)} fill='currentColor' stroke='currentColor'>
        <Path d={path} />
      </Svg>
    </View>
  );
};`,

  Link: `import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

const linkVariants = cva('font-source-sans-pro text-base leading-[162%] underline', {
  variants: {
    variant: {
      default: 'text-primary',
      visited: 'text-violet-vivid-70',
      'dark-background': 'text-primary-light'
    },
    external: {
      true: 'flex-row items-center gap-0.5',
      false: ''
    },
    focus: {
      true: 'outline-none ring-4 ring-focus-ring rounded',
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
  variant?: 'default' | 'visited' | 'dark-background';
  external?: boolean;
  focus?: boolean;
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
          {external && (
            <Icon
              name='launch'
              size={10}
              className={cn(variant === 'dark-background' ? 'text-primary-light' : visited ? 'text-violet-vivid-70' : 'text-primary')}
            />
          )}
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
import { Icon } from '@/components/ui/icon';
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
        <Icon name='navigate_before' size={24} className='text-white' />
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
        <Icon name='navigate_next' size={24} className='text-white' />
      </PaginationButton>
    </View>
  );
};

PaginationButton.displayName = 'PaginationButton';
Pagination.displayName = 'Pagination';

export { Pagination };`,

  RadioButton: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext, createContext } from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cn } from '@/lib/utils';
import { cssInterop } from 'nativewind';

cssInterop(RadioGroupPrimitive.Root, { className: 'style' });
cssInterop(RadioGroupPrimitive.Item, { className: 'style' });
cssInterop(RadioGroupPrimitive.Indicator, { className: 'style' });

const RadioContext = createContext<{ value?: string }>({});
interface RadioButtonProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  className?: string;
}

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(
  ({ ...props }, ref) => {
    return (
      <RadioContext.Provider value={{ value: props.value }}>
        <RadioGroupPrimitive.Root ref={ref} {...props}>
          <View className='flex flex-col gap-3'>{props.children}</View>
        </RadioGroupPrimitive.Root>
      </RadioContext.Provider>
    );
  }
);

const RadioButton = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioButtonProps>(({ label, className, ...props }, ref) => {
  const labelId = \`\${props.value}-label\`;
  const { value } = useContext(RadioContext);
  const isSelected = value === props.value;

  const handlePress = (event: GestureResponderEvent) => {
    if (!props.disabled && props.onPress) {
      props.onPress(event);
    }
  };

  return (
    <Pressable
      accessibilityRole='radio'
      accessibilityState={{ checked: isSelected, disabled: props.disabled || false }}
      onPress={handlePress}
      className='flex flex-row items-center gap-2 min-h-[44px] w-[329px] px-4'
    >
      <View className='relative w-5 h-5'>
        <RadioGroupPrimitive.Item
          ref={ref}
          aria-labelledby={labelId}
          testID={\`radio-\${props.value}\`}
          className={cn(
            'absolute left-0 top-0 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white',
            props.disabled ? 'border-disabled' : isSelected ? 'border-primary' : 'border-base-ink'
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator forceMount className='w-full h-full flex items-center justify-center'>
            <View className={cn('w-3.5 h-3.5 rounded-full', isSelected ? (props.disabled ? 'bg-disabled' : 'bg-primary') : 'bg-transparent')} />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </View>

      <Text nativeID={labelId} className={cn('flex-1 text-base leading-5', props.disabled ? 'text-disabled' : 'text-base-ink')}>
        {label}
      </Text>
    </Pressable>
  );
});

RadioButton.displayName = 'RadioButton';
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup, RadioButton };`,

  RadioTile: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext, createContext } from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { cssInterop } from 'nativewind';

cssInterop(RadioGroupPrimitive.Root, { className: 'style' });
cssInterop(RadioGroupPrimitive.Item, { className: 'style' });
cssInterop(RadioGroupPrimitive.Indicator, { className: 'style' });

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
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

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

    const iconName = variant === 'success' ? 'check' : 'error_outline';

    if (layout === 'two-lines') {
      return (
        <View ref={ref} testID='snackbar-container' className={cn(snackbarVariants({ layout }), className)}>
          <View className='flex flex-row gap-2 mb-3'>
            <View className='flex items-center justify-center h-6'>
              <Icon name={iconName} size={24} className='bg-white text-base-darkest rounded-full' />
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
            <Icon name={iconName} size={24} className='bg-white text-base-darkest rounded-full' />
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
  size?: 'default' | 'big';
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

  return (
    <Component
      className={cn(
        'text-base web:select-text',
        textClass, // Context classes take precedence
        className // Allow override if needed
      )}
      ref={ref}
      {...props}
    />
  );
});
Text.displayName = 'Text';

export { Text, TextClassContext };`,

  Textarea: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, TextInput, Text } from 'react-native';
import { cn } from '@/lib/utils';

type TextAreaProps = ComponentPropsWithoutRef<typeof TextInput> & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  maxLength?: number;
  value?: string;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
};

const TextArea = forwardRef<ElementRef<typeof TextInput>, TextAreaProps>(
  ({ className, label, helperText, error, maxLength, value = '', disabled, onChangeText, ...props }, ref) => {
    const characterCount = value.toString().length;

    return (
      <View className='flex flex-col gap-2 w-[329px]'>
        {label && <Text className='text-base-ink text-base leading-5'>{label}</Text>}

        {helperText && <Text className={cn('text-base leading-5', error ? 'text-error-dark' : 'text-gray-50')}>{helperText}</Text>}

        <TextInput
          ref={ref}
          className={cn(
            'min-h-[160px] w-full rounded-md border border-base-ink bg-white px-3 py-2',
            'text-base leading-6 text-base-ink',
            'placeholder:text-gray-50',
            error && 'border-error-dark',
            disabled && 'opacity-50 bg-disabled-lighter',
            className
          )}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'
          placeholderTextColor='#757575'
          editable={!disabled}
          value={value}
          maxLength={maxLength}
          onChangeText={onChangeText}
          {...props}
        />

        {maxLength && (
          <Text className='text-gray-50 text-base leading-5 text-right'>
            {characterCount}/{maxLength}
          </Text>
        )}
      </View>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea, type TextAreaProps };`,

  TextInput: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react';
import { View, TextInput as RNTextInput, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(['flex h-10 w-[329px] rounded-none bg-white', 'font-source-sans-pro text-base', 'text-base-ink placeholder:text-gray-50'], {
  variants: {
    variant: {
      default: 'px-[9px]',
      prefix: 'pl-[41px] pr-[9px]',
      suffix: 'pl-[9px] pr-[45px]'
    },
    state: {
      default: 'border border-base-ink',
      focus: 'border-4 border-focus-ring',
      error: 'border-4 border-error-dark',
      success: 'border-4 border-success',
      disabled: 'bg-disabled-lighter border border-base-dark opacity-50'
    }
  },
  defaultVariants: {
    variant: 'default',
    state: 'default'
  }
});

type TextInputProps = ComponentPropsWithoutRef<typeof RNTextInput> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    helperText?: string;
    errorMessage?: string;
    required?: boolean;
    className?: string;
    suffix?: string;
    prefix?: React.ReactNode;
  };

const TextInput = forwardRef<ElementRef<typeof RNTextInput>, TextInputProps>(
  (
    { className, label, helperText = 'Helper text', errorMessage, required = true, variant = 'default', state = 'default', suffix, prefix, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const showError = state === 'error';
    const isDisabled = state === 'disabled';
    const currentState = isFocused ? 'focus' : state;

    return (
      <View className='relative flex flex-row'>
        {showError && <View className='absolute left-0 top-0 h-full w-[4px] bg-error-dark' />}

        <View className='flex flex-col gap-2 ml-5 flex-1'>
          <View className='flex flex-row gap-1'>
            <Text className='text-base-ink text-base leading-5 font-source-sans-pro'>{label}</Text>
            {required && <Text className='text-error-dark text-base leading-5 font-source-sans-pro'>*</Text>}
          </View>

          {helperText && <Text className='text-gray-50 text-base leading-5 font-source-sans-pro'>{helperText}</Text>}

          {showError && errorMessage && <Text className='text-error-dark text-base leading-5 font-source-sans-pro font-bold'>{errorMessage}</Text>}

          <View className='relative flex flex-row items-center'>
            {variant === 'prefix' && prefix && (
              <View className='absolute left-[9px] top-[8px] bottom-[8px] flex items-center justify-center z-10'>{prefix}</View>
            )}

            <RNTextInput
              ref={ref}
              testID='textbox'
              accessibilityRole='text'
              accessibilityLabel={label}
              accessibilityState={{ disabled: isDisabled }}
              className={cn(inputVariants({ variant, state: currentState }), 'text-base-ink font-sans', className)}
              placeholderTextColor='#757575'
              style={{
                height: 40,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: variant === 'suffix' ? 45 : 9,
                textAlignVertical: 'center',
                includeFontPadding: false,
                fontSize: 16
              }}
              editable={!isDisabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />

            {variant === 'suffix' && suffix && (
              <View className='absolute right-10 top-0 bottom-0 flex items-center justify-center'>
                <Text
                  className='text-gray-50'
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    textAlignVertical: 'center',
                    includeFontPadding: false
                  }}
                >
                  {suffix}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput, type TextInputProps };`,

  Toggle: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import * as TogglePrimitive from '@rn-primitives/toggle';

const toggleVariants = cva('relative flex items-center justify-center', {
  variants: {
    size: {
      default: 'w-[51px] h-[31px]'
    },
    state: {
      on: 'bg-primary',
      off: 'bg-gray-cool-20',
      disabled: 'bg-gray-cool-20 opacity-50'
    }
  },
  defaultVariants: {
    size: 'default',
    state: 'off'
  }
});

const knobVariants = cva('absolute w-[27px] h-[27px] bg-white rounded-full', {
  variants: {
    state: {
      on: 'left-[22px] top-[2px]',
      off: 'left-[2px] top-[2px]',
      disabled: 'left-[2px] top-[2px]'
    }
  },
  defaultVariants: {
    state: 'off'
  }
});

type ToggleProps = Omit<ComponentPropsWithoutRef<typeof TogglePrimitive.Root>, 'asChild'> &
  VariantProps<typeof toggleVariants> & {
    className?: string;
  };

const Toggle = forwardRef<ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, size, disabled, pressed, onPressedChange, ...props }, ref) => {
    const state = disabled ? 'disabled' : pressed ? 'on' : 'off';

    return (
      <View testID='toggle-container' className={cn(toggleVariants({ size, state }), 'rounded-full', className)}>
        <TogglePrimitive.Root
          ref={ref}
          pressed={pressed}
          onPressedChange={onPressedChange}
          disabled={disabled}
          accessibilityRole='switch'
          accessibilityState={{ checked: pressed, disabled }}
          testID='toggle'
          style={{
            width: 51,
            height: 31,
            borderRadius: 9999
          }}
          {...props}
        >
          <View className={cn(knobVariants({ state }))} />
        </TogglePrimitive.Root>
      </View>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle, type ToggleProps };`
};

export async function getComponentTemplate(name: string): Promise<string> {
  const template = COMPONENT_TEMPLATES[name];
  if (!template) {
    throw new Error(`Template not found for component: ${name}`);
  }
  return template;
}
