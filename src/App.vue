<template>
  <div class="max-w-[400px] mx-auto my-6 px-6 font-rubik">
    <header>
      <h2 class="text-3xl font-semibold text-gray-600">Air Purifier</h2>
      <p class="text-gray-300 text-sm my-0.5">diy air purifier</p>
    </header>
    <section class="flex items-center">
      <svg
        class="w-2/3 text-gray-700 -ml-8"
        :class="{
          'animate-[spin_2s_linear_infinite]': pwmResolution === modes[0].value,
          'animate-[spin_1s_linear_infinite]': pwmResolution === modes[1].value,
          'animate-[spin_600ms_linear_infinite]':
            pwmResolution === modes[2].value,
          'animate-[spin_400ms_linear_infinite]':
            pwmResolution === modes[3].value,
        }"
        viewBox="0 0 2666 2666"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="g8" transform="matrix(1.3333333,0,0,-1.3333333,0,2666.6667)">
          <g id="g10" transform="scale(0.1)">
            <path
              fill="currentColor"
              d="M 11561.7,7122.5 C 11113,6068.8 9883.18,5578.3 8832.5,6034.4 c -42.66,18.5 -84.37,38.1 -125.18,59.2 -265.32,136.7 -311.07,496.1 -91.05,697.7 393.12,360.2 841.31,1003.7 725.7,2016.4 0,0 -17.62,108.7 21.66,245.6 395.28,-265.1 915.27,-256.8 1302.37,23.4 149.6,108.3 271.2,251.9 352.7,416.5 3.3,-2.9 6.8,-5.8 10.2,-8.8 650,-574.8 890.5,-1521.7 532.8,-2361.9"
              style="fill-opacity: 1; fill-rule: nonzero; stroke: none"
              id="path12"
            />
            <path
              fill="currentColor"
              d="m 9461.79,9238.4 c -83.55,58.9 -156.86,131.4 -217.54,215.4 -3.98,5.4 -7.83,10.9 -12.17,17.2 -285.05,412.9 -186.21,988.1 220.46,1282.5 48.2,34.8 99.68,65.1 152.87,89.9 99.6,46.6 206.2,74.9 316.49,83.9 327.5,26.6 637.9,-116.3 830.3,-382.2 131.7,-181.9 193.2,-405.2 173,-628.7 -9.8,-110.5 -38.9,-217.3 -86.5,-317 -66.4,-140 -168.3,-262.4 -294.8,-354 -322.3,-233.2 -757.04,-236.1 -1082.11,-7"
              style="fill-opacity: 1; fill-rule: nonzero; stroke: none"
              id="path14"
            />
            <path
              fill="currentColor"
              d="m 12081.6,14023.4 c -741,385.1 -1587,560.8 -2457.95,490.1 -537.03,-44.1 -1054.88,-181.4 -1538.97,-408.2 -259.55,-121 -509.82,-268.1 -744.18,-437.6 C 5362.59,12236 4881.45,9437.3 6268.06,7429 l 5.69,-8.3 c 19.2,-27.7 35.78,-51.6 52.2,-73.8 l 1.43,-2 c 294.79,-408 650.79,-760.4 1058.1,-1047.4 v 0 c 168.07,-118.5 342.47,-224.4 521.34,-317.3 1503.37,-781.5 3341.68,-662.8 4742.88,351 614.9,445 1110.8,1040.4 1434.1,1721.9 231.5,485.5 373.1,1004.4 421,1542.5 98.3,1086.7 -200.7,2172.7 -841.8,3058.3 -424.4,586.5 -966.8,1050.1 -1581.4,1369.5 z M 7697.95,5578 c -197,102.4 -388.43,218.6 -573.53,349.1 v 0 c -448.07,315.8 -839.58,703.2 -1163.66,1151.5 -20.22,27.4 -39.29,54.9 -59.45,84.1 l -5.9,8.5 c -1525.69,2209.8 -996.45,5288.6 1179.49,6863.6 257.65,186.3 532.81,348.1 817.95,481.1 532.73,249.5 1102.76,400.7 1693.91,449.2 1752.64,142.3 3413.64,-622.4 4443.34,-2045.6 705.2,-974.1 1034.1,-2169 926,-3364.4 C 14903.4,8963.4 14747.6,8392.4 14493,7858.4 14137.4,7108.8 13591.8,6453.6 12915.3,5964.1 11374.2,4849.1 9351.64,4718.7 7697.95,5578"
              style="fill-opacity: 1; fill-rule: nonzero; stroke: none"
              id="path16"
            />
            <path
              fill="currentColor"
              d="m 9050.36,9368.1 c -5.13,-1.9 -10.18,-3.7 -15.36,-5.4 -822.84,-275.6 -1763.19,-10.6 -2311.85,719.4 -688.27,915.5 -498.1,2225.7 422.19,2907.6 37.36,27.8 75.4,54 113.86,78.9 250.21,160.9 585.2,22.8 649.29,-267.7 114.92,-520.5 447.6,-1232.1 1383.82,-1639 0,0 102.7,-39 201.39,-141.2 -56.64,-28 -111.39,-61.1 -163.18,-98.6 -242.9,-175.8 -404.4,-435.2 -454.97,-730.7 -49.51,-289.1 12.86,-581 174.81,-823.3"
              style="fill-opacity: 1; fill-rule: nonzero; stroke: none"
              id="path18"
            />
            <path
              fill="currentColor"
              d="m 13467.4,10406.7 c -508.4,160.9 -1290.9,228.5 -2111.4,-379 0,0 -84.5,-68.9 -221.4,-103.3 17.7,264.5 -57.7,527.3 -213.7,742.8 -231.7,320.1 -603.2,494.4 -997.09,469.1 0.9,4.6 1.68,9.3 2.73,14 172.76,850.4 872.46,1532.1 1778.86,1642.4 1137.1,138.2 2176.9,-681.6 2307.1,-1819.5 5.3,-46.2 9,-92.2 11.3,-138.1 14.3,-297.1 -272.8,-518.1 -556.4,-428.4"
              style="fill-opacity: 1; fill-rule: nonzero; stroke: none"
              id="path20"
            />
          </g>
        </g>
      </svg>
      <div class="text-center text-gray-600">
        <h3 class="text-4xl">{{ rpm }}</h3>
        <p class="text-left text-gray-300">RPM</p>
      </div>
    </section>
    <section>
      <h3 class="text-2xl text-gray-500 font-semibold">Mode</h3>
      <ul class="my-4 flex space-x-3 text-center justify-center text-gray-400">
        <li v-for="mode in modes">
          <button
            class="py-2 px-5 text-sm shadow-sm rounded-lg cursor-pointer hover:bg-gray-700 hover:text-gray-200"
            @click="changePwm(mode.value)"
            :class="{
              'bg-gray-700 text-gray-200': pwmResolution === mode.value,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-4 mx-auto"
            >
              <path
                fill="currentColor"
                d="M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
              />
            </svg>
            <span class="mt-1 block font-light">{{ mode.title }}</span>
          </button>
        </li>
      </ul>
    </section>
    <section class="fixed bottom-10 left-0 text-center w-full">
      <button
        v-if="isConnected"
        class="shadow px-20 py-4 rounded-full cursor-pointer transition-colors"
        :class="{
          'bg-gray-700 text-gray-200': pwmResolution === 0,
          'hover:bg-gray-100 text-gray-700': pwmResolution !== 0,
        }"
        @click="changePwm(0)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="w-7"
        >
          <path
            fill="currentColor"
            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
          />
        </svg>
      </button>
      <button
        v-else
        class="shadow px-20 py-4 rounded-full cursor-pointer transition-colors"
        :class="{
          'bg-gray-700 text-gray-200': pwmResolution === 0,
          'hover:bg-gray-100 text-gray-700': pwmResolution !== 0,
        }"
        @click="connect"
      >
        Connect
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const serviceUuid = "d900dc08-7bb6-48e2-a26c-fd9d4182d290";
const txUuid = "35211bb6-3c1d-4c8e-9144-74f4a5893962";
const rxUuid = "36a77fc1-3e16-4632-9a50-d51a390b147a";

