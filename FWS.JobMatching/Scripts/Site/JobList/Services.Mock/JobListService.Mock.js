﻿(function () {
    var loanWizardApp = angular.module("LoanWizardApp");


    loanWizardApp.factory('JobListService', function ($q) {
        //$q
        var self = this;
        self.InitialiseOnLoad = false;

        self.MockedLoanId = 497352752;

        self.GetLoanRescheduleModel = function (loanId) {
            var dummyData = { "data": { "LoanRescheduleLimits": { "PaymentTypeOptions": [{ "Text": "Direct Debit", "Value": "0", "Disabled": false, "Selected": true }, { "Text": "Manual", "Value": "1", "Disabled": false, "Selected": false }], "InterestTypeOptions": [{ "Text": "Normal Interest", "Value": "0", "Disabled": false, "Selected": true }, { "Text": "No Interest", "Value": "1", "Disabled": false, "Selected": false }], "InterestCapDate": "2016-01-10T00:00:00", "ValidForDate": "2015-10-12T00:00:00", "MinimumLoanAmount": 60.00, "MaximumLoanAmount": 500.0, "MinPayDate": "+2d", "PaymentFrequencyOptions": [{ "Name": "Weekly", "Value": 0, "MaxNumberOfPayments": 52, "MinimumPayAllowed": 401.0, "MaxPayDate": "+8d" }, { "Name": "Fortnightly", "Value": 1, "MaxNumberOfPayments": 26, "MinimumPayAllowed": 801.0, "MaxPayDate": "+15d" }, { "Name": "Monthly", "Value": 2, "MaxNumberOfPayments": 12, "MinimumPayAllowed": 1739.0, "MaxPayDate": "+1m +1d" }], "ClosedDayOfWeeks": [0, 1], "ClosedDates": [[10, 27, 2015]] }, "LoanRescheduleParams": { "PaymentType": 0, "Employment_PaymentFrequency": 0, "PayAfterTax": 641.00, "NextPayDay": "2015-10-16", "OpeningBalance": -370.48, "NumberOfRepayments": 4, "PromoCode": "" }, "FeeOptions": [{ "Id": 163845, "Name": "Cancelling a direct debit", "Type": 6, "Value": 20.00 }, { "Id": 163848, "Name": "Court Fee", "Type": 10, "Value": 500.00 }, { "Id": 163846, "Name": "Debt Collector", "Type": 8, "Value": 0.00 }, { "Id": 163842, "Name": "Defaulted Fee", "Type": 3, "Value": 80.00 }, { "Id": 163841, "Name": "Direct Debit Fee", "Type": 2, "Value": 10.00 }, { "Id": 163840, "Name": "Establishment Fee", "Type": 1, "Value": 25.00 }, { "Id": 163844, "Name": "Manual payment fee", "Type": 5, "Value": 10.00 }, { "Id": 163851, "Name": "Phone call", "Type": 13, "Value": 5.00 }, { "Id": 163852, "Name": "Post", "Type": 14, "Value": 0.00 }, { "Id": 163843, "Name": "Reschedule Fee", "Type": 4, "Value": 45.00 }, { "Id": 163850, "Name": "SMS", "Type": 12, "Value": 1.00 }, { "Id": 163849, "Name": "Statement Fee", "Type": 11, "Value": 20.00 }, { "Id": 163847, "Name": "Veda Lodgement", "Type": 9, "Value": 20.00 }, { "Id": 35586048, "Name": "Wage Deduction Authority", "Type": 7, "Value": 60.00 }] } };

            var defer = $q.defer();
            defer.resolve(dummyData);
            return defer.promise;
        };

        self.GenerateReschedule = function (model) {
            var dummyData = { "data": { "Calculated": true, "LoanId": 0, "IsActive": true, "IsScheduledWithEmployer": false, "LoanScheduleFilters": { "LoanScheduleId": 0, "DisplayFees": false, "DisplayInstallment": true, "DisplayInterest": false, "DisplayPaidOut": true, "DisplayOthers": false, "DisplayPrincipalAndFees": false, "FilteredLoanEventTypes": [4, 11, 1, 7] }, "LoanScheduleEvents": [{ "LoanSchedule": { "Calculated": false, "LoanId": 0, "IsActive": true, "IsScheduledWithEmployer": false, "LoanScheduleFilters": { "LoanScheduleId": 0, "DisplayFees": false, "DisplayInstallment": true, "DisplayInterest": false, "DisplayPaidOut": true, "DisplayOthers": false, "DisplayPrincipalAndFees": false, "FilteredLoanEventTypes": [4, 11, 1, 7] }, "LoanScheduleEvents": [], "DisplayAddDeductFees": true, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "LoanEstablishmentBalance": -470.28, "TotalLoanValue": 470.28, "TotalEstablishmentDirectDebitsAndInterest": 0, "TotalFeesAndInterest": 0, "TotalPrincipal": -470.28, "TotalDirectDebitFees": 0, "TotalInterest": 0, "TotalEstablishmentFee": 0, "TotalPromoDiscount": 0, "Id": 0, "Version": 0 }, "Type": 7, "TypeValue": "Rescheduled", "Amount": -470.28, "ExpectedBalancePostEvent": -470.28, "RemainingPrincipal": 0, "UnpaidInterestAndFeesPostEvent": -470.28, "Date": "2015-10-09T00:00:00", "LoanDay": 0, "Processed": false, "BankAccountEntryConfirmed": false, "BankAccountEntryDishonoured": false, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "InstallmentNumber": null, "EventNumber": 1, "IsInstallment": false, "IsManualDate": false, "IsManualAmount": false, "IsManualFee": false, "IsManualPayment": false, "Id": 0, "Version": 0 }, { "LoanSchedule": { "Calculated": false, "LoanId": 0, "IsActive": true, "IsScheduledWithEmployer": false, "LoanScheduleFilters": { "LoanScheduleId": 0, "DisplayFees": false, "DisplayInstallment": true, "DisplayInterest": false, "DisplayPaidOut": true, "DisplayOthers": false, "DisplayPrincipalAndFees": false, "FilteredLoanEventTypes": [4, 11, 1, 7] }, "LoanScheduleEvents": [], "DisplayAddDeductFees": true, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "LoanEstablishmentBalance": -470.28, "TotalLoanValue": 470.28, "TotalEstablishmentDirectDebitsAndInterest": 0, "TotalFeesAndInterest": 0, "TotalPrincipal": -470.28, "TotalDirectDebitFees": 0, "TotalInterest": 0, "TotalEstablishmentFee": 0, "TotalPromoDiscount": 0, "Id": 0, "Version": 0 }, "Type": 4, "TypeValue": "Installment", "Amount": 470.28, "ExpectedBalancePostEvent": 0, "RemainingPrincipal": 0, "UnpaidInterestAndFeesPostEvent": 0, "Date": "2015-10-14T00:00:00", "LoanDay": 5, "Processed": false, "BankAccountEntryConfirmed": false, "BankAccountEntryDishonoured": false, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "InstallmentNumber": 1, "EventNumber": 2, "IsInstallment": true, "IsManualDate": false, "IsManualAmount": false, "IsManualFee": false, "IsManualPayment": false, "Id": 0, "Version": 0 }], "DisplayAddDeductFees": true, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "LoanEstablishmentBalance": -470.28, "TotalLoanValue": 470.28, "TotalEstablishmentDirectDebitsAndInterest": 0, "TotalFeesAndInterest": 0, "TotalPrincipal": -470.28, "TotalDirectDebitFees": 0, "TotalInterest": 0, "TotalEstablishmentFee": 0, "TotalPromoDiscount": 0, "Id": 0, "Version": 0 } };
            
            var defer = $q.defer();
            defer.resolve(dummyData);
            return defer.promise;
        };

        self.RescheduleCheck = function (model) {
            var dummyData = { "data": { "IsValid": true} };

            var defer = $q.defer();
            defer.resolve(dummyData);
            return defer.promise;
        };

        self.ApplySchedule = function (model) {
            var dummyData = { "data": { "Calculated": true, "LoanId": 0, "IsActive": true, "IsScheduledWithEmployer": false, "LoanScheduleFilters": { "LoanScheduleId": 0, "DisplayFees": false, "DisplayInstallment": true, "DisplayInterest": false, "DisplayPaidOut": true, "DisplayOthers": false, "DisplayPrincipalAndFees": false, "FilteredLoanEventTypes": [4, 11, 1, 7] }, "LoanScheduleEvents": [{ "LoanSchedule": { "Calculated": false, "LoanId": 0, "IsActive": true, "IsScheduledWithEmployer": false, "LoanScheduleFilters": { "LoanScheduleId": 0, "DisplayFees": false, "DisplayInstallment": true, "DisplayInterest": false, "DisplayPaidOut": true, "DisplayOthers": false, "DisplayPrincipalAndFees": false, "FilteredLoanEventTypes": [4, 11, 1, 7] }, "LoanScheduleEvents": [], "DisplayAddDeductFees": true, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "LoanEstablishmentBalance": -470.28, "TotalLoanValue": 470.28, "TotalEstablishmentDirectDebitsAndInterest": 0, "TotalFeesAndInterest": 0, "TotalPrincipal": -470.28, "TotalDirectDebitFees": 0, "TotalInterest": 0, "TotalEstablishmentFee": 0, "TotalPromoDiscount": 0, "Id": 0, "Version": 0 }, "Type": 7, "TypeValue": "Rescheduled", "Amount": -470.28, "ExpectedBalancePostEvent": -470.28, "RemainingPrincipal": 0, "UnpaidInterestAndFeesPostEvent": -470.28, "Date": "2015-10-09T00:00:00", "LoanDay": 0, "Processed": false, "BankAccountEntryConfirmed": false, "BankAccountEntryDishonoured": false, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "InstallmentNumber": null, "EventNumber": 1, "IsInstallment": false, "IsManualDate": false, "IsManualAmount": false, "IsManualFee": false, "IsManualPayment": false, "Id": 0, "Version": 0 }, { "LoanSchedule": { "Calculated": false, "LoanId": 0, "IsActive": true, "IsScheduledWithEmployer": false, "LoanScheduleFilters": { "LoanScheduleId": 0, "DisplayFees": false, "DisplayInstallment": true, "DisplayInterest": false, "DisplayPaidOut": true, "DisplayOthers": false, "DisplayPrincipalAndFees": false, "FilteredLoanEventTypes": [4, 11, 1, 7] }, "LoanScheduleEvents": [], "DisplayAddDeductFees": true, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "LoanEstablishmentBalance": -470.28, "TotalLoanValue": 470.28, "TotalEstablishmentDirectDebitsAndInterest": 0, "TotalFeesAndInterest": 0, "TotalPrincipal": -470.28, "TotalDirectDebitFees": 0, "TotalInterest": 0, "TotalEstablishmentFee": 0, "TotalPromoDiscount": 0, "Id": 0, "Version": 0 }, "Type": 4, "TypeValue": "Installment", "Amount": 470.28, "ExpectedBalancePostEvent": 0, "RemainingPrincipal": 0, "UnpaidInterestAndFeesPostEvent": 0, "Date": "2015-10-14T00:00:00", "LoanDay": 5, "Processed": false, "BankAccountEntryConfirmed": false, "BankAccountEntryDishonoured": false, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "InstallmentNumber": 1, "EventNumber": 2, "IsInstallment": true, "IsManualDate": false, "IsManualAmount": false, "IsManualFee": false, "IsManualPayment": false, "Id": 0, "Version": 0 }], "DisplayAddDeductFees": true, "Created": "2015-10-09T12:34:03.6624355", "Modified": "2015-10-09T12:34:03.6624355", "LoanEstablishmentBalance": -470.28, "TotalLoanValue": 470.28, "TotalEstablishmentDirectDebitsAndInterest": 0, "TotalFeesAndInterest": 0, "TotalPrincipal": -470.28, "TotalDirectDebitFees": 0, "TotalInterest": 0, "TotalEstablishmentFee": 0, "TotalPromoDiscount": 0, "Id": 0, "Version": 0 } };

            var defer = $q.defer();
            defer.resolve(dummyData);
            return defer.promise;
        };

        self.GetLoanId = function () {
            return 497352752;
        };

        return this;
    });
}());
