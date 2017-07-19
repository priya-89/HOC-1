package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertEquals;

		public class HOCdefinition {

			private WebDriver driver;

			private String Landpage = "https://beta.parliament.uk/?utm_source=Selenium&utm_medium=Automation&utm_campaign=Script&utm_term=term&utm_content=content";
			private String oldWebsite = "https://www.parliament.uk/";
			private String ClickXpath = "//div[@class='container']/ul/li[1]/a";


			@Given("^I am on Parliament beta website landing page \"([^\"]*)\"$")
			public void i_am_on_Parliament_beta_website_landing_page_GC(String browser) throws Throwable {

				if (browser.equalsIgnoreCase("GC")) {

					System.setProperty("webdriver.chrome.driver",

							"C:/HOC/Drivers/chromedriver.exe");

					driver = new ChromeDriver();
				}

				driver.get(Landpage);

				driver.manage().window().maximize();

				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		Thread.sleep(10000);


	}

	@Then("^I assert the landing page and a pageview is collected in GA$")
	public void i_assert_the_landing_page_and_a_pageview_is_collected_in_GA() throws Throwable {
		assertEquals(driver.getCurrentUrl(), Landpage);

	}

	@When("^I click on Current parliament website link which is present on bottom of the page$")
	public void i_click_on_Current_parliament_website_link_which_is_present_on_bottom_of_the_page() throws Throwable {
		driver.findElement(By.xpath(ClickXpath)).click();
		//TODO check the pageview in GA
		Thread.sleep(10000);

	}

	@Then("^I assert the current website URL and an outbound event will be collected in GA$")
	public void i_assert_the_current_website_URL_and_an_outbound_event_will_be_collected_in_GA() throws Throwable {

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		assertEquals(driver.getCurrentUrl(), oldWebsite);
		//TODO Check the hit in GA
		driver.quit();

	}

}
