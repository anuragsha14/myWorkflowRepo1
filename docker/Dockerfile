# Use Maven with JDK 17
FROM {IMAGE} AS builder
ARG MAVEN_SCRIPT
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
RUN mvn ${MAVEN_SCRIPT}

#-----node project--
COPY package.json .
RUN npm install
RUN npm run start

# ---- Runtime stage ----
FROM eclipse-temurin:17-jdk AS runtime
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
RUN cp entrypoint.sh . && chmod +x entrypoint.sh
ENTRYPOINT 
CMD ["echo", "Hello from container!"]