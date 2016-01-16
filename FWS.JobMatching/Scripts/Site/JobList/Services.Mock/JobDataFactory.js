(function () {
    var loanWizardApp = angular.module("LoanWizardApp");


    loanWizardApp.factory('JobDataFactory', function () {
        //$q
        var self = this;
        
        self.GetTestJobs = function () {
            var jobList = [];
            var user = self.GetRandomUser();

            for (var j = 0; j < 200; j++) {
                jobList.push({
                
                    Title: "",
                    User: user,
                    Categories: chance.integer({min: 1, max: 20}),
                    StatusId: chance.integer({min: 1, max: 4}),
                    Description: chance.paragraph({sentences: 4}) ,
                    Comments: [],
                    CurrentOffer: null,
                    Duration: 180,
                    Positions: 1 //The number of people that can take this job
                });   
            }

            for (var i = 0; i < jobList.length; i++) {
                jobList[i].id = 1057 + (i * 21);
            }
            //I have all the copy done - just need someone to set it up and make it look pretty online.

            return defer.promise;
        };

        self.GetRandomUser = function() {
            return self.usersData[chance.integer({min: 0, max: self.usersData.length - 1})];
        };
        
        self.GetUerData = function () {
            if (usersData) return usersData;

            var users = [];

            for (var j = 0; j < 200; j++) {
                var gender = chance.gender();
                var firstName = chance.first({ gender: gender });
                var lastName = chance.last();
                var profileNumber = chance.integer({ min: 0, max: 90 }).toString();
                var profileGender = gender === "Female" ? "women" : "men";

                users.push({
                    Gender: gender,
                    FirstName: firstName,
                    LastName: lastName,
                    DisplayName: firstName + " "  + lastName.substring(0, 1) + ".",
                    Address: chance.address() + ', ' + chance.city() + ', ' + chance.areacode(),
                    PositiveRate: chance.floating({min: 0.78, max: 1, fixed: 2}),
                    LastOnline: new Date(),
                    About: chance.paragraph({sentences: 2}),
                    profileLarge: "https://randomuser.me/api/portraits/" + profileGender + "/" + profileNumber + ".jpg",
                    profileMedium: "https://randomuser.me/api/portraits/med/" + profileGender + "/" + profileNumber + ".jpg",
                    profileSmall: "https://randomuser.me/api/portraits/thumb/" + profileGender + "/" + profileNumber + ".jpg"
                });   
            }

            for (var i = 0; i < users.length; i++) {
                users[i].id = 4057 + (i * 7);
            }
            //I have all the copy done - just need someone to set it up and make it look pretty online.

            self.usersData = users;

            return users;
        };


        self.GetCategoryOptions = function() {
            var statusOptions = [];

            statusOptions.push({
                Id: 1,
                Name: "Open",
                IsOnline: true
            });
            
            statusOptions.push({
                Id: 2,
                Name: "Assigned",
                CanOffer: true
            });
            
            statusOptions.push({
                Id: 3,
                Name: "Expired",
                CanOffer: true
            });
            
            statusOptions.push({
                Id: 4,
                Name: "Cancelled",
                CanOffer: true
            });

            return statusOptions;
        };

        self.GetStatusOptions = function() {
            var statusOptions = [];

            statusOptions.push({
                Id: 1,
                Name: "Open",
                CanOffer: true
            });
            
            statusOptions.push({
                Id: 2,
                Name: "Assigned",
                CanOffer: true
            });
            
            statusOptions.push({
                Id: 3,
                Name: "Expired",
                CanOffer: true
            });
            
            statusOptions.push({
                Id: 4,
                Name: "Cancelled",
                CanOffer: true
            });

            return statusOptions;
        };

        self.BuildJobDetail = function (title, ) {
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

        
        self.usersData = self.GetUerData();

        return this;
    });
}());
