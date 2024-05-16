import { Container } from "@/Components/shared/Container";
import { OverviewGrid } from "@/Components/shared/OverviewGrid";
import { PageHeader } from "@/Components/shared/PageHeader";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import React from "react";
export default function Dashboard({overviews}) {

    return (
        <AdminLayout>
          <Container>
            <PageHeader/>
            <OverviewGrid items={overviews}/>
            <div className="space-y-6">
              {/*  Recent Orders Section Start */}
              <section className="grid grid-cols-1">
                <div className="card">
                  <div className="card-body space-y-2">
                    <div className="flex w-full justify-between">
                      <h6>Recent Orders</h6>
                      <div className="dropdown" data-placement="bottom-end">
                        <div className="dropdown-toggle">
                          <i className="ti ti-dots-vertical text-lg text-slate-500"></i>
                        </div>
                        <div className="dropdown-content w-[160px]">
                          <ul className="dropdown-list">
                            <li className="dropdown-list-item">
                              <a href="#" className="dropdown-link gap-2"> Action </a>
                            </li>
                            <li className="dropdown-list-item">
                              <a href="#" className="dropdown-link gap-2"> Another Action </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table min-w-[43rem]">
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Ordered At</th>
                            <th>Total</th>
                            <th>Revenue</th>
                            <th>Status</th>
                            <th>
                              <p className="text-right">Actions</p>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex gap-2">
                                <div className="avatar avatar-circle">
                                  <img src="assets/Assets/images/avatar1.png" alt="avatar-img" className="avatar-img" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Ahmed Shakil</p>
                                  <p className="text-xs font-normal text-slate-400">ahmed@example.com</p>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">19 Apr 2023, 10:39 pm</td>
                            <td>$446.50</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge badge-soft-primary">Processing</span>
                            </td>
                            <td>
                              <div className="flex justify-end">
                                <div className="dropdown" data-placement="bottom-start">
                                  <div className="dropdown-toggle">
                                    <i className="w-6 text-slate-500" data-feather="more-horizontal"></i>
                                  </div>
                                  <div className="dropdown-content min-w-[150px]">
                                    <ul className="dropdown-list">
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="external-link"></i>
                                          <span>Details</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="file-text"></i>
                                          <span>Invoice</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="trash-2"></i>
                                          <span>Delete</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex gap-2">
                                <div className="avatar avatar-circle">
                                  <img src="assets/Assets/images/avatar2.png" alt="avatar-img" className="avatar-img" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Pavel Khan</p>
                                  <p className="text-xs font-normal text-slate-400">pavel@example.com</p>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">19 Apr 2023, 10:20 pm</td>
                            <td>$1200.00</td>
                            <td>$200.00</td>
                            <td>
                              <span className="badge badge-soft-warning">Shipped</span>
                            </td>
                            <td>
                              <div className="flex justify-end">
                                <div className="dropdown" data-placement="bottom-start">
                                  <div className="dropdown-toggle">
                                    <i className="w-6 text-slate-500" data-feather="more-horizontal"></i>
                                  </div>
                                  <div className="dropdown-content min-w-[150px]">
                                    <ul className="dropdown-list">
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="external-link"></i>
                                          <span>Details</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="file-text"></i>
                                          <span>Invoice</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="trash-2"></i>
                                          <span>Delete</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex gap-2">
                                <div className="avatar avatar-circle">
                                  <img src="assets/Assets/images/avatar3.png" alt="avatar-img" className="avatar-img" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Shahadat Hossain</p>
                                  <p className="text-xs font-normal text-slate-400">shahadat@example.com</p>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">19 Apr 2023, 9:30 pm</td>
                            <td>$1050.00</td>
                            <td>$175.00</td>
                            <td>
                              <span className="badge badge-soft-primary">Processing</span>
                            </td>
                            <td>
                              <div className="flex justify-end">
                                <div className="dropdown" data-placement="bottom-start">
                                  <div className="dropdown-toggle">
                                    <i className="w-6 text-slate-500" data-feather="more-horizontal"></i>
                                  </div>
                                  <div className="dropdown-content min-w-[150px]">
                                    <ul className="dropdown-list">
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="external-link"></i>
                                          <span>Details</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="file-text"></i>
                                          <span>Invoice</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="trash-2"></i>
                                          <span>Delete</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex gap-2">
                                <div className="avatar avatar-circle">
                                  <img src="assets/Assets/images/avatar4.png" alt="avatar-img" className="avatar-img" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Rizwan Mirza</p>
                                  <p className="text-xs font-normal text-slate-400">rizwan@example.com</p>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">19 Apr 2023, 8:20 pm</td>
                            <td>$2050.00</td>
                            <td>$425.00</td>
                            <td>
                              <span className="badge badge-soft-success">Delivered</span>
                            </td>
                            <td>
                              <div className="flex justify-end">
                                <div className="dropdown" data-placement="bottom-start">
                                  <div className="dropdown-toggle">
                                    <i className="w-6 text-slate-500" data-feather="more-horizontal"></i>
                                  </div>
                                  <div className="dropdown-content min-w-[150px]">
                                    <ul className="dropdown-list">
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="external-link"></i>
                                          <span>Details</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="file-text"></i>
                                          <span>Invoice</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="trash-2"></i>
                                          <span>Delete</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex gap-2">
                                <div className="avatar avatar-circle">
                                  <img src="assets/Assets/images/avatar3.png" alt="avatar-img" className="avatar-img" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Adnan Shaikat</p>
                                  <p className="text-xs font-normal text-slate-400">adnam@example.com</p>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap">19 Apr 2023, 8:15 pm</td>
                            <td>$950.00</td>
                            <td>$100.00</td>
                            <td>
                              <span className="badge badge-soft-warning">Shipped</span>
                            </td>
                            <td>
                              <div className="flex justify-end">
                                <div className="dropdown" data-placement="bottom-start">
                                  <div className="dropdown-toggle">
                                    <i className="w-6 text-slate-500" data-feather="more-horizontal"></i>
                                  </div>
                                  <div className="dropdown-content min-w-[150px]">
                                    <ul className="dropdown-list">
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="external-link"></i>
                                          <span>Details</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="file-text"></i>
                                          <span>Invoice</span>
                                        </a>
                                      </li>
                                      <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-link">
                                          <i className="h-5 text-slate-500" data-feather="trash-2"></i>
                                          <span>Delete</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              {/*  Recent Orders Section End */}

              {/*  Popular Product & Categories Section Start */}
              <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/*  Popular Products  */}
                <div className="card">
                  <div className="card-body flex h-full flex-col justify-between gap-2">
                    {/*  Header  */}
                    <div className="flex w-full justify-between">
                      <h6>Popular Products</h6>
                      <div className="dropdown" data-placement="bottom-end">
                        <div className="dropdown-toggle">
                          <i className="ti ti-dots-vertical text-lg text-slate-500"></i>
                        </div>
                        <div className="dropdown-content w-[160px]">
                          <ul className="dropdown-list">
                            <li className="dropdown-list-item">
                              <a href="#" className="dropdown-link gap-2"> Action </a>
                            </li>
                            <li className="dropdown-list-item">
                              <a href="#" className="dropdown-link gap-2"> Another Action </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*  Popular Products Table  */}
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>Price</th>
                            <th>Sold</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/product16.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 dark:border-slate-400"
                                  alt="product"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Apple Watch 2023</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">Electronics > Accessories</p>
                                </div>
                              </div>
                            </td>
                            <td>APLW001</td>
                            <td>$200.00</td>
                            <td>
                              <p className="whitespace-nowrap">1500 pcs</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/product9.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 dark:border-slate-400"
                                  alt="product"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Nike Sports Shoe</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">Fashion > Shoes</p>
                                </div>
                              </div>
                            </td>
                            <td>NSS068</td>
                            <td>$70.00</td>
                            <td>
                              <p className="whitespace-nowrap">1200 pcs</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/product4.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 dark:border-slate-400"
                                  alt="product"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Headphone</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">Electronics > Gadget</p>
                                </div>
                              </div>
                            </td>
                            <td>WLHP008</td>
                            <td>$50.00</td>
                            <td>
                              <p className="whitespace-nowrap">1050 pcs</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/product12.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 dark:border-slate-400"
                                  alt="product"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Macbook Pro</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">Electronics > Laptop</p>
                                </div>
                              </div>
                            </td>
                            <td>MBP098</td>
                            <td>$1600.00</td>
                            <td>
                              <p className="whitespace-nowrap">700 pcs</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/product14.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 dark:border-slate-400"
                                  alt="product"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Iphone 13 Pro</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">Electronics > Mobile</p>
                                </div>
                              </div>
                            </td>
                            <td>IP13P</td>
                            <td>$1000.00</td>
                            <td>
                              <p className="whitespace-nowrap">500 pcs</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*  Popular Categories  */}
                <div className="card">
                  <div className="card-body flex h-full flex-col justify-between gap-2">
                    {/*  Header  */}
                    <div className="flex w-full justify-between">
                      <h6>Popular Categories</h6>
                      <div className="dropdown" data-placement="bottom-end">
                        <div className="dropdown-toggle">
                          <i className="ti ti-dots-vertical text-lg text-slate-500"></i>
                        </div>
                        <div className="dropdown-content w-[160px]">
                          <ul className="dropdown-list">
                            <li className="dropdown-list-item">
                              <a href="#" className="dropdown-link gap-2"> Action </a>
                            </li>
                            <li className="dropdown-list-item">
                              <a href="#" className="dropdown-link gap-2"> Another Action </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*  Popular Categories Table  */}
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Sold</th>
                            <th>Revenue</th>
                            <th>Growth</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/category1.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 p-0.5 dark:border-slate-400"
                                  alt="category"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Electronics</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">120 items</p>
                                </div>
                              </div>
                            </td>
                            <td>$20,150.00</td>
                            <td>$5,025.00</td>
                            <td>
                              <span className="flex items-center text-xs font-medium text-success-500"
                                ><i className="h-3 w-3" strokeWidth="3px" data-feather="arrow-up-right"></i>2.2%</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/category2.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 p-0.5 dark:border-slate-400"
                                  alt="category"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Fashion</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">450 items</p>
                                </div>
                              </div>
                            </td>
                            <td>$18500.00</td>
                            <td>$6250.00</td>
                            <td>
                              <span className="flex items-center text-xs font-medium text-success-500"
                                ><i className="h-3 w-3" strokeWidth="3px" data-feather="arrow-up-right"></i>3.5%</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/category3.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 p-0.5 dark:border-slate-400"
                                  alt="category"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Furniture</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">50 items</p>
                                </div>
                              </div>
                            </td>
                            <td>$15750.00</td>
                            <td>$6050.00</td>
                            <td>
                              <span className="flex items-center text-xs font-medium text-danger-500"
                                ><i className="h-3 w-3" strokeWidth="3px" data-feather="arrow-down-left"></i>0.5%</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/category4.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 p-0.5 dark:border-slate-400"
                                  alt="category"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Grocery</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">600 items</p>
                                </div>
                              </div>
                            </td>
                            <td>$15500.00</td>
                            <td>$3500.00</td>
                            <td>
                              <span className="flex items-center text-xs font-medium text-success-500"
                                ><i className="h-3 w-3" strokeWidth="3px" data-feather="arrow-up-right"></i>1.5%</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex items-center gap-3">
                                <img
                                  src="assets/Assets/images/category5.png"
                                  className="h-10 w-10 rounded-primary border border-slate-300 p-0.5 dark:border-slate-400"
                                  alt="category"
                                />
                                <div>
                                  <p className="whitespace-nowrap text-sm font-medium">Sports</p>
                                  <p className="whitespace-nowrap text-xs text-slate-400">350 items</p>
                                </div>
                              </div>
                            </td>
                            <td>$14500.00</td>
                            <td>$4500.00</td>
                            <td>
                              <span className="flex items-center text-xs font-medium text-danger-500"
                                ><i className="h-3 w-3" strokeWidth="3px" data-feather="arrow-down-left"></i>2.0%</span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              {/*  Popular Product & Categories Section End */}
            </div>
          </Container>
        </AdminLayout>
    );
}
