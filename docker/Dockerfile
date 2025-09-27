# Use Maven with JDK 17
FROM maven:3.9.9-eclipse-temurin-17 AS builder

# Pass build args (optional)
ARG APP_ENV
ARG MAVEN_OPTS

# Set working directory
WORKDIR /app

# Copy pom.xml and dependencies first (for caching)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the rest of the source
COPY src ./src

# Build the app
RUN mvn clean package -DskipTests

# ---- Runtime stage ----
FROM eclipse-temurin:17-jdk AS runtime
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]