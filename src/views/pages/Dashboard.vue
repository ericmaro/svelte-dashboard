<template>
  <div
    class="flex flex-wrap lg:flex-nowrap justify-start lg:space-x-4 space-y-8 lg:space-y-0"
  >
    <!-- <div class="w-full lg:w-2/3 2xl:3/4">
      <div class="">
        <TinySlider
          :options="{
            autoplay: false,
            items: 1,
            responsive: {
              1240: {
                items: 4,
              },
              840: {
                items: 3,
              },
              480: {
                items: 2,
              },
            },
          }"
        >
          <div class="h-40 px-2">
            <div
              class="flex flex-col items-center justify-center space-y-3 h-full border bg-white shadow-sm rounded-md"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p>Total Users</p>
              <div class="text-xl text-green-500 font-medium">11910</div>
            </div>
          </div>

          <div class="h-40 px-2">
            <div
              class="flex flex-col items-center justify-center space-y-3 h-full border bg-white shadow-sm rounded-md"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p>Registered Farmers</p>
              <div class="text-xl text-green-500 font-medium">11889</div>
            </div>
          </div>

          <div class="h-40 px-2">
            <div
              class="flex flex-col items-center justify-center space-y-3 h-full border bg-white shadow-sm rounded-md"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p>Transaction Count</p>
              <div class="text-xl text-green-500 font-medium">17</div>
            </div>
          </div>

          <div class="h-40 px-2">
            <div
              class="flex flex-col items-center justify-center space-y-3 h-full border bg-white shadow-sm rounded-md"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <p>Orders</p>
              <div class="text-xl text-green-500 font-medium">139</div>
            </div>
          </div>

          <div class="h-40 px-2">
            <div
              class="flex flex-col items-center justify-center space-y-3 h-full border bg-white shadow-sm rounded-md"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p>Subscription</p>
              <div class="text-xl text-green-500 font-medium">139</div>
            </div>
          </div>

          <div class="h-40 px-2">
            <div
              class="flex flex-col items-center justify-center space-y-3 h-full border bg-white shadow-sm rounded-md"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <p>Offers</p>
              <div class="text-xl text-green-500 font-medium">139</div>
            </div>
          </div>

          <div class="h-40 px-2">
            <div
              class="flex flex-col items-center justify-center space-y-3 h-full border bg-white shadow-sm rounded-md"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p>USSD Sessions</p>
              <div class="text-xl text-green-500 font-medium">139</div>
            </div>
          </div>
        </TinySlider>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <div class="bg-white rounded-md shadow-sm p-6">
          <p class="mb-4">Graph Title</p>
          <VerticalBarChart :height="200" />
        </div>

        <div class="bg-white rounded-md shadow-sm p-6">
          <p class="mb-4">Graph Title</p>
          <VerticalBarChart :height="200" />
        </div>

        <div class="bg-white rounded-md shadow-sm p-6">
          <p class="mb-4">Graph Title</p>
          <VerticalBarChart :height="200" />
        </div>

        <div class="bg-white rounded-md shadow-sm p-6">
          <p class="mb-4">Graph Title</p>
          <VerticalBarChart :height="200" />
        </div>
      </div>
    </div>

    <div class="w-full lg:w-1/3 2xl:1/4 space-y-4">
      <div class="w-full rounded-md shadow-sm border bg-white p-6">
        <p>Association Reach Threshold</p>

        <ul class="my-4 space-y-4 text-sm h-40 overflow-y-scroll">
          <li class="border-l-4 border-red-500 px-2">
            <div class="flex justify-between space-x-4">
              <div class="space-y-2">
                <p class="text-gray-500">Association</p>
                <p class="">Malinyi Farmers Association</p>
              </div>

              <div class="space-y-2">
                <p class="text-gray-500">Total Amount</p>
                <p>Tsh 66,900</p>
              </div>
            </div>
          </li>

          <li class="border-l-4 border-green-500 px-2">
            <div class="flex justify-between space-x-4">
              <div class="space-y-2">
                <p class="text-gray-500">Association</p>
                <p class="">Malinyi Farmers Association</p>
              </div>

              <div class="space-y-2">
                <p class="text-gray-500">Total Amount</p>
                <p>Tsh 657,000</p>
              </div>
            </div>
          </li>

          <li class="border-l-4 border-red-500 px-2">
            <div class="flex justify-between space-x-4">
              <div class="space-y-2">
                <p class="text-gray-500">Association</p>
                <p class="">Malinyi Farmers Association</p>
              </div>

              <div class="space-y-2">
                <p class="text-gray-500">Total Amount</p>
                <p>Tsh 84,000</p>
              </div>
            </div>
          </li>

          <li class="border-l-4 border-green-500 px-2">
            <div class="flex justify-between space-x-4">
              <div class="space-y-2">
                <p class="text-gray-500">Association</p>
                <p class="">Malinyi Farmers Association</p>
              </div>

              <div class="space-y-2">
                <p class="text-gray-500">Total Amount</p>
                <p>Tsh 1,250,400</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="w-full rounded-md shadow-sm border bg-white p-6">
        <p>Recent Joined</p>

        <table class="table text-xs my-4 h-40 overflow-y-scroll">
          <thead>
            <tr>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">
                Full Name
              </th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">
                Phone
              </th>
              <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b dark:border-dark-5">Angelina</td>
              <td class="border-b dark:border-dark-5">255789343456</td>
              <td class="border-b dark:border-dark-5">April 10th</td>
            </tr>
            <tr>
              <td class="border-b dark:border-dark-5">Brad</td>
              <td class="border-b dark:border-dark-5">255789343456</td>
              <td class="border-b dark:border-dark-5">March 24th</td>
            </tr>
            <tr>
              <td class="border-b dark:border-dark-5">Charlie</td>
              <td class="border-b dark:border-dark-5">255789343456</td>
              <td class="border-b dark:border-dark-5">April 12th</td>
            </tr>
            <tr>
              <td class="border-b dark:border-dark-5">Charlie</td>
              <td class="border-b dark:border-dark-5">255789343456</td>
              <td class="border-b dark:border-dark-5">April 12th</td>
            </tr>
            <tr>
              <td class="border-b dark:border-dark-5">Charlie</td>
              <td class="border-b dark:border-dark-5">255789343456</td>
              <td class="border-b dark:border-dark-5">April 12th</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
  </div>
</template>

<script>
// import VerticalBarChart from "@/components/vertical-bar-chart/Main.vue";

export default {
  components: {
    // VerticalBarChart,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
