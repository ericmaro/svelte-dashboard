<template>
  <div>
    <div class="flex flex-nowrap justify-end items-center">
      <div class="w-full lg:w-1/2 text-right text-sm font-medium space-y-2">
        <button class="btn btn-dark w-auto mr-1 mb-2">New Product</button>

        <!-- Modal -->
        <!-- End Modal -->
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
              <th class="p-4 tracking-wider">Product Name</th>
              <th class="p-4 tracking-wider">Description</th>
              <th class="p-4 tracking-wider">Packages</th>
              <th class="p-4 tracking-wider">Category</th>
              <th class="p-4 tracking-wider">Created</th>
            </tr>
          </thead>
          <tbody class="text-xs divide-y divide-gray-200">
            <tr>
              <td class="p-4 whitespace-nowrap">YaraBela</td>
              <td class="p-4 whitespace-nowrap">
                Nitrogen and sulphur fertilisers
              </td>
              <td class="p-4 whitespace-nowrap">2kg of Tsh 1</td>
              <td class="p-4 whitespace-nowrap">Fertilizer</td>
              <td class="p-4 whitespace-nowrap">07-13-201907-13-2019</td>
            </tr>
            <tr>
              <td class="p-4 whitespace-nowrap">YaraLiva</td>
              <td class="p-4 whitespace-nowrap">Calcium nitrate fertilisers</td>
              <td class="p-4 whitespace-nowrap">2kg of Tsh 1</td>
              <td class="p-4 whitespace-nowrap">Fertilizer</td>
              <td class="p-4 whitespace-nowrap">07-13-201907-13-2019</td>
            </tr>
            <tr>
              <td class="p-4 whitespace-nowrap">YaraMila</td>
              <td class="p-4 whitespace-nowrap">Compound fertilizers</td>
              <td class="p-4 whitespace-nowrap">2kg of Tsh 1</td>
              <td class="p-4 whitespace-nowrap">Fertilizer</td>
              <td class="p-4 whitespace-nowrap">07-13-201907-13-2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script></script>
