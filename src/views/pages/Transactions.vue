<template>
  <div>
    <div class="flex flex-nowrap justify-end items-center">
      <div
        class="w-full lg:w-1/2 text-right text-sm lg:text-base font-medium space-y-2"
      >
        <p class="text-gray-600">Total Income</p>
        <p>Tsh 8,260</p>
      </div>
    </div>

    <div class="space-y-2">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mb-4">
        <div class="flex space-x-2">
          <select
            class="form-select form-select-sm w-1/3 lg:w-1/3"
            aria-label=".form-select-sm example"
          >
            <option>Order By</option>
            <option>Date Added</option>
          </select>

          <div class="input-group w-2/3 lg:w-2/3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Amount (to the nearest dollar)"
            />
            <div class="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex justify-end">Pagination</div>
      </div>

      <div class="overflow-x-auto shadow-md rounded-md">
        <table class="w-full divide-y divide-gray-200 bg-white">
          <thead class="bg-gray-200">
            <tr class="text-left text-xs font-medium uppercase">
              <th class="p-4 tracking-wider">Transaction #</th>
              <th class="p-4 tracking-wider">Status</th>
              <th class="p-4 tracking-wider">Type</th>
              <th class="p-4 tracking-wider">From</th>
              <th class="p-4 tracking-wider">To</th>
              <th class="p-4 tracking-wider">Transaction ID</th>
              <th class="p-4 tracking-wider">Amount</th>
              <th class="p-4 tracking-wider">Transaction Date</th>
            </tr>
          </thead>
          <tbody class="text-xs divide-y divide-gray-200">
            <tr>
              <td class="p-4 whitespace-nowrap">16</td>
              <td class="p-4 whitespace-nowrap">
                <span
                  class="text-xs text-center text-white bg-green-400 rounded-xl py-1 px-3"
                >
                  Paid
                </span>
              </td>
              <td class="p-4 whitespace-nowrap">Collection</td>
              <td class="p-4 whitespace-nowrap">Eric Maro</td>
              <td class="p-4 whitespace-nowrap">AGRINSIGHT Admin</td>
              <td class="p-4 whitespace-nowrap">6GB32IV90TJ</td>
              <td class="p-4 whitespace-nowrap">10.5</td>
              <td class="p-4 whitespace-nowrap">07-13-201907-13-2019</td>
            </tr>
            <tr>
              <td class="p-4 whitespace-nowrap">67</td>
              <td class="p-4 whitespace-nowrap">
                <span
                  class="text-xs text-center text-white bg-green-400 rounded-xl py-1 px-3"
                >
                  Paid
                </span>
              </td>
              <td class="p-4 whitespace-nowrap">Collection</td>
              <td class="p-4 whitespace-nowrap">Eric Maro</td>
              <td class="p-4 whitespace-nowrap">Petrobena</td>
              <td class="p-4 whitespace-nowrap">6GB32IV90TJ</td>
              <td class="p-4 whitespace-nowrap">88,9000</td>
              <td class="p-4 whitespace-nowrap">07-13-201907-13-2019</td>
            </tr>
            <tr>
              <td class="p-4 whitespace-nowrap">13</td>
              <td class="p-4 whitespace-nowrap">
                <span
                  class="text-xs text-center text-white bg-green-400 rounded-xl py-1 px-3"
                >
                  Paid
                </span>
              </td>
              <td class="p-4 whitespace-nowrap">Collection</td>
              <td class="p-4 whitespace-nowrap">Eric Maro</td>
              <td class="p-4 whitespace-nowrap">AGRINSIGHT Admin</td>
              <td class="p-4 whitespace-nowrap">6GB32IV90TJ</td>
              <td class="p-4 whitespace-nowrap">105,000</td>
              <td class="p-4 whitespace-nowrap">07-13-201907-13-2019</td>
            </tr>
            <tr>
              <td class="p-4 whitespace-nowrap">88</td>
              <td class="p-4 whitespace-nowrap">
                <span
                  class="text-xs text-center text-white bg-green-400 rounded-xl py-1 px-3"
                >
                  Paid
                </span>
              </td>
              <td class="p-4 whitespace-nowrap">Collection</td>
              <td class="p-4 whitespace-nowrap">Eric Maro</td>
              <td class="p-4 whitespace-nowrap">AGRINSIGHT Admin</td>
              <td class="p-4 whitespace-nowrap">6GB32IV90TJ</td>
              <td class="p-4 whitespace-nowrap">34,500</td>
              <td class="p-4 whitespace-nowrap">07-13-201907-13-2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const route = useRoute();
    const printRoute = function () {
      console.log(route);
    };

    return {
      printRoute,
    };
  },
});
</script>
