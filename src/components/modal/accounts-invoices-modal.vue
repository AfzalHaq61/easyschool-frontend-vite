<template>
  <!-- View Modal -->
  <div class="modal fade" id="view_invoice">
    <div class="modal-dialog modal-dialog-centered modal-xl invoice-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div
            class="invoice-popup-head d-flex align-items-center justify-content-between"
          >
            <span><img src="@/assets/img/logo.svg" alt="Img" /></span>
            <div class="popup-title">
              <h2>UNIVERSITY NAME</h2>
              <p>Original For Recipient</p>
            </div>
          </div>
          <div class="tax-info">
            <h1>Tax Invoice</h1>
            <div class="row">
              <div class="col-lg-4">
                <div
                  class="tax-invoice-info d-flex align-items-center justify-content-between"
                >
                  <h5>Student Name :</h5>
                  <h4>Walter Roberson</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="tax-invoice-info d-flex align-items-center justify-content-between"
                >
                  <h5>Student ID :</h5>
                  <h4>DD465123</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="tax-invoice-info d-flex align-items-center justify-content-between"
                >
                  <h5>Term :</h5>
                  <h4>Term 1</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="tax-invoice-info d-flex align-items-center justify-content-between"
                >
                  <h5>Invoice No :</h5>
                  <h4>INV681531</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="tax-invoice-info d-flex align-items-center justify-content-between"
                >
                  <h5>Invoice Date :</h5>
                  <h4>24 Apr 2024</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="tax-invoice-info d-flex align-items-center justify-content-between"
                >
                  <h5>Due Date :</h5>
                  <h4>30 Apr 2024</h4>
                </div>
              </div>
            </div>
            <div class="billing-info">
              <span>Bill To :</span>
              <p>
                Walter Roberson <br />
                299 Star Trek Drive, Panama City, Florida, 32405, USA. <br />
                walter@gmail.com <br />
                +45 5421 4523
              </p>
            </div>
            <div class="invoice-product-table">
              <div class="table-responsive invoice-table">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Due Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Semester Fees</td>
                      <td>25 Apr 2024</td>
                      <td>$5,000</td>
                    </tr>
                    <tr>
                      <td>Exam Fees</td>
                      <td>25 Apr 2024</td>
                      <td>$1000</td>
                    </tr>
                    <tr>
                      <td>Transport Fees</td>
                      <td>25 Apr 2024</td>
                      <td>$4,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="billing-info">
                  <span>Important Note: </span>
                  <p class="mb-0">
                    Delivery dates are not guaranteed and Seller <br />
                    has
                  </p>
                  <p>
                    no liability for damages that may be incurred <br />
                    due to any delay. has
                  </p>
                </div>
                <div class="billing-info">
                  <span>Total amount ( in words):</span>
                  <p>USD Ten Thousand One Hundred Sixty Five Only</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="total-amount-tax">
                  <ul>
                    <li>Subtotal</li>

                    <li>Discount 0%</li>

                    <li>IGST 18.0%</li>
                  </ul>
                  <ul>
                    <li>$10,000.00</li>
                    <li>+ $0.00</li>
                    <li>$10,000.00</li>
                  </ul>
                </div>
                <div class="total-amount-tax">
                  <ul class="total-amount">
                    <li>Amount Payable</li>
                  </ul>
                  <ul class="total-amount">
                    <li>$10,165.00</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="payment-info">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-4 pt-4">
                  <h4 class="mb-2">Payment Info:</h4>
                  <h6><span>Debit Card :</span>465 *************645</h6>
                  <h6 class="mb-0"><span>Amount :</span>$10,165</h6>
                </div>
                <div class="col-lg-6 text-end mb-4 pt-4">
                  <h6 class="mb-2">For Dreamguys</h6>
                  <img src="@/assets/img/icons/signature.svg" alt="Img" />
                </div>
              </div>
            </div>
            <div class="term-condition-invoice text-center pt-4 pb-4">
              <span>Terms & Conditions : </span>
              <p>
                Here we can write a additional notes for the client to get a better
                understanding of this invoice.
              </p>
            </div>
            <h6 class="thanks-text">Thanks for your Business</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Modal -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-body text-center">
            <span class="delete-icon">
              <i class="ti ti-trash-x"></i>
            </span>
            <h4>Confirm Deletion</h4>
            <p>
              You want to delete all the marked items, this cant be undone once you
              delete.
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">
                Yes, Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/academic/academic-invoices");
    },
  },
};
</script>
