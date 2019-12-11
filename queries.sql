-- Database Queries

-- Find all customers with postal code 1010

SELECT PostalCode FROM Customers
where PostalCode is 1010

-- Find the phone number for the supplier with the id 11
select Phone from Suppliers where SupplierID is 11 

-- List first 10 orders placed, sorted descending by the order date
Select * from (SELECT * from Orders
order by OrderDate
limit 10) as sublist
order by Orderdate desc

-- Find all customers that live in London, Madrid, or Brazil
Select * from customers
where city is "London" or city is "Madrid" or country is "Brazil"

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
values ('Bilbo Baggins', 'Mr. Baggins of Bag End', '1 Hobbit-Hole Bagshot Row', 'Hobbiton', '111', 'Middle Earth');
-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customers 
set PostalCode = '11122'
where ContactName is "Mr. Baggins of Bag End"
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

    /* Medium Answer   This returns a list of cities with no-repeats and the number of records is listed as 70 assuming you added bilbo to the list*/
    SELECT distinct city
    FROM customers

    /* Best Answer      This returns the number 70 with a records count of 1  meaning it perfectly counted number of cities*/
    SELECT COUNT(city) from (SELECT distinct city
    FROM customers)
    -- same as above
   SELECT COUNT(distinct city) from customers

    /* Medium Answer   this returns 2 columns... 1 with the city names(no double counts) another with the count for each city total of 70 records*/
    SELECT city, COUNT(*) FROM customers GROUP BY City


-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
    SELECT SupplierName from Suppliers WHERE length(SupplierName) > 20