const modes = [
  {
    title: "Low",
    value: 512,
  },
  {
    title: "Medium",
    value: 683,
  },
  {
    title: "High",
    value: 853,
  },
  {
    title: "Full",
    value: 1023,
  },
];

const pwmResolution = ref(0);
const rpm = ref(0);
const isConnected = ref(false);

let bleDevice;
let rpmCharacteristic;
let pwmCharacteristic;

async function changePwm(resolution: number) {
  if (!pwmCharacteristic) return;

  pwmResolution.value = resolution;
  let encoder = new TextEncoder();
  await pwmCharacteristic.writeValue(encoder.encode(String(resolution)));
}

async function connect() {
  const device = await navigator.bluetooth.requestDevice({
    filters: [
      {
        name: "Mehedis Air Purifier",
      },
    ],
    optionalServices: [serviceUuid],
  });

  bleDevice = await device.gatt.connect();
  isConnected.value = true;

  const service = await bleDevice.getPrimaryService(serviceUuid);

  // Get RPM characteristic
  rpmCharacteristic = await service.getCharacteristic(txUuid);
  rpmCharacteristic.addEventListener("characteristicvaluechanged", (event) => {
    rpm.value = (event.target.value.getUint16(0, true) / 4)
  });
  await rpmCharacteristic.startNotifications();

  // Get PWM characteristic
  pwmCharacteristic = await service.getCharacteristic(rxUuid);
}
</script>
